#! /usr/bin/env node

const pug = require('pug');
const fs = require('fs');
const {ChapterParser} = require('datacamp-teach-parser');
const marked = require('marked')

// funcs ----------------------------------------------------------------------
function modifyEx(ex) {
    ex.anchor = ex.title.replace(/ /g, '-')
    ex.assignmentHtml = marked.parse(ex.assignment)
    ex.instructionsHtml = marked.parse(ex.instructions)
    return ex
}


// main -----------------------------------------------------------------------
var chapter_files = fs.readdirSync('.').filter(v => /chapter.*/.test(v))

// Compile template.pug, and render a set of data
var cp = new ChapterParser()
var chapters = chapter_files.map((v) => JSON.parse(cp.parse(fs.readFileSync(v))))

for (let ii in chapters) {
    var chap = chapters[ii]
    var exs = chap.exercises
                  .filter((v) => v.type != "VideoExercise")
                  .map((v) => modifyEx(v))

    chap.exercises = exs

    chap.url = chap.title.replace(/ /g, '-').toLowerCase() + '.html'
}

for (let ii in chapters) {
    console.log(ii)
    var {exercises, url} = chapters[ii]
    var out = pug.renderFile(__dirname + '/../src/site-templates/index.pug', {exercises, chapters, url})
    fs.writeFileSync(chapters[ii].url, out)

    if (ii == 0) fs.writeFileSync('index.html', fs.readFileSync(url))
}

fs.writeFileSync('build.js', fs.readFileSync(__dirname + '/../dist/build.js'))
