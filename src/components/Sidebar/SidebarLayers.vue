<template>
    <div class="app-sidebar-panel">
        <h4 class="sidebar-panel-title">Layers</h4>
        <div v-for="layer of Layers" :key="layer.Name" :layer="layer.Name">
            {{layer.Name}}
        </div>
        <input v-model="model.Name">
        <button @click="AddNewLayer()">Add Layer</button>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import "./SidebarLayers.scss"

import store from "../../store"
import Layer from "../../models/Layer"

@Component

export default class SidebarLayers extends Vue {

    private model: Layer

    constructor() {

        super()

        this.model = new Layer()

    }

    get Layers(): Layer[] {

        // Get the current layers.
        return this.$store.state.Project.Layers

    }

    AddNewLayer() {

        // Create the new layer.
        this.$store.dispatch('AddNewLayer', this.model)

        // Reset the model.
        this.model = new Layer()

    }

}

</script>
