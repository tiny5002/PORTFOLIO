<template>
  <v-app id="home">
    <NavBar />
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue';

export default {
  name: 'AppHome',
  components: { 
    NavBar,
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}


body {
  min-height: 100vh;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  top: 2rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 3rem;
}

nav li {
  position: relative;
}

nav a {
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 5px 0;
  transition: color 0.3s ease;
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: white;
  bottom: 0;
  left: 50%;
  transition: all 0.3s ease;
}

nav a:hover::after {
  width: 100%;
  left: 0;
}

nav a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
