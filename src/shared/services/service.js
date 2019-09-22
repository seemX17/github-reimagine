import axios from 'axios';

export default class Services {
    GetUserData(){
      return axios.get("https://api.github.com/users?since=135");
    };

    GetReposData(url){
      return axios.get(url);
    };

    GetRepoContent(){
      return axios.get("https://api.github.com/repos/cheapRoc/awesome-mixtapes/contents/");
    }
    
}