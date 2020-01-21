<template>
    <div class="app-editor" :style="`--grid-size: ${GridSize}px`">
        <Maps />
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"

import Maps from "./Maps.vue"

@Component({
    components: {
        Maps
    }
})

export default class Editor extends Vue {

    get GridSize(): Number {

        // Get the current layers.
        return this.$store.state.App.Settings.GridSize

    }

}

</script>

<style lang="scss" scoped>
.app-editor {
  background-color: var(--system-background-color);
  margin-left: var(--editor-rulers-size);
  margin-top: var(--editor-rulers-size);
  justify-content: center;
  align-items: center;
  position: relative;
  grid-area: editor;
  overflow: auto;
  display: flex;
}
</style>