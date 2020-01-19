<template>
    <div>
        <div v-for="(layer, uuid, index) of Layers" :key="index" class="sidebar-layer" :aria-selected="ActiveLayer === `${uuid}` ? true : false" @click="SetActiveLayer(uuid)">
            <div class="sidebar-layer-preview"/>
            <span class="sidebar-layer-title">{{layer.Name}}</span>
        </div>
        <input v-model="model.Name">
        <button @click="AddNewLayer()">Add Layer</button>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../../store"
import Map from "../../../models/Map"
import Layer from "../../../models/Layer"

@Component
export default class PanelLayers extends Vue {

    private model: Layer

    constructor() {

        super()

        this.model = new Layer()

    }

    get ActiveMap(): any {

      return this.$store.state.Index.Settings.ActiveMap

    }

    get Layers(): Layer[] {

        return this.ActiveMap ? this.$store.state.Index.Data.Maps[this.ActiveMap].Layers : {}

    }

    get ActiveLayer(): Layer[] {

      return this.$store.state.Index.Data.Maps[this.ActiveMap].ActiveLayer

    }

    AddNewLayer() {

      this.$store.dispatch('AddNewLayer', {
        map: this.ActiveMap,
        layer: this.model
      })

      this.SetActiveLayer(this.model.ID)

      this.model = new Layer()

    }

    SetActiveLayer(uuid: any) {

      this.$store.dispatch('SetActiveLayer', {
        map: this.ActiveMap,
        layer: uuid
      })

    }

}

</script>

<style lang="scss" scoped>
.sidebar-layer {
  border-bottom: 1px solid #222222;
  width: calc(100% + 40px);
  align-items: center;
  flex-direction: row;
  padding-bottom: 3px;
  margin-right: -20px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: -20px;
  padding-top: 3px;
  display: flex;
  &[aria-selected="true"] {
    background-color: var(--system-accent-color);
  }
  &:first-of-type {
    border-top: 1px solid #222222;
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