<template>
  <div class="row m-0">
    <div class="col">
      <h3 class="text-uppercase text-left">Users</h3>
      <ul class="list-container pl-0">
        <li
          class="list-unstyled m-2"
          v-for="user in usersList"
          v-bind:key="user.id"
          v-on:click="onClick(user)"
        >
          <userCardComponent v-bind:user="user" />
        </li>
      </ul>
    </div>
    <div class="col">
      <h3 class="text-uppercase text-left">Repositories</h3>
      <div>
        <ul class="list-container pl-0">
          <li class="list-unstyled my-3" v-for="repo in repoList" v-bind:key="repo.id" v-on:click="toPage(repo.full_name)">
              <repoCardComponent v-bind:repo="repo" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import userCardComponent from "@/components/UserCard.vue";
import repoCardComponent from "@/components/RepositoryCard.vue";
import RepositoryService from "@/shared/services/repositoryService";

export default {
  name: "homeViewComponent",
  components: {
    userCardComponent,
    repoCardComponent
  },
  data() {
    return {
      usersList: [],
      repoList: []
    };
  },
  mounted() {
    const service = new RepositoryService();
    service.getUsers().then(response => {
      this.usersList = response.data;
      this.$store.commit("loadFileDetails", this.usersList[0]);
      this.selectedUser = response.data[0];
      this.getRepoData();
    });
  },
  methods: {
    onClick: function(user) {
      this.selectedUser = user;
      this.getRepoData();
    },
    getRepoData: function() {
      const service = new RepositoryService();
      service.getRepositories(this.selectedUser.repos_url).then(response => {
        this.repoList = response.data;
      });
    },
    toPage:function(fullname){
      this.$router.push({ name: 'repoViewComponent', params: { data: fullname }})
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
