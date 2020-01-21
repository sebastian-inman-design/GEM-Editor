<template>
  <div class="system-frame" :aria-busy="Prompt !== false">
    <div class="system-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

@Component
export default class SystemFrame extends Vue {

  get Prompt(): any { return this.$store.state.App.Prompt }

}

</script>

<style lang="scss" scoped>
.system-frame {
  background-color: var(--system-frame-color);
  padding-bottom: var(--system-frame-padding);
  position: relative;
  height: 100%;
  width: 100%;
}
.system-content {
  grid-template-areas: "actionbar actionbar actionbar"
                       "toolbar editor sidebar";
  grid-template-columns: var(--editor-toolbar-width) 1fr var(--editor-sidebar-width);
  grid-template-rows: var(--editor-toolbar-width) 1fr;
  display: grid;
  height: 100%;
  width: 100%;
}
</style>