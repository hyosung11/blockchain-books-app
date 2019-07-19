console.log("connected and ready")

const apiKey = "AIzaSyBWqQ-M9D80N6FOQFj6XC8FwQ2_LrBHU1A"

// window on load
$(() => {

  const searchBooks = (event) => {
  event.preventDefault()
  const search = $(event.currentTarget).val()
  console.log(search)

  // empty contents

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
        // const main = $('<div>')
        // $('body').append(main)
        // render img for blockchain search result
        const $image =
          $('<img>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail)
          $(main).append($image)
        // render title of book
        const $title =
          $('<p>').html(data.items[i].volumeInfo.title) // subtitle?
          $(main).append($title)
        // render author(s) of book
        const $subtitle =
          $('<p>').html(data.items[i].volumeInfo.subtitle) // subtitle?
          $(main).append($subtitle)
        }





          // $('<p>').html(data.items[0].searchInfo.textSnippet)


  })
}

    //
    $('.button').on('click', searchBooks)
})
