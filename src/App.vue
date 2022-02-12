<template>
  <div id="app">
    <b-container>
      <b-navbar class="mt-3 mb-3" toggleable="lg" type="dark" variant="dark">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              :active="$route.path === '/tableApi'"
              class="mx-2 text-white"
              to="/tableApi?param=api"
              >PAGE SEARCH</b-nav-item
            >
            <b-nav-item
              :active="$route.path === '/formInput'"
              class="mx-2 text-white"
              to="/formInput?param=form"
              >PAGE FORM</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
