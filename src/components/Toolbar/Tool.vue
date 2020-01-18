<template>
    <button class="app-toolbar-tool" :aria-selected="ActiveTool === `${tool}` ? true : false" @click="SetActiveTool(`${tool}`)">
        <font-awesome-icon :icon="icon" />
    </button>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"


@Component({
    components: {}
})

export default class Tool extends Vue {

    @Prop() tool!: String
    @Prop() icon!: String

    get ActiveTool(): Number {

        // Get the current layers.
        return this.$store.state.Index.Settings.ActiveTool

    }

    SetActiveTool(tool: String) {

      this.$store.commit('SetActiveTool', tool)

    }

}

</script>