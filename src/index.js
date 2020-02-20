import $ from 'jquery'

$(document).ready(() => {
  function findTopWord() {
    let url = 'http://localhost:3000/api/v1/top_word'
    var targetElement = document.getElementById('top-word')

    fetch(url)
      .then(response => response.json())
      .then(result => result["word"])
      .then(word => targetElement.append(` ${Object.keys(word)}, ${Object.values(word)}`))
  }
  findTopWord()
  var targetButton = document.getElementById('send-button')

  targetButton.addEventListener('click', (e) => postWords(document.getElementById("user-words").value))

  function postWords(words){
    console.log(words)
    var wordArray = words.split(" ")
    wordArray.forEach(word => {
      fetch('http://localhost:3000/api/v1/words', { method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({"word": { "value": `${word}` }})
      })
    })
  }
})
