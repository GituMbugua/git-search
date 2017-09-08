var GithubSearch = require('./../js/search.js').searchModule;

$(document).ready(function() {
  var currentGithubSearch = new GithubSearch();

  $('#form').submit(function(event) {
    event.preventDefault();

    var account = $('#userInput').val();
    currentGithubSearch.getRepos(account);
    console.log(account);
    //display

    $('#login').text(account);
    $('userInput').val("");
    });
  });
