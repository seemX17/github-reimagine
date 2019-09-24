<template>
  <div class="area-container">
    <div class="content-container">
      <h1 class="display-1 text-primary">Oh snap ! 404</h1>
      <h3 class="text-secondary">We are sorry the page isn't here</h3>
      <router-link class="btn btn-primary px-3 mt-5 btn-lg" to="/">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorViewComponent"
};
</script>
