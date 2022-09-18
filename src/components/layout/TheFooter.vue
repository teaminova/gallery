<template>
  <section>
    <div id="admin-button">
      <button @click="showAdminLogin">Admin settings</button>
    </div>
  </section>

  <base-dialog v-if="adminLoginIsVisible" title="Admin Login">
    <template #default>
      <div class="form-control" :class="{invalid: !email.isValid}">
        <label for="email">E-mail: </label>
        <input
            type="email"
            id="email"
            v-model.trim="email.val"
            @blur="clearValidity('email')"
            autocomplete="off"/>
<!--        <p v-if="!email.isValid">The e-mail address is incorrect.</p>-->
      </div>
      <div class="form-control" :class="{invalid: !password.isValid}">
        <label for="password">Password: </label>
        <input
            type="password"
            id="password"
            v-model.trim="password.val"
            @blur="clearValidity('password')"
            autocomplete="off"/>
        <!--        <p v-if="!password.isValid">The password is incorrect.</p>-->
      </div>

      <p class="main_paragraph" v-if="!formIsValid">INCORRECT E-MAIL ADDRESS OR PASSWORD.</p>
    </template>
    <template #actions>
      <base-button @click="signIn">Sign In</base-button>
      <base-button mode="outline" @click="showAdminLogin">Cancel</base-button>
    </template>
  </base-dialog>
</template>

<script>
import BaseDialog from "@/components/ui/BaseDialog";
import BaseButton from "@/components/ui/BaseButton";

export default {
  name: "TheFooter",
  components: { BaseDialog, BaseButton },
  data() {
    return {
      adminLoginIsVisible: false,
      email: {
        val: '',
        isValid: true
      },
      password: {
        val: '',
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    showAdminLogin() {
      this.adminLoginIsVisible = !this.adminLoginIsVisible;
      this.email.isValid = true;
      this.password.isValid = true;
      this.formIsValid = true;
    },
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;

      // CHECK IF E-MAIL AND PASSWORD ARE CORRECT

      if (this.email.val === '') {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === '') {
        this.password.isValid = false;
        this.formIsValid = false;
      }
    },
    signIn() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      // ...

      this.$router.replace('/gallery');
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
section {
  width: 100%;
  height: 5rem;
  background-color: #0b032d;
  display: flex;
  justify-content: right;
  align-items: center;
}

#admin-button button {
  text-decoration: none;
  /* color: #f391e3; */
  color: #f67e7d;
  background-color: transparent;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  margin: 0.5rem;
}

#admin-button button:hover,
#admin-button button:active {
  border: 1px solid #f67e7d;
}

input {
  border: none;
  background-color: #eee;
  height: 2rem;
  border-radius: 5px;
  padding: 0.5rem;

  display: block;
  width: 100%;
  font: inherit;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.75rem;
}

.invalid label {
  color: #aa3653
}

p {
  color: #aa3653;
  text-align: center;
}

p.main_paragraph {
  font-weight: bold;
}

.invalid input,
.invalid textarea {
  border: 1px solid #aa3653;
}
</style>