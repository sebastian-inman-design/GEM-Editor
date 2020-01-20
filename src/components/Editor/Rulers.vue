<template>
  <div class="app-editor-ruler">
    <div class="editor-ruler horizontal"></div>
    <div class="editor-ruler vertical"></div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Rulers extends Vue {

    /** Silence is peachy. */

}

</script>

<style lang="scss" scoped>
  .app-editor-ruler {
    bottom: var(--system-frame-padding);
    left: var(--editor-toolbar-width);
    top: var(--editor-toolbar-width);
    pointer-events: none;
    position: absolute;
    z-index: 5;
    right: 0;
    .editor-ruler {
      background-color: #343434;
      position: absolute;
      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
      }
      &::before {
        background-size: var(--grid-size) var(--grid-size);
      }
      &::after {
        background-size: calc(var(--grid-size) / 4) calc(var(--grid-size) / 4);
      }
      &.horizontal {
        height: var(--editor-rulers-size);
        right: 0;
        left: 0;
        top: 0;
        &::before,
        &::after {
          left: var(--editor-rulers-size);
        }
        &::before {
          background-image:linear-gradient(to right, var(--editor-rulers-dashes) 1px, transparent 1px);
          height: 50%;
        }
        &::after {
          background-image:linear-gradient(to right, var(--editor-rulers-dashes) 1px, transparent 1px);
          height: 25%;
        }
      }
      &.vertical {
        width: var(--editor-rulers-size);
        bottom: 0;
        left: 0;
        top: 0;
        &::before,
        &::after {
          top: var(--editor-rulers-size);
        }
        &::before {
          background-image:linear-gradient(to bottom, var(--editor-rulers-dashes) 1px, transparent 1px);
          width: 50%;
        }
        &::after {
          background-image:linear-gradient(to bottom, var(--editor-rulers-dashes) 1px, transparent 1px);
          width: 25%;
        }
      }
    }
  }
</style>