<template>
  <div id="app" :theme="SystemTheme">
    <SystemToolbar/>
    <SystemFrame>
      <Actionbar/>
      <Toolbar/>
      <Editor/>
      <Sidebar/>
    </SystemFrame>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from "vue-property-decorator"

  import "./App.scss"

  import store from "./store"
  import Project from "./models/Project"
  import Layer from "./models/Layer"

  import SystemToolbar from "./system/Toolbar.vue"
  import SystemFrame from "./system/Frame.vue"

  import Actionbar from "./components/Actionbar/Actionbar.vue"
  import Toolbar from "./components/Toolbar/Toolbar.vue"
  import Editor from "./components/Editor/Editor.vue"
  import Sidebar from "./components/Sidebar/Sidebar.vue"

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

  export default class App extends Vue {

    private Project: Project

    constructor() {

      super()

      this.Project = new Project()
      this.Project.DateCreated = new Date().toLocaleString()

      Object.values([

        new Layer({ Name: "Layer1" }),
        new Layer({ Name: "Layer2" }),
        new Layer({ Name: "Layer3" })
        
      ]).map(layer => {

        this.$store.dispatch('AddNewLayer', layer)

      })

    }

    get SystemTheme(): String {

      return this.$store.state.Project.System.Theme

    }

  }

</script>
