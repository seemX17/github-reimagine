<template>
  <div>
    <div class="d-flex px-4 py-2 align-items-center">
      <img src="../assets/ic_back.svg" height="18" />
      <a class="align-self-start pointer text-dark ml-2 backbtn-text"  v-on:click="goBack()">Back</a>      
    </div>
    <div class="px-5  mx-auto w-75">
      <div class="pointer text-right mb-3" v-on:click="downloadFile">
        <img class="download-image align-baseline mr-2" src="../assets/ic_download.svg" alt />
        <span class="text-uppercase">Download</span>
      </div>
      <div class="text-left border content p-4">
        <code>{{fileContents}}</code>
      </div>
    </div>
  </div>
</template>


<script>
import RepositoryService from "@/shared/services/repositoryService";

export default {
  name: "contentViewComponent",
  data() {
    return {
      fileContents: "",
      routeData: this.$route.params.data,
      fileConfig: ""
    };
  },
  mounted() {
    const service = new RepositoryService();
    service.getFileContent(this.routeData).then(response => {
      this.fileConfig = response.data;
      this.fileContents = window.atob(response.data.content);
    });
  },
  methods: {
    downloadFile: function() {
      const url = window.URL.createObjectURL(
        new Blob([this.fileContents])
      );
      const anchorElement = document.createElement("a");
      anchorElement.href = url;
      anchorElement.setAttribute("download", this.fileConfig.name);
      document.body.appendChild(anchorElement);
      anchorElement.click();
    },
    goBack: function(){
      this.$router.go(-1);
    }
  }
};
</script>
