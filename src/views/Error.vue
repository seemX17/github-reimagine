<template>
  <div class="area">
    <div class="content">
      <h1 class="display-1 text-primary">Oh snap ! 404</h1>
      <h3 class="text-secondary">We are sorry the page isn't here</h3>
      <router-link class="btn btn-primary px-3 mt-5" to="/">Go Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorViewComponent"
};
</script>

<style>
.area {
  position: relative;
  display: block;
  height: 500px;
  width: 100%;
  margin: 10px;
}
.content {
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
}
</style>