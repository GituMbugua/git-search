var apiKey = require('./../.env').apiKey;


function GithubSearch() {

}

GithubSearch.prototype.getRepos = function(userName, displayName, displayRepo, description) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
     displayName(response.name);
   }).fail(function(error){
     console.log(error.responseJSON.message);
   });
// user name
   $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
     for (var index = 0; index <= response.length; index++ ) {
       displayRepo(response[index].name);
       description(response[index].description);
     }
   });
};


exports.searchModule = GithubSearch;
