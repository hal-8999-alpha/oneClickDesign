<template>
  <nav>
    <router-link to="/">Sign Up</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/blog">Blog</router-link>
  </nav>
  <router-view/>
  <footer style="background-color: #ee4d6d; height: 50px; display: flex; align-items: center; justify-content: center; padding: 0;">
    <p style="color: white;">DateGPT &copy; 2023</p>
  </footer>
</template>

<style>
#app {
  font-family: Proxima Nova, Quicksand, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("assets/wine.jpeg");
background-size: cover;
background-position: center;
height: 100vh;
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
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin: 0;
  padding-left: 0;
}

</style>
