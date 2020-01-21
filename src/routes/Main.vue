<template>
  <div id="app">
    <SystemToolbar/>
    <SystemFrame :style="`--grid-size: ${GridSize}px;`">
      <Actionbar/>
      <Toolbar/>
      <Rulers/>
      <Editor/>
      <Sidebar/>
    </SystemFrame>
    <NewMap/>
    <NewProject/>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from "vue-property-decorator"

  import store from "../store"
  import App from "../vuex/App"
  import Layer from "../vuex/Layer"

  import SystemToolbar from "../system/Toolbar.vue"
  import SystemFrame from "../system/Frame.vue"

  import NewMap from "../components/Prompts/NewMap.vue"
  import NewProject from "../components/Prompts/NewProject.vue"

  import Actionbar from "../components/Actionbar/Actionbar.vue"
  import Toolbar from "../components/Toolbar/Toolbar.vue"
  import Rulers from "../components/Editor/Rulers.vue"
  import Editor from "../components/Editor/Editor.vue"
  import Sidebar from "../components/Sidebar/Sidebar.vue"

  @Component({
    components: {
      SystemToolbar,
      SystemFrame,
      NewMap,
      NewProject,
      Actionbar,
      Toolbar,
      Rulers,
      Editor,
      Sidebar
    }
  })

  export default class Main extends Vue {

    get GridSize(): any {

      return this.$store.state.App.Settings.GridSize

    }

  }

</script>