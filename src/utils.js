var request = require('superagent')
//var {ChapterParser} = require('datacamp-teach-parser')
//var _ = require('lodash')

module.exports = {
    //getExerciseFromFile,
    genExerciseHtml,
    htmlToObj
}

const BLOCKNAMES = ['pre_exercise_code', 'sample_code', 'solution', 'sct'];

/*
function getExerciseFromFile(url) {
    return request
        .get(url)
        .then(function(res) {
            if (res.statusCode == 200) {
                chapter_parser = new ChapterParser()
                console.log(res)
                var exs = JSON.parse(chapter_parser.parse(res.text))
                    .exercises
                    .filter((v) => v.type != 'VideoExercise')
                    .map((v) => _.pick(v, [...BLOCKNAMES, 'lang']))

                return exs
            }
        })
}
*/

function genExerciseHtml(ex) {
    var div = document.createElement('div');
    div.setAttribute('data-datacamp-exercise', "");
    div.setAttribute('data-lang', ex.lang);
    for (let k of BLOCKNAMES) 
        div.appendChild(genCodeHtml(k, ex[k]));
    
    return div
}

function genCodeHtml(name, inner){
    var el = document.createElement('code');
    el.innerHTML = inner ? inner : "";
    el.setAttribute("data-type", hyphenate(name));
    console.log("CODE ELEMENT CREATED:")
    console.log(inner)
    console.log(el)
    return el
}

function hyphenate(k) {
    return k.replace('_', '-')
}

function htmlToObj(el){
    var blocks = ['pre-exercise-code', 'sample-code', 'solution', 'sct', 'hint'],
        output = {}
    
    blocks.forEach( (v) => {
        var child = el.querySelector(`[data-type = ${v}]`);
        output[v] = child ? child.innerHTML : ""; 
    });

    return output
}
