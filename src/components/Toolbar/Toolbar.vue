<template>
  <div class="app-toolbar">
    <Tool tool="Selection" icon="mouse-pointer"/>
    <Tool tool="Brush" icon="brush"/>
    <Tool tool="Fill" icon="fill-drip"/>
    <Tool tool="Collisions" icon="vector-square"/>
    <Tool tool="Eraser" icon="eraser"/>
    <Tool tool="Objects" icon="shapes"/>
    <Tool tool="Lighting" icon="lightbulb"/>
    <Tool tool="Logic" icon="bolt"/>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"

import Tool from "./Tool.vue"

@Component({
    components: {
      Tool
    }
})

export default class Toolbar extends Vue {

    /** Silence is peachy. */

}

</script>

<style lang="scss" scoped>
.app-toolbar {
  -webkit-app-region: no-drag;
  padding-right: var(--editor-toolbar-padding);
  padding-left: var(--editor-toolbar-padding);
  flex-direction: column;
  grid-area: toolbar;
  display: flex;
  button {
    line-height: var(--editor-toolbar-button-size);
    font-size: var(--editor-toolbar-icon-size);
    height: var(--editor-toolbar-button-size);
    width: var(--editor-toolbar-button-size);
    color: var(--inactive-icon-color);
    background-color: transparent;
    text-align: center;
    border-radius: 4px;
    padding: 0;
    border: 0;
    margin: 0;
    &[aria-selected="true"] {
      background-color: var(--system-background-color);
      color: var(--system-accent-color);
    }
    svg {
      max-height: var(--editor-toolbar-icon-size);
      max-width: var(--editor-toolbar-icon-size);
    }
    + button {
      margin-top: var(--editor-toolbar-padding);
    }
  }
}
</style>