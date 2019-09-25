<template>
  <div>
    <div class="d-flex px-4 py-2 align-items-center">
      <img src="../assets/ic_back.svg" height="18" />
      <a class="align-self-start pointer text-dark ml-2 backbtn-text" v-on:click="goBack()">Back</a>
    </div>
    <div class="px-5 mx-auto w-75">
      <h2 class="text-left">Commits</h2>
      <div class="text-left border content py-4 px-2">        
        <ul class="m-0 p-0">
          <li class="list-unstyled my-3" v-for="commit in commitList" v-bind:key="commit.id" >
            <commitCardComponent v-bind:commitValues="commit" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryService from "@/shared/services/repositoryService";
import commitCardComponent from "@/components/CommitCard.vue";
import Utilities from "@/shared/utilities/utils";

export default {
  name: "historyViewComponent",
  components: {
    commitCardComponent
  },
  data() {
    return {
      commitList: [],
      routeData: this.$route.params.data
    };
  },
  mounted() {
    const service = new RepositoryService();
    debugger;
    service.getCommits(this.routeData).then(response => {
      const utilities = new Utilities();
      debugger;
      this.commitList = utilities.sortByDate(response.data);
    });
  },
  methods:{
    goBack: function(){
      this.$router.go(-1);
    }
  }
};
</script>
