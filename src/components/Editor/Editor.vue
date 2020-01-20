<template>
    <div class="app-editor" :style="`--grid-size: ${GridSize}px`">
        <div class="app-editor-map">
            <EditorLayers />
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"

import EditorRulers from "./Rulers.vue"
import EditorLayers from "./Layers.vue"

@Component({
    components: {
        EditorRulers,
        EditorLayers
    }
})

export default class Editor extends Vue {

    get GridSize(): Number {

        // Get the current layers.
        return this.$store.state.App.Settings.GridSize

    }

}

</script>

<style lang="scss" scoped>
.app-editor {
  background-color: var(--system-background-color);
  justify-content: center;
  align-items: center;
  position: relative;
  grid-area: editor;
  overflow: auto;
  display: flex;
  &-map {
    margin: var(--grid-size);
    position: sticky;
    overflow: hidden;
    min-height: 480px;
    min-width: 640px;
    cursor: cell;
    left: 0;
    top: 0;
    z-index: 1;
    &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background-position: -1px -1px;
        border: 1px solid var(--editor-grid-color);
        background-size: var(--grid-size) var(--grid-size);
        background-image: linear-gradient(to right, var(--editor-grid-color) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--editor-grid-color) 1px, transparent 1px);
    }
  }
}
</style>