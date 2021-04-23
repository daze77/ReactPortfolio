/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'




export default {
    getGitHub: function(){
        return axios.get("https://api.github.com/users/daze77/repos")
    },

    getGitHubUser: function(){
        return axios.get("https://api.github.com/users/daze77")
    }
};