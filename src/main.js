import Vue from 'vue'
import DcLiteEditor from './DcLiteEditor.vue'

new Vue({
  el: '#docwhat',
  components: {DcLiteEditor}
})

// sidebar stuff

document.addEventListener('DOMContentLoaded', () => activateOnClick('.sidebar a.section-link'));

function activateOnClick(selector) {
    var activeEl = null

    document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('click', ({target}) => toggleActive(target, activeEl))
    })

    function toggleActive(el) {
        if (activeEl) activeEl.classList.remove('active')

        el.classList.add('active')
        activeEl = el
    }
}
