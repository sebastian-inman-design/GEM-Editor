<template>
    <div class="app-editor-layers">
        <EditorLayer v-for="layer of Layers" :key="layer.Name" :layer="layer.Name"/>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../store"
import Layer from "../../models/Layer"

import EditorLayer from "./Layer.vue"

@Component({
    components: {
        EditorLayer
    }
})

export default class EditorLayers extends Vue {

    private model: Layer

    constructor() {

        super()

        this.model = new Layer()

    }

    get Layers(): Layer[] {

        // Get the current layers.
        return this.$store.state.Index.Data.Layers

    }

}

</script>

<style lang="scss" scoped>
.app-editor-layers {
  border: 1px dotted var(--editor-grid-color);
  transform: translate3d(-50%, -50%, 0);
  position: absolute;
  left: 50%;
  top: 50%;

  min-height: 320px;
  min-width: 354px;

}
</style>