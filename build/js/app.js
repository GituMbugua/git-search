(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "90463ddf1da3789c8fecdbda8779c699d284624c";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/search.js":2}]},{},[3]);
