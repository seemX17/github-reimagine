import axios from 'axios';

export default class Services {
    GetUserData(){
      return axios.get("https://api.github.com/users?since=135");
    };

    GetRepoData(url){
      return axios.get(url);
    };
}