<template>
  <div class="card-container d-flex">
    <div class="user-image ml-5" :style="{ backgroundImage: `url(${user.avatar_url})`}"></div>
    <div class="ml-4">
      <h3 class="text-light text-capitalize  my-4">{{user.login }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "userComponent",
  props: {
    user: Object
  }
};
</script>
