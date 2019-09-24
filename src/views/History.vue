<template>
  <div>
    <div class="d-flex px-4 py-2 align-items-center">
      <img src="../assets/ic_back.svg" height="18" />
      <a class="align-self-start pointer text-dark ml-2 backbtn-text" v-on:click="goBack()">Back</a>
    </div>
    <div class="px-5 mx-auto w-75">
      <div class="text-left border content p-4">
        <ul>
          <li
            class="list-unstyled my-3" v-for="commit in commitList" v-bind:key="commit.id" >
            <commitCardComponent v-bind:commit="commit" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryService from "@/shared/services/repositoryService";
import commitCardComponent from "@/components/CommitCard.vue";

export default {
  name: "historyViewComponent",
  components: {
    commitCardComponent
  },
  data() {
    return {
      commitList: []
    };
  },
  mounted() {
    const service = new RepositoryService();
    service.getCommits().then(response => {
      this.commitList = response.data;
    });
  },
};
</script>
