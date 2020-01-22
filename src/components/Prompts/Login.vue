<template>
  <Prompt title="Login" :width="400">
    <template slot="content">
      <fieldset>
        <legend>Email &amp; Password</legend>
        <Field label="Email:" classes="full-width">
          <input type="email" v-model="model.Email" autocapitalize="off" spellcheck="false">
        </Field>
        <Field label="Password:" classes="full-width">
          <input type="password" v-model="model.Password">
        </Field>
      </fieldset>
      <div v-if="error" class="response-error">{{ error }}</div>
      <div v-if="success" class="response-success">{{ success }}</div>
    </template>
    <template slot="controls">
      <button type="button" @click="LoginWithEmail()">Login</button>
    </template>
  </Prompt>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from "vue-property-decorator"
  import firebase from "firebase"

  import store from "../../store"
  import User from "../../vuex/User"

  import Prompt from "./Prompt.vue"
  import Field from "../../elements/Inputs/Field.vue"

  @Component({
    components: {
      Prompt,
      Field
    }
  })

  export default class NewMap extends Vue {

    private model: User = new User()
    private error: any = false
    private success: any = false

    LoginWithEmail() {

      this.error = false

      firebase.auth().signInWithEmailAndPassword(this.model.Email, this.model.Password).then((response: any) => {

        this.$store.dispatch('UserLogin', {
          refreshToken: response.user.refreshToken,
          uid: response.user.uid,
          email: response.user.email,
          displayName: response.user.displayName,
          photoURL: response.user.photoURL,
          source: "email"
        })

        this.success = `Successfully signed in as ${this.model.Email}`

        setTimeout(() => {

          this.success = false
          this.model = new User()
          this.$store.dispatch('ShowPrompt', false)

        }, 2000)

      }).catch(err => {

        this.error = err.message

        setTimeout(() => {

          this.error = false

        }, 5000)

      })

    }

  }

</script>