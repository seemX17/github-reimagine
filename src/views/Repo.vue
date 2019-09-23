<template>
  <div>
    <router-link to="/" class="pointer">Back</router-link>
    <ul>
      <li class="list-unstyled my-3" v-for="repo in repoData" v-bind:key="repo.id">
        <router-link
          :to="{ name: 'repo', params: { name: repo.url }}"
          class="deco-none"
          v-if="repo.type == 'dir'"
        >
          <div class="d-flex pointer">
            <img class="repo-img mt-1" src="../assets/ic-folder.svg" />
            <div class="text-left ml-4">
              <h4 class="text-capitalize my-1">{{repo.name }}</h4>
            </div>
          </div>
        </router-link>
        <router-link :to="{ name: 'contentComponent', params: { data: repo.url }}" class="deco-none" v-else>
          <div class="d-flex pointer">
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
import Utilities from "@/shared/utilities/utils";

export default {
  name: "repo",
  data() {
    return {
      repoData: [],
      query: this.$route.params.name
    };
  },
  mounted() {
    const service = new Services();
    const utilities = new Utilities();
    if (this.$route.params.name.includes("api.github.com")) {
      service.GetFileContent(this.query).then(response => {
         this.repoData = utilities.sortType(response.data);
      });
    } else {
      service.GetRepoContent(this.query).then(response => {
        this.repoData = utilities.sortType(response.data);
      });
    }
  }
};
</script>