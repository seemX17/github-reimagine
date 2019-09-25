<template>
  <div class="card-container d-flex">
    <div class="user-image" :style="{ backgroundImage: `url(${user.avatar_url})`}"></div>
    <div class="ml-4">
      <h3 class="text-light text-capitalize my-4">{{user.login}}</h3>
    </div>
    <img class="selected-image mr-4" src="../assets/ic_arrow.svg" v-if="user.id == selectedUser.id" />
  </div>
</template>

<script>
export default {
  name: "userCardComponent",
  props: {
    user: Object,
  },
  data() {
    return {
      selectedUser: this.$store.state.selectedUser
    };
  },
  created() {
    this.$store.watch(
      state => {
        return this.$store.state.selectedUser;
      },
      (newUser, oldUser) => {
        this.selectedUser = newUser;
      }
    );
  }
};
</script>
