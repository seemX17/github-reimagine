import axios from 'axios';

export default class Services {
    GetUserData(){
      return axios.get("https://api.github.com/users?since=135");
    };
}