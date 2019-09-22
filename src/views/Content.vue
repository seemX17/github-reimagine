<template>
<div>
    <router-link to="/repo">Back</router-link>
 <div class="text-left p-5 border m-5">
    {{content}}
  </div>
</div>
 
</template>


<script>
import Services from "@/shared/services/service";

export default {
  name: "contentComponent",
  data() {
    return {
     content:""
    };
  },
  mounted() {
    const service = new Services();
    service.GetFileContent().then(response => {
      this.content = response.data.content;
    });
  }
};
</script>