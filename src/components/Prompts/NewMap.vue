<template>

  <Prompt title="New Map" :width="470">
    <template slot="content">
      <fieldset>
        <legend>Map Info</legend>
        <Field label="Name:" classes="full-width">
          <input type="text" v-model="model.Name">
        </Field>
        <Field label="Description:" classes="full-width">
          <textarea v-model="model.Description"></textarea>
        </Field>
      </fieldset>
      <fieldset>
        <legend>Map Size</legend>
        <Field label="Columns:">
          <input type="number" v-model="model.Columns">
        </Field>
        <Field label="Rows:">
          <input type="number" v-model="model.Rows">
        </Field>
      </fieldset>
    </template>
    <template slot="controls">
      <button type="button" @click="AddNewMap()">OK</button>
    </template>
  </Prompt>
  
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"

  import store from "../../store"
  import Map from "../../vuex/Map"

  import Prompt from "./Prompt.vue"
  import Field from "../../elements/Inputs/Field.vue"

  @Component({
    components: {
      Prompt,
      Field
    }
  })

  export default class NewMap extends Vue {

    private model: Map = new Map()

    get GridSize(): any {

      return this.$store.state.App.Settings.GridSize

    }

    AddNewMap() {

      this.model.Columns = parseInt(this.model.Columns)
      this.model.Rows = parseInt(this.model.Rows)

      this.model.Width = this.model.Columns * this.GridSize
      this.model.Height = this.model.Rows * this.GridSize

      this.$store.dispatch('AddNewMap', this.model)
      this.$store.dispatch('ShowPrompt', false)

      this.SetActiveMap(this.model.ID)
      this.model = new Map()

    }

    SetActiveMap(uuid: any) {

      this.$store.dispatch('SetActiveMap', uuid)

    }

  }

</script>