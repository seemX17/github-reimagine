<template>
  <div>
    <router-link to="/">Back</router-link>
    <ul>
      <li class="list-unstyled my-3" v-for="repo in repoData" v-bind:key="repo.id">
        <router-link to="/repo" class="deco-none" v-if="repo.type == 'dir'">
          <div class="d-flex">
            <img class="repo-img mt-1" src="../assets/ic-folder.svg" />
            <div class="text-left ml-4">
              <h4 class="text-capitalize my-1">{{repo.name }}</h4>
            </div>
          </div>
        </router-link>
        <router-link to="/content" class="deco-none" v-else>
          <div class="d-flex">
            <img class="repo-img mt-1" src="../assets/ic_file.svg" />
            <div class="text-left ml-4">
              <h4 class="text-capitalize my-1">{{repo.name }}</h4>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
import Services from "@/shared/services/service";

export default {
  name: "repo",
  data() {
    return {
      repoData: [],
      query: this.$route.params.name
    };
  },
  mounted() {
    debugger;
    const service = new Services();
    service.GetRepoContent(this.query).then(response => {
      this.repoData = response.data;
    });
  }
};
</script>