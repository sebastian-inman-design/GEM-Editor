<template>
  <div class="app-actionbar">
    <div class="actionbar-left">
      <button class="actionbar-button">
        <font-awesome-icon icon="border-all" />
      </button>
    </div>
    <div class="actionbar-right">
      <button v-if="$store.state.App.User" type="button">
        {{ $store.state.App.User.email }}
      </button>
      <button v-else type="button" @click="$store.dispatch('ShowPrompt', 'Login')">
        Login
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import firebase from "firebase"

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
  padding-left: var(--editor-toolbar-width);
  grid-area: actionbar;
  flex-direction: row;
  align-items: center;
  display: flex;
  .actionbar-left {
    display: inline-flex;
    padding: 0 8px 0 0;
    flex: 1 0 auto;
  }
  .actionbar-right {
    flex: 0 1 var(--editor-sidebar-width);
    width: var(--editor-sidebar-width);
    justify-content: flex-end;
    display: inline-flex;
    padding: 0 8px;
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