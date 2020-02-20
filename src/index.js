import $ from 'jquery'
// const fetch = require("node-fetch");

$(document).ready(() => {
  let url = 'http://localhost:3000/api/v1/top_word'
  var targetElement = document.getElementById('top-word')

  fetch(url)
    .then(response => response.json())
    .then(result => result["word"])
    .then(word => targetElement.append(` ${Object.keys(word)}, ${Object.values(word)}`))


})
