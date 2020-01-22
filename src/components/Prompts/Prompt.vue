<template>
  <div v-if="Prompt === title" class="prompt" :style="`--prompt-width: ${width}px;`">
    <div class="prompt-title">{{ title }}</div>
    <div class="prompt-content">
      <slot name="content"></slot>
    </div>
    <div class="prompt-footer">
      <div class="prompt-controls">
        <button type="button" @click="$store.dispatch('ShowPrompt', false)">Cancel</button>
        <slot name="controls"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class Prompt extends Vue {

  @Prop() title!: String
  @Prop() width!: Number

  get Prompt(): any {

    return this.$store.state.App.Prompt

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
    box-shadow: inset 1px 0 0 0 var(--prompt-border-color-inside),
                inset -1px 0 0 0 var(--prompt-border-color-inside),
                inset 0 1px 0 0 var(--prompt-border-color-inside);
    background: var(--prompt-title-background-gradient);
    font-size: var(--system-toolbar-title-font-size);
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
    color: var(--system-toolbar-title-color);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 8px 16px;
    display: flex;
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