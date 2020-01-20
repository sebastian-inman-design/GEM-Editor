<template>
  <div class="system-toolbar">
    <div class="system-titlebar">
      <div class="system-title">
        <span>{{ ProjectTitle }}</span>
      </div>
    </div>
    <SystemTabs/>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../store"

import SystemTabs from "./Tabs.vue"

@Component({
  components: {
    SystemTabs
  }
})

export default class SystemToolbar extends Vue {

  get ProjectTitle(): Number {

    // Get the current layers.
    return this.$store.state.App.Project.Title

  }

}

</script>

<style lang="scss" scoped>
.system-toolbar {

  -webkit-app-region: drag;
  background-image: var(--system-toolbar-background-gradient);
  border-bottom: 1px solid var(--editor-border-color);
  
  .system-titlebar {

    padding-bottom: var(--system-toolbar-padding);
    padding-top: var(--system-toolbar-padding);
    flex-direction: row;
    align-items: center;
    display: flex;

    .system-title {

      font-size: var(--system-toolbar-title-font-size);
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
      color: var(--system-toolbar-title-color);
      text-align: center;
      flex: 1 0 auto;

    }

  }

}
</style>