<template>
    <div class="app-editor">
        <EditorLayers />
        <EditorGrid />
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import EditorLayers from "./EditorLayers.vue"
import EditorGrid from "./EditorGrid.vue"

@Component({
    components: {
        EditorLayers,
        EditorGrid
    }
})

export default class Editor extends Vue {

    @Prop() private layers!: any;
    @Prop() private gridsize!: number;

}

</script>

<style scoped lang="scss">
.app-editor {
    background-color: #F1F2EE;
    color: rgba(0, 0, 0, 0.025);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
}

</style>
