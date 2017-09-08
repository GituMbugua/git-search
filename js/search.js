var apiKey = require('./../.env').apiKey;


function GithubSearch() {

}

GithubSearch.prototype.getRepos = function(account) {
  $.get('https://api.github.com/users/' + account + '?access_token=' + apiKey).then(function(response){
     console.log(response);
   }).fail(function(error){
     console.log(error.responseJSON.message);
   });
};

exports.searchModule = GithubSearch;
