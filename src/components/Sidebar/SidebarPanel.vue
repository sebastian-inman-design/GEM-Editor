<template>
    <div class="app-sidebar-panel">
        <h4 class="sidebar-panel-title">{{title}}</h4>
        <slot></slot>
    </div>
</template>


<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import "./SidebarPanel.scss"

@Component

export default class SidebarPanel extends Vue {

    @Prop() private title!: String;

}

</script>
