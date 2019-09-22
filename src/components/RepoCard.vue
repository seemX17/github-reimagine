<template>
  <div class="d-flex">
    <img class="repo-img mt-1" src="../assets/ic-folder.svg">
    <div class="text-left ml-4">
      <h4 class="text-capitalize my-1">{{repo.name }}</h4>
      <span>{{repo.description}}</span>
    </div>
  </div>
</template>

<script>
import Services from "@/shared/services/service";
export default {
  name: "repoComponent",
  props: {
    repo: Object
  }, 
  mounted() {
    // let userData = this.$store.state.selectedUser;
    // const service = new Services();
    // service.GetRepoData(userData.repos_url).then(response => {
    //   this.repo = response.data;
    //   debugger;
    //   console.log(response);
    // });
  }
};
</script>
