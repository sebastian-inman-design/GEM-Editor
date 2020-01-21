<template>
  <Prompt title="Login" :width="470">
    <fieldset>
      <legend>Basic Info</legend>
      <div class="field">
        <label class="full-width" data-text="Email:">
          <input type="email" v-model="model.Email" autocapitalize="off" spellcheck="false">
        </label>
      </div>
      <div class="field">
        <label class="full-width" data-text="Password:">
          <input type="password" v-model="model.Password">
        </label>
      </div>
    </fieldset>
  </Prompt>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"

  import store from "../../store"
  import User from "../../vuex/User"
  import Prompt from "./Prompt.vue"

  @Component({
    components: {
      Prompt
    }
  })

  export default class NewMap extends Vue {

    private model: User

    constructor() {

      super()

      this.model = new User()
      this.$root.$on('Callback', this.Callback)

    }

    Callback(event: any) {

      this.LoginUser()

    }

    LoginUser() {

      console.log(this.model)

    }

  }

</script>