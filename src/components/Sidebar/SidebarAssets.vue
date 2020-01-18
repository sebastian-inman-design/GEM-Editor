<template>
    <div></div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import "./SidebarAssets.scss"

@Component

export default class SidebarAssets extends Vue {

    @Prop() private assets!: any;

}

</script>
