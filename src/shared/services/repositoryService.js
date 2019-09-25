import axios from 'axios';

export default class RepositoryService {
  
    getUsers(){
      return axios.get("https://api.github.com/users?since=135");
    }

    getRepositories(url){
      return axios.get(url);
    }

    getRepositoryFiles(name){
      return axios.get(`https://api.github.com/repos/${name}/contents/`);
    }

    getFileContent(url){
      return axios.get(url);
    }

    getCommits(name){
      return axios.get(`https://api.github.com/repos/${name}/commits`);
    }
    
}