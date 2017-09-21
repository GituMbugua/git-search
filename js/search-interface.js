var GithubSearch = require('./../js/search.js').searchModule;
var displayName = function(name) {
    if (name === null) {
      $('#login').append("This account does not have a username.");
    } else {
    $('#login').append("<h3>Username: </h3><h4>" + name + "</h4>");
  }
};
var displayRepo = function(repo) {
  $('#showAccount').append('<h4>' + repo + '</h4>');
};
var description = function(descr) {
  $('#showAccount').append('<p>' + descr + '</p>');
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
