import axios from 'axios';

export default class Services {
    GetUserData(){
      return axios.get("https://api.github.com/users?since=135");
    };

    GetReposData(url){
      return axios.get(url);
    };

    GetRepoContent(name){
      return axios.get(`https://api.github.com/repos/${name}/contents/`);
    }
    GetFileContent(url){
      return axios.get(url);
    }
    
}