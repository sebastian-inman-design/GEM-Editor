<template>
    <div class="app-titlebar control-module">
        <input :value="Title" @change="RenameProject($event)">
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"
import "./Titlebar.scss"

@Component({
    components: {}
})

export default class Titlebar extends Vue {

    get Title() {

        // Get the current layers.
        return this.$store.state.Project.Title

    }

    RenameProject(event: any) {

        this.$store.dispatch('RenameProject', event.target.value)

    }

}

</script>
