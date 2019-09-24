<template>
  <div class="d-flex">
    <img class="repo-img mt-1" src="../assets/ic_folder.svg">
    <div class="text-left ml-4">
      <h4 class="text-capitalize my-1">{{repo.name }}</h4>
      <span class="card-description">{{repo.description}}</span>
    </div>
  </div>
</template>

<script>
import RepositoryService from "@/shared/services/repositoryService";
export default {
  name: "repoCardComponent",
  props: {
    repo: Object,
  }, 
  mounted() {
  }
};
</script>
