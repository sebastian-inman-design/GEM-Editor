<template>
  <div class="app-actionbar">
    <span class="actionbar-active-tool">{{ ActiveTool }}</span>
    <button class="actionbar-button">
      <font-awesome-icon icon="border-all" />
    </button>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import store from "../../store"

@Component({
  components: {}
})

export default class Actionbar extends Vue {

    get ActiveTool(): Number {

        // Get the current layers.
        return this.$store.state.App.Settings.ActiveTool

    }

}

</script>

<style lang="scss" scoped>
.app-actionbar {
  grid-area: actionbar;
  flex-direction: row;
  align-items: center;
  display: flex;
  .actionbar-active-tool {
    line-height: var(--editor-toolbar-width);
    padding-left: 12px;
    color: #FFFFFF;
    font-size: 12px;
  }
  .actionbar-button {
    box-shadow: inset 0 1px 0 0 #474747;
    background-color: #3c3c3c;
    justify-content: center;
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    height: 26px;
    border: 0;
    svg {
      max-height: var(--editor-toolbar-icon-size);
      max-width: var(--editor-toolbar-icon-size);
      height: var(--editor-toolbar-icon-size);
      width: var(--editor-toolbar-icon-size);
    }
  }
}
</style>