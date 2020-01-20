<template>
  <Prompt title="New Project" :width="470">
    <fieldset>
      <legend>Basic Info</legend>
      <div class="field">
        <label class="full-width" data-text="Name:">
          <input type="text" :value="Name">
        </label>
      </div>
      <div class="field">
        <label class="full-width" data-text="Description:">
          <textarea></textarea>
        </label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Dimensions</legend>
      <div class="field">
        <label data-text="Grid Size:">
          <input type="number" :value="GridSize" @input="UpdateGridSize($event)">
        </label>
        <small>{{ Width }}px by {{ Height }}px</small>
      </div>
      <div class="field">
        <label data-text="Columns:">
          <input type="number" :value="Columns" @input="UpdateColumns($event)">
        </label>
      </div>
      <div class="field">
        <label data-text="Rows:">
          <input type="number" :value="Rows" @input="UpdateRows($event)">
        </label>
       </div>
    </fieldset>
  </Prompt>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"

  import store from "../../store"
  import Prompt from "./Prompt.vue"

  @Component({
    components: {
      Prompt
    }
  })

  export default class NewProject extends Vue {

    Name: any = "Untitled Map"

    GridSize: any = 32
    Columns: any = 15
    Rows: any = 10

    Width: any = this.GridSize * this.Columns
    Height: any = this.GridSize * this.Rows

    UpdateGridSize(event: any) {

      this.GridSize = event.target.value
      this.Width = this.GridSize * this.Columns
      this.Height = this.GridSize * this.Rows

    }

    UpdateColumns(event: any) {

      this.Columns = event.target.value
      this.Width = this.GridSize * this.Columns

    }

    UpdateRows(event: any) {

      this.Rows = event.target.value
      this.Height = this.GridSize * this.Rows

    }

  }

</script>