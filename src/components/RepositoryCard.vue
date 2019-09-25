<template>
  <div class="d-flex">
    <img class="repo-img mt-1" src="../assets/ic_folder.svg">
    <div class="text-left ml-4">
      <h4 class="text-capitalize my-1 repo-name"  v-on:click="toPage(repo.full_name)">{{repo.name }}</h4>
      <span class="card-description">{{repo.description}}</span>
    </div>
    <a class="ml-auto pointer text-primary" v-on:click="viewHistory(repo.full_name)">History</a>
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
     toPage: function(fullname) {
      this.$router.push({
        name: "repoViewComponent",
        params: { data: fullname }
      });
    },
    viewHistory(full_name){
       this.$router.push({ name: "historyViewComponent", params: { data:  full_name}})
    }
  }
};
</script>
