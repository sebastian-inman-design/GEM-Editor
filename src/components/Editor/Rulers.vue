<template>
  <div class="app-editor-ruler">
    <div class="editor-ruler horizontal"></div>
    <div class="editor-ruler vertical"></div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class EditorRulers extends Vue {

    /** Silence is peachy. */

}

</script>

<style lang="scss" scoped>
  .app-editor-ruler {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    .editor-ruler {
      background-color: #343434;
      position: absolute;
      &.horizontal {
        height: 20px;
        right: 0;
        left: 0;
        top: 0;
      }
      &.vertical {
        width: 20px;
        bottom: 0;
        left: 0;
        top: 0;
      }
    }
  }
</style>