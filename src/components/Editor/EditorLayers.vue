<template>
    <div class="app-editor-layers">
        <EditorLayer v-for="layer of Layers" :key="layer.Name" :layer="layer.Name"/>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../store"
import Layer from "../../models/Layer"
import EditorLayer from "./EditorLayer.vue"

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
        return this.$store.state.Project.Layers

    }

}

</script>

<style scoped lang="scss">
.app-editor-layers {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}

</style>
