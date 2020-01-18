<template>
    <div class="app-sidebar">
        
        <div class="app-sidebar-handle" @mousedown="StartResize($event)"></div>

        <SidebarPanel>

            <SidebarTabs :tabs="['Navigator', 'Camera']">
                <div slot="Navigator"/>
                <div slot="Camera"/>
            </SidebarTabs>

            <SidebarTabs :tabs="['Layers']" startingTab="Layers">
                <PanelLayers slot="Layers"/>
            </SidebarTabs>

            <SidebarTabs :tabs="['Properties']" startingTab="Properties">
                <div slot="Properties"/>
            </SidebarTabs>

        </SidebarPanel>

    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"

import SidebarPanel  from "./SidebarPanel.vue"
import SidebarTabs from "./SidebarTabs.vue"

import PanelLayers from "./Panels/Layers.vue"

@Component({

    components: {
        SidebarPanel,
        SidebarTabs,
        PanelLayers
    }

})

export default class Sidebar extends Vue {

    private minWidth: Number = 260
    private maxWidth: Number = 520
    private Resizing: Boolean = false

    constructor() {

        super()

        // Get the current sidebar width.
        let width: any = this.SidebarWidth

        // Set the default width.
        this.UpdateSidebarWidth(width)

    }

    get SidebarWidth(): Number {

        return this.$store.state.Index.Settings.SidebarWidth

    }

    StartResize(event: any) {

        // Start resizing.
        this.Resizing = true

        // Get the current sidebar width.
        let width: any = this.SidebarWidth

        // Get the starting mouse coords.
        let startCoord: any = event.clientX

        document.addEventListener('mousemove', (event: any) => {

            if(this.Resizing) {

                // Set the new sidebar width.
                if(event.clientX > startCoord) { width -= (event.clientX - startCoord) }
                if(event.clientX < startCoord) { width += (startCoord - event.clientX) }

                // Limit the size of the sidebar.
                if(width < this.minWidth) width = this.minWidth
                if(width > this.maxWidth) width = this.maxWidth

                // Reset the starting point.
                startCoord = event.clientX

                // Update the sidebar model.
                this.UpdateSidebarWidth(width)

            }

        })

        document.addEventListener('mouseup', (event: any) => {

            // Stop resizing.
            this.Resizing = false

        })

    }

    UpdateSidebarWidth(width: number) {

        document.documentElement.style.setProperty('--editor-sidebar-width', `${width}px`)
        this.$store.commit('UpdateSidebarWidth', width)

    }

}

</script>

<style lang="scss" scoped>
.app-sidebar {
  border-top: 1px solid var(--editor-border-color);
  flex-direction: column;
  position: relative;
  grid-area: sidebar;
  padding-left: 3px;
  display: flex;
  .app-sidebar-handle {
    background-color: transparent;
    position: absolute;
    cursor: col-resize;
    height: 100%;
    width: 3px;
    left: 0;
  }
}
</style>