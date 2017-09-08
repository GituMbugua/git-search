var GithubSearch = require('./../js/search.js').searchModule;
var displayName = function(name) {
    if (name === null) {
      $('#showAccount').append("This account does not have a username.");
    } else {
    $('#showAccount').append("<p>Username:" + name + "</p>");
  }
};

$(document).ready(function() {
  var currentGithubSearch = new GithubSearch();

  $('#form').submit(function(event) {
    event.preventDefault();

    $('#showAccount').val("");
    var account = $('#userInput').val();

    currentGithubSearch.getRepos(account, displayName);

    console.log(account);
    //display

    $('userInput').val("");
    });
  });
