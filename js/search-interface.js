var GithubSearch = require('./../js/search.js').searchModule;
var displayName = function(name) {
    if (name === null) {
      $('#login').append("<h3>This account does not have a username.</h3>");
    } else {
    $('#login').append("<h3>Username:" + ' ' + name + "</h3>");
  }
};
var displayRepo = function(repo) {
  $('#showAccount').append('<h4><strong>' + repo + '</strong></h4>');
};
var description = function(descr) {
    if (descr === null) {
      $('#showAccount').append('<p>No Description</p>');
    } else {
      $('#showAccount').append('<p>Description:' + ' ' + descr + '</p>');
    }
};

$(document).ready(function() {
  var currentGithubSearch = new GithubSearch();

  $('#form').submit(function(event) {
    event.preventDefault();
    $('#login').text(" ");
    $('#showAccount').text(" ");
    var account = $('#userInput').val();

    currentGithubSearch.getRepos(account, displayName, displayRepo, description);

    console.log(account);
    //display

    $('userInput').val("");
    });
  });
