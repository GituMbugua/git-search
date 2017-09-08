var GithubSearch = require('./../js/search.js').searchModule;
var displayName = function(name) {
    if (name === null) {
      $('#showAccount').append("This account does not have a username.");
    } else {
    $('#showAccount').append("<p>Username:" + name + "</p>");
  }
};
var displayRepo = function(repo) {
  $('#showAccount').append(repo);
};
var description = function(descr) {
  $('#showAccount').append(descr);
};

$(document).ready(function() {
  var currentGithubSearch = new GithubSearch();

  $('#form').submit(function(event) {
    event.preventDefault();

    $('#showAccount').val("");
    var account = $('#userInput').val();

    currentGithubSearch.getRepos(account, displayName, displayRepo, description);

    console.log(account);
    //display

    $('userInput').val("");
    });
  });
