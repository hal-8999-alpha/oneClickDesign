<template>
  <div class="home">
    <div class="home-content">
      <img alt="Vue logo" src="../assets/logo.png" class="logo main-logo" />
      <h1 style="text-shadow: 2px 2px #000">With One Click</h1>
      <button @click="signInWithYouTube">Sign In with YouTube</button>
      <h3 style="font-size: 2em">Create An AI for your YouTube Channel</h3>
    </div>
    <div
      v-if="showSuccessPopUp"
      class="pop-up pop-up--visible"
      @click="closePopUp"
    >
      <p>Success! You'll be notified when your access is ready!</p>
    </div>
    <div v-else class="pop-up"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSuccessPopUp: false,
    };
  },
  methods: {
    signInWithYouTube() {
      const clientId =
        "814361337327-7mv4tt1icdimtiboj2gv2440mj47ego9.apps.googleusercontent.com";
      const redirectUri = "https://app.oneclick.design";
      
      const responseType = "code";
      const scope = "https://www.googleapis.com/auth/youtube.readonly";
      const accessType = "offline";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(
        redirectUri
      )}&response_type=${responseType}&scope=${encodeURIComponent(
        scope
      )}&access_type=${accessType}`;

      window.location.href = authUrl;
    },
    closePopUp() {
      this.showSuccessPopUp = false;
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow: hidden;
  max-height: calc(100vh - 50px);
}

body {
  overflow: hidden;
}

.home-content {
  max-width: 400px;
  text-align: center;
  padding: 20px;
}

.logo {
  width: 350px;
  height: auto;
}

button {
  background-color: #ee4d6d;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.pop-up {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.pop-up--visible {
  opacity: 1;
  pointer-events: auto;
}

.pop-up p {
  background-color: white;
  color: #ee4d6d;
  padding: 20px;
  font-size: 18px;
  text-align: center;
  border-radius: 4px;
}
</style>