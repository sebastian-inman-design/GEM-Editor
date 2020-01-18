<template>
  <div class="app-actionbar">
    <span class="actionbar-active-tool">{{ ActiveTool }}</span>
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
        return this.$store.state.Project.Settings.ActiveTool

    }

}

</script>

<style lang="scss" scoped>
.app-actionbar {
  grid-area: actionbar;
  flex-direction: row;
  display: flex;
  .actionbar-active-tool {
    line-height: var(--editor-toolbar-width);
    padding-left: 12px;
    color: #FFFFFF;
    font-size: 12px;
  }
}
</style>