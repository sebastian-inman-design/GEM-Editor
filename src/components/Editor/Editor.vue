<template>
    <div class="app-editor">
        <EditorRulers/>
        <div class="app-editor-map">
            <EditorLayers />
            <EditorGrid />
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import EditorRulers from "./Rulers.vue"
import EditorLayers from "./Layers.vue"
import EditorGrid from "./Grid.vue"

@Component({
    components: {
        EditorRulers,
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
  padding: var(--editor-rulers-size);
  position: relative;
  grid-area: editor;
  overflow: scroll;
  &-map {
    border: 1px dashed var(--editor-grid-color);
    transform: translate3d(-50%, -50%, 0);
    position: absolute;
    overflow: hidden;
    height: 1280px;
    width: 1280px;
    cursor: cell;
    z-index: 1;
    left: 50%;
    top: 50%;
  }
}
</style>