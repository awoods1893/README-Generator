// require Axios for API calls to github for username, avatar and email
const axios = require("axios");

//api call to github for my username
const apiquery = {
    async getGitHubUser(username) {
        const queryUrl = `https://api.github.com/users/${username}`; 
        
        // pulling email address from github - got the .email object from running a postman query
        await axios
        .get(queryUrl)
        .then(function(res){
            return gitHubEmailAddress = res.data.email;
        });
        
        // pulling profile picture from github api - same postman query to find the .avatar_url for the profile picture
        await axios
        .get(queryUrl)
        .then(function(res){
            return gitHubProfilePic = res.data.avatar_url
        });
    }
};
module.exports = apiquery;

       
