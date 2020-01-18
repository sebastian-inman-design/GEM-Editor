<template>
    <div class="app-toolbar control-module">
      <button @click="SetActiveTool('grab')">
        <IconGrab/>
      </button>
      <button aria-selected="true" @click="SetActiveTool('cursor')">
        <IconCursor/>
      </button>
      <button @click="SetActiveTool('brush')">
        <IconBrush/>
      </button>
      <button @click="SetActiveTool('eraser')">
        <IconEraser/>
      </button>
      <button @click="SetActiveTool('entities')">
        <IconShapes/>
      </button>
      <button @click="SetActiveTool('logic')">
        <IconBolt/>
      </button>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator"

import "./Toolbar.scss"

import IconGrab from "../Icons/Grab.vue"
import IconCursor from "../Icons/Cursor.vue"
import IconBrush from "../Icons/Brush.vue"
import IconEraser from "../Icons/Eraser.vue"
import IconShapes from "../Icons/Shapes.vue"
import IconBolt from "../Icons/Bolt.vue"

@Component({
    components: {
      IconGrab,
      IconCursor,
      IconBrush,
      IconEraser,
      IconShapes,
      IconBolt
    }
})

export default class Toolbar extends Vue {

    SetActiveTool(tool: String) {

      console.log(tool)

    }

}

</script>
