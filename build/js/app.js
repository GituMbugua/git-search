(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "90463ddf1da3789c8fecdbda8779c699d284624c";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;


function GithubSearch() {

}

GithubSearch.prototype.getRepos = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response){
     console.log(response);
   }).fail(function(error){
     console.log(error.responseJSON.message);
   });
};

exports.searchModule = GithubSearch;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/search.js":2}]},{},[3]);
