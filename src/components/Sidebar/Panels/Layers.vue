<template>
    <div>
        <div v-for="layer of Layers" :key="layer.Name" class="sidebar-layer">
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
import Layer from "../../../models/Layer"

@Component

export default class PanelLayers extends Vue {

    private model: Layer

    constructor() {

        super()

        this.model = new Layer()

    }

    get Layers(): Layer[] {

        // Get the current layers.
        return this.$store.state.Index.Data.Layers

    }

    AddNewLayer() {

        // Create the new layer.
        this.$store.dispatch('AddNewLayer', this.model)

        // Reset the model.
        this.model = new Layer()

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
  margin-bottom: 3px;
  display: flex;
  &:first-of-type {
    border-top: 1px solid #222222;
    padding-top: 3px;
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