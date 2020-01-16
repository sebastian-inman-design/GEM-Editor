<template>
    <canvas class="app-editor-layer" layer="prop.layer"></canvas>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
    components: {}
})

export default class EditorLayer extends Vue {

    /** Nothing here **/
    
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
