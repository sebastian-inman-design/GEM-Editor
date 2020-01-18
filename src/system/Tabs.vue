<template>
  <div class="system-tabs">
    <button class="system-tab">
      Untitled Map 01
    </button>
    <button class="system-tab" aria-selected="true">
      Untitled Map 02
    </button>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../store"

@Component
export default class SystemTabs extends Vue {



}

</script>

<style lang="scss" scoped>
.system-tabs {
  flex-direction: row;
  padding: 4px 0;
  display: flex;
  height: 48px;
  .system-tab {
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    border-top: 1px solid transparent;
    background-color: transparent;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    justify-content: center;
    display: inline-flex;
    padding-right: 16px;
    padding-left: 16px;
    color: #6f6f6f;
    height: 48px;
    margin: 0;
    &:first-of-type {
      border-top-left-radius: 4px;
      border-left: 0;
    }
    &[aria-selected="true"] {
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
      border-right-color: var(--editor-border-color);
      border-left-color: var(--editor-border-color);
      border-top-color: var(--editor-border-color);
      background-color: var(--system-frame-color);
      color: #FFFFFF;
    }
  }
}
</style>