<template>
  <div class="panel panel-layers">
    <div class="panel-header"></div>
    <div class="panel-content">
      <div class="layers">
        <div v-for="(Layer, uuid, index) of Layers" :key="index" class="layer" :aria-selected="ActiveLayer === `${uuid}` ? true : false" @click="SetActiveLayer(uuid)">
          <button @click="ToggleLayerVisibility(uuid)">
            <font-awesome-icon :icon="Layer.Visible ? 'eye' : 'eye-slash'"/>
          </button>
          <div class="layer-preview"/>
          <span class="layer-title">{{Layer.Name}}</span>
        </div>
      </div>
    </div>
    <div class="panel-footer">
      <div class="panel-layers-controls">
        <button @click="AddNewLayer()">
          <font-awesome-icon icon="file" />
        </button>
        <button>
          <font-awesome-icon icon="folder" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../../store"
import Map from "../../../vuex/Map"
import Layer from "../../../vuex/Layer"

@Component
export default class PanelLayers extends Vue {

    private model: Layer

    constructor() {

        super()

        this.model = new Layer()

    }

    get GridSize(): any {

      return this.$store.state.App.Settings.GridSize

    }

    get MapUUID(): any {

      return this.$store.state.App.Settings.ActiveMap

    }

    get ActiveMap(): any {

      return this.$store.state.App.Data.Maps[this.MapUUID]

    }

    get Layers(): Layer[] {

      return this.MapUUID ? this.$store.state.App.Data.Maps[this.MapUUID].Layers : {}

    }

    get ActiveLayer(): Layer[] {

      return this.$store.state.App.Data.Maps[this.MapUUID].ActiveLayer

    }

    AddNewLayer() {

      for(let row: any = 0; row < this.ActiveMap.Rows; row++) {

        for(let col: any = 0; col < this.ActiveMap.Columns; col++) {

          this.model.Tiles.push({
            x: col * this.GridSize,
            y: row * this.GridSize
          })

        }

      }

      this.$store.dispatch('AddNewLayer', {
        map: this.MapUUID,
        layer: this.model
      })

      this.SetActiveLayer(this.model.ID)

      this.model = new Layer()

    }

    ToggleLayerVisibility(uuid: any) {

      let layer = this.Layers[uuid]
      layer.Visible = !layer.Visible

      this.$store.dispatch('ToggleLayerVisibility', {
        map: this.MapUUID,
        layer: layer
      })

    }

    SetActiveLayer(uuid: any) {

      this.$store.dispatch('SetActiveLayer', {
        map: this.MapUUID,
        layer: uuid
      })

    }

}

</script>

<style lang="scss" scoped>
.panel-layers {
  .layers {
    flex-direction: column;
    display: flex;
  }
  &-controls {
    flex-direction: row;
    display: flex;
  }
}
.layer {
  align-items: center;
  flex-direction: row;
  padding-bottom: 3px;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 3px;
  display: flex;
  &[aria-selected="true"] {
    background-color: var(--sidebar-panel-header-footer);
  }
  &-preview {
    background-color: #232323;
    border: 1px solid #000000;
    margin-right: 8px;
    height: 32px;
    width: 32px;
  }
  &-title {
    font-size: 10px;
    color: #FFFFFF;
  }
}
</style>