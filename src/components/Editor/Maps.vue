<template>
  <div class="app-editor-maps">
    <div 
      v-for="(Map, uuid, index) of Maps" 
      :key="index" 
      :id="`map-${uuid}`" 
      class="map" 
      :aria-hidden="ActiveMap !== `${uuid}`"
      @mousedown="StartEdit($event)" 
      @mouseup="StopEdit()"
      @mouseleave="StopEdit()"
      @mousemove="EditLayer($event)"
      :style="`min-width: calc(var(--grid-size) * ${Map.Columns}); min-height: calc(var(--grid-size) * ${Map.Rows});`">
      <div class="map-layers" v-if="ActiveMap === uuid">
        <div v-for="(Layer, uuid, index) of Map.Layers" :key="index" class="map-layer" :aria-hidden="!Layer.Visible">
          <canvas :id="`layer-${Layer.ID}`" :width="Map.Width" :height="Map.Height"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../store"
import Map from "../../vuex/Map"

@Component
export default class Maps extends Vue {

  Editing: Boolean = false
  Image: any = new Image()
  Canvas: any = undefined
  CTX: any = undefined
  
  get GridSize(): any { return this.$store.state.App.Settings.GridSize }
  get ActiveTool(): any { return this.$store.state.App.Settings.ActiveTool }

  get ActiveMap(): any { return this.$store.state.App.Settings.ActiveMap }
  get Maps(): any { return this.$store.state.App.Data.Maps }
  get Map(): any { return this.Maps[this.ActiveMap] }
  
  get ActiveAsset(): any { return this.$store.state.App.Settings.ActiveAsset }
  get Asset(): any { return this.$store.state.App.Data.Assets[this.ActiveAsset] }

  get ActiveTile(): any { return this.$store.state.App.Settings.ActiveSprite }
  get Tile(): any { return this.Asset.Tiles[this.ActiveTile] }

  CurrentTile(event: any): any {

    let tile: any = false

    let cx = event.layerX
    let cy = event.layerY

    Object.keys(this.Map.Layers[this.Map.ActiveLayer].Tiles).map((i: any) => {

      if((cx > this.Map.Layers[this.Map.ActiveLayer].Tiles[i].x && cx < (this.Map.Layers[this.Map.ActiveLayer].Tiles[i].x + this.GridSize)) && 
        (cy > this.Map.Layers[this.Map.ActiveLayer].Tiles[i].y && cy < (this.Map.Layers[this.Map.ActiveLayer].Tiles[i].y + this.GridSize))) {

        tile = this.Map.Layers[this.Map.ActiveLayer].Tiles[i]

      }

    })

    return tile

  }

  StartEdit(event: any) {

    if(this.Map.ActiveLayer) {

      this.Editing = true
      this.Canvas = document.getElementById(`layer-${this.Map.ActiveLayer}`)
      this.CTX = this.Canvas.getContext('2d')
      this.Image.src = this.Asset.Base64

      this.EditLayer(event)

    }

  }

  EditLayer(event: any) {

    if(this.Editing) {

      switch(this.ActiveTool) {

        case "Brush":
          this.DrawTile(this.CurrentTile(event), event)
          break;

        case "Eraser":
          this.EraseTile(this.CurrentTile(event))
          break;

        case "Collisions":
          this.AddCollision(this.CurrentTile(event))
          break;

      }

    }

  }

  DrawTile(tile: any, event: any) {
    
    this.EraseTile(tile)

    this.CTX.drawImage(
      this.Image, 
      Math.abs(this.Tile.x),
      Math.abs(this.Tile.y), 
      this.GridSize, 
      this.GridSize, 
      tile.x, 
      tile.y, 
      this.GridSize, 
      this.GridSize
    )

  }

  AddCollision(tile: any) {

    this.CTX.fillStyle = 'rgba(255, 0, 0, 0.25)'
    this.CTX.fillRect(tile.x, tile.y, this.GridSize, this.GridSize)

  }

  EraseTile(tile: any) {

    this.CTX.clearRect(tile.x, tile.y, this.GridSize, this.GridSize)

  }

  StopEdit() {

    this.Editing = false
    this.Canvas = undefined
    this.CTX = undefined

  }

}

</script>

<style lang="scss" scoped>
.map {
  position: relative;
  overflow: hidden;
  z-index: 1;
  &-layers {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &-layer {
    background-color: transparent;
    position: absolute;
    height: 100%;
    width: 100%;
    &::before {
      content: '';
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      position: absolute;
      pointer-events: none;
      background-position: -1px -1px;
      border: 1px solid var(--editor-grid-color);
      background-size: var(--grid-size) var(--grid-size);
      background-image: linear-gradient(to right, var(--editor-grid-color) 1px, transparent 1px),
                      linear-gradient(to bottom, var(--editor-grid-color) 1px, transparent 1px);
    }
  }
}
</style>