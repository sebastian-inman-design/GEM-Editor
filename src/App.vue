<template>
  <div id="app">
    <Titlebar />
    <Toolbar />
    <Editor  :layers="Project.Layers" :gridsize="Project.GridSize" />
    <Sidebar :layers="Project.Layers" :assets="Project.Assets" />
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from "vue-property-decorator"

  import "./App.scss"

  import store from "./store"
  import Project from "./models/Project"

  import Titlebar from "./components/Titlebar/Titlebar.vue"
  import Toolbar from "./components/Toolbar/Toolbar.vue"
  import Editor from "./components/Editor/Editor.vue"
  import Sidebar from "./components/Sidebar/Sidebar.vue"

  @Component({
    components: {
      Titlebar,
      Toolbar,
      Editor,
      Sidebar
    }
  })

  export default class App extends Vue {

    private Project: Project

    constructor() {

      super()

      this.Project = new Project()

    }

  }

</script>
