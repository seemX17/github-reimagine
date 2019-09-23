<template>
  <div>
    <div class="d-flex px-4 py-2 align-items-center">
      <img src="../assets/ic_back.svg" height="18" />
      <router-link class="align-self-start pointer text-dark ml-2 backbtn-text" to="/repo">Back</router-link>
      
    </div>
    <div class="px-5  mx-auto w-75">
      <div class="pointer text-right mb-3" v-on:click="downloadFile">
        <img class="download-image align-baseline mr-2" src="../assets/ic_download.svg" alt />
        <span class="text-uppercase">Download</span>
      </div>
      <div class="text-left border content p-5">{{contentData}}</div>
    </div>
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
      fileData: ""
    };
  },
  mounted() {
    const service = new Services();
    service.GetFileContent(this.query).then(response => {
      this.fileData = response.data;
      this.contentData = window.atob(response.data.content);
    });
  },
  methods: {
    downloadFile: function() {
      const url = window.URL.createObjectURL(
        new Blob([this.fileData.download_url])
      );
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", this.fileData.name); //or any other extension
      document.body.appendChild(link);
      link.click();
    }
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