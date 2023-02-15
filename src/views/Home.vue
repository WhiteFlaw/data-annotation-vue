<template>
  <div id="main-editor"></div>
</template>

<script>
import { Config } from "../../public/js/config.js";
import { Editor } from "../../public/js/editor.js";
import { Data } from "../../public/js/data.js";
import { manager } from "../../public/js/backup/manager.js";
import { editorTemplate } from "../../public/js/template/editorTemplate";
import { analyseDomStr } from "../../public/js/util";

export default {
  name: "Home",
  created() {
    let pointsGlobalConfig = new Config();
    window["pointsGlobalConfig"] = pointsGlobalConfig;

    pointsGlobalConfig.load();

    document.documentElement.className = "theme-" + pointsGlobalConfig.theme;

    document.body.addEventListener("keydown", (event) => {
      if (event.ctrlKey && "asdv".indexOf(event.key) !== -1) {
        event.preventDefault();
      }
    });
    this.$nextTick(() => {
      this.start();
    });
  },
  methods: {
    async start() {
      let mainEditor = await this.createMainEditor();

      let url_string = window.location.href;
      let url = new URL(url_string);
      //language
      let scene = url.searchParams.get("scene");
      let frame = url.searchParams.get("frame");

      if (scene && frame) {
        mainEditor.load_world(scene, frame);
      }
    },
    async createMainEditor() {
      let maindiv = document.querySelector("#main-editor");
      analyseDomStr(editorTemplate, maindiv);

      let editorCfg = pointsGlobalConfig;
      let dataCfg = pointsGlobalConfig;

      let data = new Data(dataCfg);
      await data.init();

      let editor = new Editor(
        maindiv.lastElementChild,
        maindiv,
        editorCfg,
        data,
        "main-editor"
      );
      window["editor"] = editor;
      editor.run();

      manager.initEditor(editor);

      return editor;
    },
  },
};
</script>

<style scoped>
@import "../../public/css/main.css";
</style>
