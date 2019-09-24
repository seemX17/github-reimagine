<template>
  <div class="d-flex">
    <img class="repo-img mt-1" src="../assets/ic_folder.svg">
    <div class="text-left ml-4">
      <h4 class="text-capitalize my-1 repo-name">{{repo.name }}</h4>
      <span class="card-description">{{repo.description}}</span>
    </div>
    <button v-on:click="viewHistory(repo.full_name)">View History</button>
  </div>
  
</template>

<script>
export default {
  name: "repoCardComponent",
  props: {
    repo: Object,
  }, 
  mounted() {
  },
  methods:{
    viewHistory(full_name){
       this.$router.push({ name: "historyViewComponent", params: { data:  full_name}})
    }
  }
};
</script>
