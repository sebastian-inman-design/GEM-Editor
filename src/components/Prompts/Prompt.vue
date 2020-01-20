<template>
  <div class="prompt" :style="`--prompt-width: ${width}px;`" :aria-hidden="Prompt != title">
    <div class="prompt-title">{{ title }}</div>
    <div class="prompt-content">
      <slot></slot>
    </div>
    <div class="prompt-footer">
      <div class="prompt-controls">
        <button type="button" @click="Cancel">Cancel</button>
        <button type="button">OK</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Prompt extends Vue {

  @Prop() title!: String
  @Prop() controls!: Array<[]>
  @Prop() width!: Number

  get Prompt(): any {

    return this.$store.state.Index.Prompt

  }

  Cancel(prompt: String) {

    this.$store.dispatch('ShowPrompt', false)

  }
    
}

</script>

<style lang="scss" scoped>
.prompt {
  box-shadow: inset 0 0 0 1px var(--prompt-border-color-inside), 0 14px 28px 6px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--prompt-border-color-outside);
  background-color: var(--prompt-background-color);
  margin-left: calc(var(--prompt-width) / -2);
  width: var(--prompt-width);
  border-radius: 4px;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 30%;
  &::before {
    content: '';
    position: fixed;
    height: 200vh;
    width: 200vw;
    left: -100vw;
    top: -100vh;
    z-index: -1;
  }
  &-title,
  &-content,
  &-footer {
    position: relative;
    z-index: 1;
  }
  &-title {
    font-size: var(--system-toolbar-title-font-size);
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
    color: var(--system-toolbar-title-color);
    text-align: center;
    padding: 8px 16px;
  }
  &-content {
    padding: 8px 16px 0 16px;
  }
  &-footer {
    justify-content: flex-end;
    display: flex;
    padding: 16px;
  }
}
</style>