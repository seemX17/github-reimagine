<template>
  <div class="row m-0">
    <div class="col">
      <h3 class="text-uppercase text-left">Users</h3>
      <ul class="list-container pl-0">
        <li
          class="list-unstyled m-2"
          v-for="user in usersData"
          v-bind:key="user.id"
          v-on:click="onClick(user)"
        >
          <userComponent v-bind:user="user" />
        </li>
      </ul>
    </div>
    <div class="col">
      <h3 class="text-uppercase text-left">{{selectedUser.login}}</h3>
      <div>
        <ul class="list-container pl-0">
          <li class="list-unstyled my-3" v-for="repo in reposData" v-bind:key="repo.id">
            <router-link to="/repo" class="deco-none">
              <repoComponent v-bind:repo="repo" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import userComponent from "@/components/UserCard.vue";
import repoComponent from "@/components/RepoCard.vue";
import Services from "@/shared/services/service";

export default {
  name: "home",
  components: {
    userComponent,
    repoComponent
  },
  data() {
    return {
      usersData: [],
      reposData: []
    };
  },
  mounted() {
    const service = new Services();
    service.GetUserData().then(response => {
      this.usersData = response.data;
      this.$store.commit("loadFileDetails", this.usersData[0]);
      this.selectedUser = this.usersData[0];
      this.getRepoData();
      console.log(response);
    });
  },
  methods: {
    onClick: function(user) {
      this.selectedUser = user;
      this.getRepoData();
    },
    getRepoData: function() {
      const service = new Services();
      service.GetReposData(this.selectedUser.repos_url).then(response => {
        this.reposData = response.data;
        console.log(response);
      });
    }
  },
  computed: {
    selectedUser: {
      get() {
        return this.$store.state.selectedUser;
      },
      set(value) {
        this.$store.commit("loadFileDetails", value);
      }
    }
  }
};
</script>
