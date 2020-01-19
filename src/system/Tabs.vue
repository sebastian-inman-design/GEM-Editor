<template>
  <div class="system-tabs-container">
    <div class="system-tabs">
      <button v-for="(map, uuid, index) of Maps" :key="index" class="system-tab" :aria-selected="ActiveMap === `${uuid}` ? true : false" @click="SetActiveMap(uuid)">
        {{map.Name}}
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
  flex-direction: row;
  display: flex;
  height: 48px;
  .system-tab {
    -webkit-app-region: no-drag;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    border-bottom: none;
    background-color: transparent;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    justify-content: center;
    display: inline-flex;
    padding-right: 16px;
    padding-left: 16px;
    color: #6f6f6f;
    height: 48px;
    margin: 0;
    &:first-of-type {
      border-top-left-radius: 0;
      border-left: 0;
    }
    &[aria-selected="true"] {
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
      border-right-color: var(--editor-border-color);
      border-left-color: var(--editor-border-color);
      border-top-color: var(--editor-border-color);
      background-color: var(--system-frame-color);
      color: var(--system-toolbar-title-color);
    }
  }
}
</style>