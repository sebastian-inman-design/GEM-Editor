<template>
    <div class="app-editor-layers">
        <EditorLayer v-for="layer of Layers" :key="layer.ID" :layer="layer"/>
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
    position: absolute;
    height: 100%;
    width: 100%;
}
</style>