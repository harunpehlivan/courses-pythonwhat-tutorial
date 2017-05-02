<template>
    <pre class="editor">
    </pre>
</template>

<script>

export default {
  name: 'ace-editor',
  props: ['sentinal', 'code', 'updated', 'lang'],
  data () {
    return {
    }
  },
  mounted () {
    var editor = this.editor = ace.edit(this.$el)

    editor.$blockScrolling = Infinity
    editor.setValue(this.code, -1)
    if (this.lang) editor.session.setMode('ace/mode/' + this.lang)

    editor.on('change', () => this.updated(editor.getValue()) )
  },
  watch: {
    sentinal (newVal) {
      this.editor.setValue(this.code, -1)
    },
    lang (newVal) {
      this.editor.session.setMode("ace/mode/" + newVal)
    }
  }
}
</script>

<style>
</style>
