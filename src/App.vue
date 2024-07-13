<template>
  <div id="app">
    <nav>
      <router-link to="/">Sign Up</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blog">Blog</router-link>
    </nav>
    <router-view />
    <footer>
      <div class="left-side"><p>OneClickDesign &copy; 2023</p></div>
      <div class="right-side">
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/tos">Terms of Service</router-link>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  mounted() {
    document.title = "OneClick Designs";

    // const favicon = document.querySelector('link[rel="icon"]');
    // favicon.href = "src/assets/favicon.png";
  },
};
</script>
<style>
#app {
  font-family: Proxima Nova, Quicksand, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/background.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 2px black;
}

nav a.router-link-exact-active {
  color: white;
  text-shadow: 1px 1px 2px black;
}

footer {
  background-color: #ee4d6d;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-top: auto;
}

.right-side {
  display: flex;
}

.right-side a {
  margin-left: 50px;
  padding-right: 10px;
  color: white
}

 div.left-side{
    padding-left: 50px;
  }

@media screen and (max-width: 768px) {
  nav {
    padding: 10px;
  }

  nav a {
    font-size: 16px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
  }

  footer div {
    margin-left: 20px;
  }

  footer div:first-child {
    margin-left: 0;
    margin-right: auto;
  }

 
}
</style>