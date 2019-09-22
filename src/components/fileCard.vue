<template>
  <div class="d-flex">
    <img class="repo-img mt-1" src="../assets/ic-file.svg">
    <div class="text-left ml-4">
      <h4 class="text-capitalize my-1" to="/content">{{file.name}}</h4>
    </div>
  </div>
</template>

<script>
import Services from "@/shared/services/service";
export default {
  name: "repoComponent",
  props: {
    file: Object
  }, 
  mounted() {
  }
};
</script>
