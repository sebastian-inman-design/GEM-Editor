<template>
  <div id="app" :theme="SystemTheme">
    <SystemToolbar/>
    <SystemFrame :style="`--grid-size: ${GridSize}px`">
      <Actionbar/>
      <Toolbar/>
      <Editor/>
      <Sidebar/>
    </SystemFrame>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from "vue-property-decorator"

  import store from "../store"
  import Index from "../models/Index"
  import Layer from "../models/Layer"

  import SystemToolbar from "../system/Toolbar.vue"
  import SystemFrame from "../system/Frame.vue"

  import Actionbar from "../components/Actionbar/Actionbar.vue"
  import Toolbar from "../components/Toolbar/Toolbar.vue"
  import Editor from "../components/Editor/Editor.vue"
  import Sidebar from "../components/Sidebar/Sidebar.vue"

  @Component({
    components: {
      SystemToolbar,
      SystemFrame,
      Actionbar,
      Toolbar,
      Editor,
      Sidebar
    }
  })

  export default class Main extends Vue {

    constructor() {

      super()

    }

    get GridSize(): any {

      return this.$store.state.Index.Settings.GridSize

    }

    get SystemTheme(): String {

      return this.$store.state.Index.System.Theme

    }

  }

</script>