<template>
    <div class="app-editor">
        <div class="app-editor-map">
            <EditorLayers />
        </div>
        <EditorGrid />
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import EditorLayers from "./Layers.vue"
import EditorGrid from "./Grid.vue"

@Component({
    components: {
        EditorLayers,
        EditorGrid
    }
})

export default class Editor extends Vue {

    /** Silence is peachy. */

}

</script>

<style lang="scss" scoped>
.app-editor {
  background-color: var(--system-background-color);
  border: 1px solid var(--editor-border-color);
  position: relative;
  grid-area: editor;
  overflow: hidden;
  &-map {
    position: absolute;
    overflow: hidden;
    cursor: cell;
    z-index: 1;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
  }
}
</style>