<template>
    <label class="input-toggle" :data-checked="checked">
        <span>{{ label }}</span>
        <input :name="name" type="checkbox" :checked="checked">
    </label>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
    components: {}
})

export default class Toggle extends Vue {

    @Prop() name!:    String
    @Prop() label!:   String
    @Prop() checked!: Boolean

}

</script>