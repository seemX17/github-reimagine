<template>
  <div>    
    <div class="text-left ml-4">
      <h6 class="text-capitalize my-1 repo-name">{{commitValues.commit.message }}</h6>
      <span class="card-description">{{commitValues.commit.committer.name}}</span>
    </div>
  </div>
</template>

<script>
import RepositoryService from "@/shared/services/repositoryService";

export default {
  name: "commitCardComponent",
  props: {
    commitValues: Object,
  }
};

</script>
