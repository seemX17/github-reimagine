<template>
  <div>
   <div class="d-flex px-4 py-2 align-items-center">
     <img src="../assets/ic_back.svg" height="18" />
     <a class="align-self-start pointer text-dark ml-2 backbtn-text"  v-on:click="goBack()">Back</a>      
    </div>
    <ul class="list-container">
      <li class="list-unstyled my-3" v-for="repo in repoList" v-bind:key="repo.id">
        <a class="deco-none"  v-on:click="toPage('repoViewComponent',repo.url)" v-if="repo.type == 'dir'" >
          <div class="d-flex pointer">
            <img class="repo-img mt-1" src="../assets/ic_folder.svg" />
            <div class="text-left ml-4">
              <h4 class="text-capitalize my-1">{{repo.name }}</h4>
            </div>
          </div>
        </a>
        <a  v-on:click="toPage('contentViewComponent',repo.url)"  class="deco-none" v-else>
          <div class="d-flex pointer">
            <img class="repo-img mt-1" src="../assets/ic_file.svg" />
            <div class="text-left ml-4">
              <h4 class="text-capitalize my-1">{{repo.name }}</h4>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>


<script>
import RepositoryService from "@/shared/services/repositoryService";
import Utilities from "@/shared/utilities/utils";

export default {
  name: "repoViewComponent",
  data() {
    return {
      repoList: [],
      routeData: this.$route.params.data
    };
  },
  mounted() {
    const service = new RepositoryService();
    const utilities = new Utilities();
    if (this.$route.params.data.includes("api.github.com")) {
      service.getFileContent(this.routeData).then(response => {
         this.repoList = utilities.sortType(response.data);
      });
    } else {
      service.getRepositoryFiles(this.routeData).then(response => {
        this.repoList = utilities.sortType(response.data);
      });
    }
  },
  methods:{
    goBack: function(){
      this.$router.go(-1);
    },
    toPage:function(componentName,url){
      this.$router.push({ name: componentName, params: { data:  url}})
    }
  }
};
</script>