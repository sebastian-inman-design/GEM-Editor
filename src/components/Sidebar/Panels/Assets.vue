<template>
  <div class="panel panel-assets">
    <div class="panel-header">
      <select @change="SetActiveAsset($event.target.value)">
        <option v-for="(Asset, uuid, index) of Assets" :key="index" :value="uuid" :selected="ActiveAsset === `${uuid}` ? true : false">
          {{ Asset.Name }}
        </option>
      </select>
    </div>
    <div class="panel-content">
      <div class="asset-tiles" :style="`--asset-url: url('${Asset.Base64}')`">
        <button v-for="(Tile, index) of Tiles" :key="index" :style="`background-position: ${Tile.x}px ${Tile.y}px`"></button>
      </div>
    </div>
    <div class="panel-footer">
      <button @click="UploadAsset()">Upload</button>
      <input aria-hidden="true" id="asset-uploader" type="file" accept="image/x-png, image/gif, image/jpeg">
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../../store"
import Asset from "../../../models/Asset"

@Component
export default class PanelAssets extends Vue {

    private model: Asset

    constructor() {

        super()

        this.model = new Asset()

    }

    UploadAsset() {

      let assetUploader: any = document.getElementById('asset-uploader')

      assetUploader.click()
      assetUploader.addEventListener('change', (event: any) => {

        if(event.target.files && event.target.files[0]) {

          this.model.Name = event.target.files[0].name
          this.model.Type = event.target.files[0].type
          this.model.Size = event.target.files[0].size

          let reader = new FileReader()

          reader.onload = (event: any) => {

            let image = new Image()

            image.onload = () => {

              this.model.Base64 = event.target.result
              this.model.Width = image.width
              this.model.Height = image.height

              let rows = image.height / this.GridSize
              let cols = image.width / this.GridSize

              for(let r = 0; r < rows; r++) {

                for(let c = 0; c < cols; c++) {

                  this.model.Tiles.push({
                    x: (c * this.GridSize) * -1,
                    y: (r * this.GridSize) * -1
                  })

                }

              }

              this.AddNewAsset()

            }

            image.src = event.target.result

          }

          reader.readAsDataURL(event.target.files[0])

        }

      })

    }

    get GridSize(): any {

      return this.$store.state.Index.Settings.GridSize

    }

    get Assets(): Asset[] {

      return this.ActiveAsset ? this.$store.state.Index.Data.Assets : {}

    }

    get ActiveAsset(): any {

      return this.$store.state.Index.Settings.ActiveAsset

    }

    get Asset(): any {

      return this.ActiveAsset ? this.$store.state.Index.Data.Assets[this.ActiveAsset] : {}

    }

    get Tiles(): any {

      return this.ActiveAsset ? this.Asset.Tiles : {}

    }

    AddNewAsset() {

      this.$store.dispatch('AddNewAsset', this.model)

      this.SetActiveAsset(this.model.ID)

      this.model = new Asset()

    }

    SetActiveAsset(uuid: String) {

      this.$store.dispatch('SetActiveAsset', uuid)

    }

}

</script>

<style lang="scss" scoped>
.asset-tiles {
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 2px;
  button {
    border: 1px solid var(--editor-border-color);
    background-image: var(--asset-url);
    background-color: transparent;
    background-repeat: no-repeat;
    min-width: var(--grid-size);
    display: inline-flex;
    margin: 2px;
    padding: 0;
    &::before {
      content: "";
      padding-bottom: 100%;
      display: block;
      width: 100%;
    }
    &[aria-selected="true"] {
      box-shadow: 0 0 0 1px var(--system-accent-color);
    }
  }
}
</style>