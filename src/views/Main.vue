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

  import store from "../store"
  import Index from "../models/Index"
  import Layer from "../models/Layer"

  import IndexDB from "../indexdb"

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

    private Index: Index

    constructor() {

      super()

      this.Index = new Index()
      this.Index.Project.DateCreated = new Date().toLocaleString()

      const db = new IndexDB("GEM")
      db.Create(this.Index)

      // Object.values([

      //   new Layer({ Name: "Layer1" }),
      //   new Layer({ Name: "Layer2" }),
      //   new Layer({ Name: "Layer3" })
        
      // ]).map(layer => {

      //   this.$store.dispatch('AddNewLayer', layer)

      // })

    }

    get SystemTheme(): String {

      return this.$store.state.Index.System.Theme

    }

  }

</script>