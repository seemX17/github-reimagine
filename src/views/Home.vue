<template>
  <div class="row m-0">
    <div class="col">
      <h3 class="text-uppercase text-left">Users</h3>
      <ul class="user-list-container pl-0">
        <li class="list-unstyled m-2" v-for="user in usersData" v-bind:key="user.id">
          <userComponent v-bind:user="user" />
        </li>
      </ul>
    </div>
    <div class="col">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
import userComponent from "@/components/UserCard.vue";
import Services from "@/shared/services/service";

export default {
  name: "home",
  components: {
    userComponent
  },
  data() {
    return {
      usersData: ""
    };
  },
  mounted() {
    const service = new Services();
    service.GetUserData().then(response => {
      this.usersData = response.data;
      console.log(response);
    });
  },
  methods: {}
};
</script>
