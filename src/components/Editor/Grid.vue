<template>
  <svg class="app-editor-grid" width="100%" height="100%">
    <defs>
      <pattern id="grid" :width="GridSize" :height="GridSize" patternUnits="userSpaceOnUse">
        <path :d="`M ${GridSize} 0 L 0 0 0 ${GridSize}`" fill="none" stroke="var(--editor-grid-color)" stroke-width="1" stroke-dasharray="2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)"/>
  </svg>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"
  import store from "../../store"

  @Component
  export default class EditorGrid extends Vue {

    get GridSize(): Number {

        // Get the current layers.
        return this.$store.state.Index.Settings.GridSize

    }
    
  }

</script>

<style lang="scss" scoped>
.app-editor-grid {
  pointer-events: none;
  position: absolute;
  left: -1px;
  top: -1px;
  bottom: 0;
  right: 0;
}
</style>