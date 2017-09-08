var apiKey = "90463ddf1da3789c8fecdbda8779c699d284624c";


function GithubSearch() {

}

GithubSearch.prototype.getRepos = function() {
  $.get('https://api.github.com/users/GituMbugua?access_token=' + apiKey).then(function(response){
     console.log(response);
   }).fail(function(error){
     console.log(error.responseJSON.message);
   });
};

exports.searchModule = GithubSearch;


// function GithubSearch() {
//
// }

//
