<template>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" :width="GridSize" :height="GridSize" patternUnits="userSpaceOnUse">
        <path :d="`M ${GridSize} 0 L 0 0 0 ${GridSize}`" fill="none" stroke="#CDCDCD" stroke-width="0.5"/>
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
        return this.$store.state.Project.GridSize

    }
    
  }

</script>
