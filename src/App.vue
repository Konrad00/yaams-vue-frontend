<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/yaams-temp-logo.png" alt="YAAMS Logo" height="40"> <!-- TODO: Replace with actual logo -->
      </router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownFlights" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi-journal-album"></i> Flights
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownFlights">
                <li><router-link class="dropdown-item" to="/flightlist">My PIREPs</router-link></li>
                <li><router-link class="dropdown-item" to="/flightadd">File a PIREP</router-link></li>
                <li><router-link class="dropdown-item" to="/flightreviewindex">Review flights</router-link></li> <!-- TODO: check permission '' here -->
              </ul>
          </li>
          <li class="nav-item">
                <router-link class="nav-link" to="/fleetmanager"><i class="bi bi-airplane-fill"></i> Fleet</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/livemap"><i class="bi bi-globe-americas"></i> Live Map</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>


  <RouterView class="container mt-4 flex-fill" />    

  <!-- Footer -->
  <footer class="bg-dark text-white mt-auto py-3">
      <div class="container text-center">
          <small>YAAMS Version v0.0.1 | <a href="https://www.github.com/flymia/YAAMS/" class="text-decoration-none text-white">GitHub</a></small>
      </div>
  </footer>
</template>

<style scoped lang="scss">
</style>
