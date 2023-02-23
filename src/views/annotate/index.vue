<template>
  <div id="main-editor" />
</template>

<script>
import { Config } from '../../../public/js/config'
import { Editor } from '../../../public/js/editor.js'
import { Data } from '../../../public/js/data.js'
import { manager } from '../../../public/js/backup/manager.js'
import { editorTemplate } from '../../../public/js/template/editorTemplate'
import { analyseDomStr } from '@/utils/tools'

export default {
  name: 'Home',
  data() {
    return {
      pointsGlobalConfig: ''
    }
  },
  created() {
    this.pointsGlobalConfig = new Config()

    window['pointsGlobalConfig'] = this.pointsGlobalConfig

    this.pointsGlobalConfig.load()

    document.documentElement.className = `theme-${this.pointsGlobalConfig.theme}`

    document.body.addEventListener('keydown', (event) => {
      if (event.ctrlKey && 'asdv'.indexOf(event.key) !== -1) event.preventDefault()
    })

    this.$nextTick(() => {
      this.start()
    })
  },
  methods: {
    async start() {
      const mainEditor = await this.createMainEditor()

      const url_string = `http://127.0.0.1:8081/`
      const url = new URL(url_string)

      // language
      const scene = url.searchParams.get('scene')
      const frame = url.searchParams.get('frame')

      if (scene && frame) {
        mainEditor.load_world(scene, frame)
      }
    },
    async createMainEditor() {
      const maindiv = document.querySelector('#main-editor')
      analyseDomStr(editorTemplate, maindiv)

      const editorCfg = this.pointsGlobalConfig
      const dataCfg = this.pointsGlobalConfig

      const data = new Data(dataCfg)
      await data.init()

      const editor = new Editor(
        maindiv.lastElementChild,
        maindiv,
        editorCfg,
        data,
        'main-editor'
      )
      window['editor'] = editor
      editor.run()

      manager.initEditor(editor)

      return editor
    }
  }
}
</script>

<style scoped>
@import "../../../public/css/main.css";
</style>
