<template>
  <div class="sidebar-panel-tabs">
    <nav class="panel-tabs-nav">
      <button v-for="tab of tabs" class="panel-tab" :key="tab" :aria-selected="ActiveTab === `${tab}` ? true : false" @click="SetActiveTab(tab)">
        {{ tab }}
      </button>
    </nav>
    <div class="panel-tabs-content">
      <div v-for="tab of tabs" class="panel-tab-content" :key="tab" :aria-hidden="ActiveTab === `${tab}` ? false : true">
        <slot :name="tab"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"
import store from "../../store"

@Component
export default class SidebarTabs extends Vue {

  @Prop() tabs!: any
  @Prop() startingTab !: String
  
  private ActiveTab: any = this.startingTab || this.tabs[0]

  SetActiveTab(tab: any) {

    this.ActiveTab = tab

  }

}

</script>

<style lang="scss" scoped>
.sidebar-panel-tabs {
  border-bottom: 1px solid var(--editor-border-color);
  flex-direction: column;
  display: flex;
  .panel-tabs-nav {
    background: var(--sidebar-tab-background-gradient);
    margin-bottom: -1px;
    padding-left: 23px;
    flex-direction: row;
    flex-wrap: nowrap;
    display: flex;
    height: 24px;
    .panel-tab {
      border-bottom: 1px solid transparent;
      border-right: 1px solid transparent;
      border-left: 1px solid transparent;
      color: var(--inactive-text-color);
      background-color: transparent;
      padding-right: 10px;
      padding-left: 10px;
      position: relative;
      line-height: 19px;
      font-size: 10px;
      border: 0;
      &:not([aria-selected="true"]):hover {
        color: #D6D6D6;
        cursor: pointer;
      }
      &[aria-selected="true"] {
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.75);
        border-right: 1px solid var(--editor-border-color);
        border-left: 1px solid var(--editor-border-color);
        color: var(--system-toolbar-title-color);
        border-bottom-color: #383838;
        background-color: #383838;
      }
    }
  }
  .panel-tabs-content {
    border-top: 1px solid var(--editor-border-color);
    flex: 1 0 auto;
    .panel-tab-content {
      background-color: #383838;
    }
  }
}
</style>