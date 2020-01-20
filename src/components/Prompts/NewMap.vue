<template>
  <Prompt title="New Map" :width="470">
    <fieldset>
      <legend>Basic Info</legend>
      <div class="field">
        <label class="full-width" data-text="Name:">
          <input type="text" v-model="model.Name">
        </label>
      </div>
      <div class="field">
        <label class="full-width" data-text="Description:">
          <textarea v-model="model.Description"></textarea>
        </label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Dimensions</legend>
      <div class="field">
        <label data-text="Grid Size:">
          <input type="number" :value="GridSize">
        </label>
      </div>
      <div class="field">
        <label data-text="Columns:">
          <input type="number" v-model="model.Columns">
        </label>
      </div>
      <div class="field">
        <label data-text="Rows:">
          <input type="number" v-model="model.Rows">
        </label>
       </div>
    </fieldset>
  </Prompt>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"

  import store from "../../store"
  import Map from "../../vuex/Map"
  import Prompt from "./Prompt.vue"

  @Component({
    components: {
      Prompt
    }
  })

  export default class NewMap extends Vue {

    private model: Map

    constructor() {

      super()

      this.model = new Map()

      this.$root.$on('Callback', this.Callback)

    }

    get GridSize(): Number {

      return this.$store.state.App.Settings.GridSize

    }

    Callback(event: any) {

      this.AddNewMap()

    }

    AddNewMap() {

      this.model.Columns = parseInt(this.model.Columns)
      this.model.Rows = parseInt(this.model.Rows)

      this.$store.dispatch('AddNewMap', this.model)
      this.SetActiveMap(this.model.ID)
      this.model = new Map()

    }

    SetActiveMap(uuid: any) {

      this.$store.dispatch('SetActiveMap', uuid)

    }

  }

</script>