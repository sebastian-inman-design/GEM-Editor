<template>
  <div class="field">
    <label :class="classes" :data-text="label">
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Field extends Vue {

  @Prop() label!:   String
  @Prop() classes!: String

}

</script>