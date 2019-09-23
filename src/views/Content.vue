<template>
  <div class="p-5 m-5 mx-auto w-75">
    <div class="d-flex p-4">
      <router-link class="align-self-start pointer" to="/repo">Back</router-link>
      <img class="align-self-end download-image ml-auto" src="../assets/ic_download.svg" alt />
    </div>
    <div class="text-left border content p-5">{{contentData}}</div>
  </div>
</template>


<script>
import Services from "@/shared/services/service";

export default {
  name: "contentComponent",
  data() {
    return {
      contentData: "",
      query: this.$route.params.data,
      downloadUrl: ""
    };
  },
  mounted() {
    const service = new Services();
    service.GetFileContent(this.query).then(response => {
      this.downloadUrl = response.data;
      this.contentData = window.atob(response.data.content);
    });
  }
};
</script>

<style lang="scss" scoped>
.content {
  font-size: 12px;
  white-space: pre-wrap;
}
.download-image {
  height: 20px;
}
</style>