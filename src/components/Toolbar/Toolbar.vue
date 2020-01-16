<template>
    <div class="app-toolbar control-module">
      <button>
        <IconGrab/>
      </button>
      <button aria-selected="true">
        <IconCursor/>
      </button>
      <button>
        <IconBrush/>
      </button>
      <button>
        <IconEraser/>
      </button>
      <button>
        <IconShapes/>
      </button>
      <button>
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
    /** Nothing here **/
}

</script>
