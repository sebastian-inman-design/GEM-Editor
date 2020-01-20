<template>
    <canvas class="app-editor-layer" :layer="Layer.ID"></canvas>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"

@Component
export default class EditorLayer extends Vue {

    @Prop() Layer!: any

    constructor() {

        super()

    }

    get GridSize(): Number {

        // Get the current layers.
        return this.$store.state.App.Settings.GridSize

    }
    
}

</script>

<style scoped lang="scss">
.app-editor-layer {
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}
</style>
