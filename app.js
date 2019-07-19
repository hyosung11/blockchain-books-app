// message that file is linked to html
console.log("connected and ready")

// apiKey
const apiKey = "AIzaSyBWqQ-M9D80N6FOQFj6XC8FwQ2_LrBHU1A"

// window on load
$(() => {

  // starting variables
  const searchBooks = (event) => {
  event.preventDefault()
  const search = $(event.currentTarget).val()
  // console.log($(event.currentTarget).val())
  // empty contents
  $('main').empty()

  // reset button function

  $.ajax({
    // retrieves data from API, filter for three categories
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key="+apiKey,

  }).then(
      (data) => {
        console.log(data.items[0])
        // loop through the list of books
        for (let i = 0; i < 10; i++) {
        // create container for search results
        const results = $('<div>')
        $('main').append(results)
        // gets img for blockchain search result
        const $image =
          $('<img>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail)
          $(results).append($image)
        // gets title of book
        const $title =
          $('<p>').html(data.items[i].volumeInfo.title) // subtitle?
          $(results).append($title)
        // gets subtitle
        const $subtitle =
          $('<p>').html(data.items[i].volumeInfo.subtitle) // subtitle?
          $(results).append($subtitle)
        // gets author info
        const $author =
          $('<p>').html(data.items[i].volumeInfo.authors[0])
          $(results).append($author)
        // gets textSnippet
        const $textSnippet =
          $('<p>').html(data.items[i].searchInfo.textSnippet)
          $(results).append($textSnippet)
        }
    })
  }
    // event handler for button click
    $('.button').on('click', searchBooks)
    // reset button
    // code goes here
})
