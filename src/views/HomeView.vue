<template>
  <div class="home">
    <div style="height: 100px"></div>
    <div
      class="home"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      "
    >
      <img alt="Vue logo" src="../assets/date-gpt.png" style="width: 100%" />
    </div>
    <div>
      <h1>Dating Powered By ChatGPT</h1>
      <form>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder=" Enter Your Email"
          style="
            width: 50%;
            height: 30px;
            padding: 5px;
            text-align: left;
            border-radius: 5px;
          "
          ref="emailInput"
          autofocus
        />
        <button
          @click.prevent="submitForm"
          style="
            height: 45px;
            width: auto;
            margin-left: 10px;
            border-radius: 5px;
            border-color: white;
            background-color: transparent;
            color: white;
            font-weight: bold;
          "
        >
          Request Access
        </button>
      </form>
      <h3>Find Your Perfect Match</h3>
    </div>
    <div v-if="showSuccessPopUp" class="pop-up pop-up--visible">
      <p style="font-size: 32px; font-weight: bold; color: white">
        Success! You'll be notified when we're ready!
      </p>
    </div>
    <div v-if="showWarningPopUp" class="pop-up pop-up--visible">
      <p style="font-size: 32px; font-weight: bold; color: white">
        Please enter a valid email address
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      showSuccessPopUp: false,
      showWarningPopUp: false,
    };
  },
  methods: {
    async submitForm() {
      if (!this.email || !this.email.includes("@")) {
        this.showWarningPopUp = true;
        return;
      }
      this.showWarningPopUp = false;

      try {
        const baseId = "appT10urxddoqMb1B";
        const tableIdOrName = "DateGPT";
        const url = `https://api.airtable.com/v0/${baseId}/${tableIdOrName}`;
        const headers = {
          Authorization:
            "Bearer patjNGU5k25EgovKk.af1ce909b8364b9ff0e45b2e3cef84e6fc7e0d88e3f59e783a9c4bb964f4b8df",
          "Content-Type": "application/json",
        };
        const data = {
          fields: {
            Email: this.email,
          },
        };
        const response = await axios.post(url, data, { headers });
        console.log("Email saved to Airtable");
        console.log(response.data);
        this.showSuccessPopUp = true;
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    successPopUpClass() {
      return {
        "pop-up": true,
        "pop-up--visible": this.showSuccessPopUp,
      };
    },
  },
  mounted() {
  this.$refs.emailInput.focus();
}

};
</script>
<style scoped>
h1 h3 {
  text-shadow: 1px 1px 2px black;
}
</style>

