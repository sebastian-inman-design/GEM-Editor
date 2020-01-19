<template>
  <div class="system-tabs-container">
    <div class="system-tabs-logo">
      <svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
        <path d="m376.18 32.203h-240.36c-5.586 0-10.748 2.98-13.541 7.818l-120.18 208.16c-2.793 4.838-2.793 10.798 0 15.636l120.18 208.16c2.793 4.838 7.955 7.818 13.541 7.818h240.36c5.586 0 10.748-2.98 13.541-7.818l120.18-208.16c2.793-4.838 2.793-10.798 0-15.636l-120.18-208.16c-2.793-4.838-7.955-7.818-13.541-7.818z" fill="#FFD45D"/>
        <path d="m512 256h-102.48l-76.761 132.95 51.24 88.749c2.338-1.35 4.327-3.304 5.723-5.723l120.18-208.16c1.397-2.418 2.095-5.118 2.095-7.817z" fill="#FF6500"/>
        <path d="m332.76 388.95h-153.52l-51.24 88.749c2.338 1.35 5.025 2.095 7.818 2.095h240.36c2.793 0 5.48-0.745 7.818-2.095l-51.24-88.749z" fill="#FF9416"/>
        <path d="M179.24,388.953L102.479,256H0c0,2.699,0.698,5.399,2.095,7.818L122.277,471.98  c1.397,2.419,3.385,4.373,5.723,5.723L179.24,388.953z" fill="#FFC13F"/>
        <path d="M179.24,123.047L128,34.297c-2.338,1.35-4.327,3.304-5.723,5.723L2.095,248.183  C0.698,250.601,0,253.301,0,256h102.479L179.24,123.047z" fill="#FFD45D"/>
        <path d="m179.24 123.05h153.52l51.24-88.75c-2.338-1.35-5.025-2.095-7.818-2.095h-240.36c-2.793 0-5.48 0.745-7.818 2.095l51.24 88.75z" fill="#FFC13F"/>
        <path d="M332.76,123.047L409.521,256H512c0-2.699-0.698-5.399-2.095-7.817L389.723,40.02  c-1.396-2.419-3.385-4.373-5.723-5.723L332.76,123.047z" fill="#FF9416"/>
        <polygon points="332.76 123.05 179.24 123.05 102.48 256 179.24 388.95 332.76 388.95 409.52 256" fill="#FF7B05"/>
        <path d="m182.01 113.74 9.786-7.309c2.227-1.663 5.173 0.821 3.91 3.297l-5.55 10.88c-0.593 1.163-0.242 2.584 0.824 3.337l9.975 7.048c2.27 1.604 0.818 5.174-1.927 4.737l-12.063-1.917c-1.289-0.205-2.533 0.568-2.92 1.815l-3.621 11.665c-0.824 2.654-4.668 2.376-5.101-0.369l-1.905-12.064c-0.204-1.289-1.323-2.233-2.628-2.216l-12.213 0.161c-2.779 0.037-3.703-3.705-1.226-4.965l10.885-5.54c1.163-0.592 1.715-1.948 1.295-3.184l-3.927-11.565c-0.894-2.632 2.379-4.666 4.344-2.7l8.632 8.641c0.924 0.923 2.384 1.029 3.43 0.248z" fill="#fff"/>
      </svg>
    </div>
    <div class="system-tabs">
      <button v-for="(map, uuid, index) of Maps" :key="index" class="system-tab" :aria-selected="ActiveMap === `${uuid}` ? true : false">
        <div class="system-tab-delete" @click="DeleteMap(uuid)">
          <font-awesome-icon icon="times" />
        </div>
        <span class="system-tab-name" @click="SetActiveMap(uuid)">{{map.Name}}</span>
      </button>
    </div>
    <button class="system-new-tab" @click="AddNewMap()">
      <font-awesome-icon icon="plus" />
    </button>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../store"
import Map from "../models/Map"

@Component
export default class SystemTabs extends Vue {

  private model: Map

  constructor() {

    super()

    this.model = new Map()

  }

  get Maps(): Map {

    return this.$store.state.Index.Data.Maps

  }

  get ActiveMap(): Map {

    return this.$store.state.Index.Settings.ActiveMap

  }

  AddNewMap() {

    this.model.Name = "Test Map"
    this.$store.dispatch('AddNewMap', this.model)
    this.SetActiveMap(this.model.ID)
    this.model = new Map()

  }

  SetActiveMap(uuid: any) {

    this.$store.dispatch('SetActiveMap', uuid)

  }

  DeleteMap(uuid: any) {

    this.$store.dispatch('DeleteMap', uuid)

  }

}

</script>

<style lang="scss" scoped>
.system-tabs-container {
  align-items: center;
  margin-bottom: -1px;
  flex-direction: row;
  padding: 4px 0 0 0;
  display: flex;
  .system-new-tab {
    -webkit-app-region: no-drag;
    background-color: transparent;
    border-radius: 4px;
    margin-left: 8px;
    color: #6f6f6f;
    height: 32px;
    width: 32px;
    border: 0;
    &:hover {
      background-color: var(--system-background-color);
    }
  }
}
.system-tabs {
  height: var(--editor-toolbar-width);
  flex-direction: row;
  display: flex;
  &-logo {
    -webkit-app-region: no-drag;
    height: var(--editor-toolbar-width);
    width: var(--editor-toolbar-width);
    justify-content: center;
    display: inline-flex;
    align-items: center;
    > img,
    > svg {
      margin: 0;
      width: 24px;
    }
  }
  .system-tab {
    -webkit-app-region: no-drag;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: none;
    background-color: transparent;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: #6f6f6f;
    font-weight: 600;
    margin: 0;
    &[aria-selected="true"] {
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
      border-right-color: var(--editor-border-color);
      border-left-color: var(--editor-border-color);
      border-top-color: var(--editor-border-color);
      background-color: var(--system-frame-color);
      color: var(--system-accent-color);
    }
    &-name {
      line-height: var(--editor-toolbar-width);
      height: var(--editor-toolbar-width);
      padding-right: 10px;
    }
    &-delete {
      background-color: transparent;
      border-radius: 4px;
      margin-right: 8px;
      line-height: 24px;
      color: #6f6f6f;
      height: 24px;
      width: 24px;
      border: 0;
      &:hover {
        background-color: var(--system-background-color);
      }
    }
  }
}
</style>