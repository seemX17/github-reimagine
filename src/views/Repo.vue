<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Services from "@/shared/services/service";

export default {
  name: "repoComponent",
  data() {
    return {
      repoData: []
    };
  }, 
  mounted() {
    debugger;
    const service = new Services(); 
    service.GetRepoContent().then(response => {
     debugger;
    })
  }
};
</script>