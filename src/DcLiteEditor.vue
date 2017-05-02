<template>

    <div>
        <ul class="nav nav-tabs">
            <li v-for="chunk in exChunks" :class="{active: isActive(chunk)}">
                <a @click.stop="activate(chunk)">{{chunk}}</a>
            </li>
            <li>
                <button class="btn" @click="runExercise">run</button>
            </li>
        </ul>

        <div v-if="mode == 'edit'">
            <ace-editor :sentinal="activeChunk" 
                        :code="activeCode" 
                        :updated="updateActiveCode"
                        :lang="code.lang">
            </ace-editor>
        </div>
        <div id="dc-lite-preview" v-else v-html="exerciseHtml"></div>
    </div>


</template>

<script>

var utils = require('./utils.js');
import AceEditor from './AceEditor.vue'

export default {
  name: 'app',
  components: {AceEditor},
  props: ['exerciseData'],
  data () {
    return {
      exChunks: ['pre_exercise_code', 'sample_code', 'solution', 'sct'],
      code: {
        pre_exercise_code: "",
        sample_code: "",
        solution: "",
        sct: "",
        lang: ""
      },
      activeChunk: 'sample_code',
      mode: 'edit',
      exerciseHtml: ""
    }
  },
  beforeMount () {
    if (this.exerciseData) this.code = Object.assign(this.code, JSON.parse(this.exerciseData))
    console.log("CODE -----")
    console.log(this.code)
  },
  computed: {
    activeCode: {
      get () { return this.code[this.activeChunk] },
      set (val) { this.code[this.activeChunk] = val }
    }
  },
  methods: {
    isActive (chunk) { return chunk == this.activeChunk },
    activate (chunk) { 
        this.activeChunk = chunk
        this.mode = 'edit'
    },
    updateActiveCode (val) {
        this.activeCode = val
    },
    runExercise () {
        var newCode = utils.genExerciseHtml(this.code).outerHTML;
        this.exerciseHtml = newCode;
        this.mode = 'party time!'
        setTimeout(() => window.initAddedDCLightExercises(), 1000)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.editor {
  width: 625px;
  height: 300px;
}
</style>
