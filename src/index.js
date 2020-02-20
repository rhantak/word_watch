import $ from 'jquery'

$(document).ready(() => {
  function findTopWord() {
    let url = 'https://wordwatch-api.herokuapp.com/api/v1/top_word'
    var targetElement = document.getElementById('top-word')

    fetch(url)
      .then(response => response.json())
      .then(result => result["word"])
      .then(word => targetElement.textContent=`Top word from Word Watch API: ${Object.keys(word)}, ${Object.values(word)}`)
  }
  findTopWord()

  var targetButton = document.getElementById('send-button')
  targetButton.addEventListener('click', (e) => {
    postWords(document.getElementById("user-words").value)
  })

  async function postWords(words){
    console.log(words)
    var wordArray = words.split(" ")
    wordArray.forEach(word => {
      fetch('https://wordwatch-api.herokuapp.com/api/v1/words', { method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({"word": { "value": `${word}` }})
      })
      .then(words => findTopWord())
    })
  }
})
