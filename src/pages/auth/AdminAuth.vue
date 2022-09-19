<template>
  <div>
    <error-dialog :show="!!error" title="An error occurred" @close="handleError">
      <h3>{{ error }}</h3>
    </error-dialog>
    <error-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </error-dialog>

    <section id="loginSection">
      <base-card class="StartHeaderBgColor">
        <div class="start_header">
          <go-back></go-back>
          <h2>Admin Login</h2>
        </div>
      </base-card>
      <base-card>
        <form @submit.prevent="submitForm">
          <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model.trim="email" />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password" />
          </div>
          <p v-if="!formIsValid">INCORRECT E-MAIL ADDRESS OR PASSWORD!</p>
          <div id="loginButton">
            <base-button>Login</base-button>
          </div>
        </form>
      </base-card>
    </section>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton";
import BaseCard from "@/components/ui/BaseCard";
import ErrorDialog from "@/components/ui/ErrorDialog";
import BaseSpinner from "@/components/ui/BaseSpinner";
export default {
  name: "AdminAuth",
  components: {BaseSpinner, ErrorDialog, BaseCard, BaseButton },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      isLoading: false,
      error: null
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', actionPayload);
        this.$router.replace('/gallery');
      } catch (err) {
        this.error = err.message || 'Failed to authenticate, try again later.';
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
}
</script>

<style scoped>
#loginSection {
  max-width: 60rem;
  margin: auto;
}

.start_header {
  display: flex;
}

.StartHeaderBgColor {
  background-color: #8888aa;
  margin-bottom: -3rem;
  padding-bottom: 2rem;
}

.start_header h2 {
  margin: 0.5rem 0.5rem 0.5rem 1rem;
  color: #ffffff;
}

form {
  margin: 0 2rem;
}

#loginButton {
  max-width: 100%;
  text-align: right;
  padding: 0.5rem;
}

input {
  border: none;
  background-color: #eee;
  height: 2rem;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 1rem;
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