<template>
    <div class="app-sidebar control-module">
        <div class="app-sidebar-handle"></div>

        <SidebarPanel title="Layers">
            <SidebarLayers />
        </SidebarPanel>
        
        <SidebarPanel title="Assets">
            <SidebarAssets :assets="assets"/>
        </SidebarPanel>

        <input type="number" @input="UpdateGridSize($event)">

    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import "./Sidebar.scss"
import SidebarPanel  from "./SidebarPanel.vue"
import SidebarLayers from "./SidebarLayers.vue"
import SidebarAssets from "./SidebarAssets.vue"

@Component({

    components: {
        SidebarPanel,
        SidebarLayers,
        SidebarAssets
    }

})

export default class Sidebar extends Vue {
    
    @Prop() private layers!: any
    @Prop() private assets!: any

    UpdateGridSize(event: any) {

        this.$store.dispatch('UpdateGridSize', event.target.value)

    }

}

</script>
