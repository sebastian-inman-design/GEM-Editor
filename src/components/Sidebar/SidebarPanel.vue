<template>
    <div class="app-sidebar-panel">
        <slot></slot>
    </div>
</template>


<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component

export default class SidebarPanel extends Vue {

    /** Silence is peachy. */

}

</script>


<style lang="scss">
    .panel {
        background-color: var(--sidebar-panel-background);
        flex-direction: column;
        position: relative;
        display: flex;
        &-header,
        &-footer {
            background-color: var(--sidebar-panel-header-footer);
            min-height: var(--input-height);
            align-items: center;
            display: flex;
            padding: 6px;
        }
        &-header {
            border-bottom: 1px solid #222222;
        }
        &-content {
            overflow-x: hidden;
            overflow-y: scroll;
            max-height: 250px;
            min-height: 100px;
            flex: 0 1 auto;
        }
        &-footer {
            border-top: 1px solid #222222;
            button {
                color: var(--inactive-icon-color);
                background-color: transparent;
                border: 0;
            }
        }
    }
</style>