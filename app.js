console.log("connected and ready?")

const apiKey = "AIzaSyBWqQ-M9D80N6FOQFj6XC8FwQ2_LrBHU1A"

// window on load
$(() => {

  const searchBooks = (event) => {
  event.preventDefault()
  const search = $(event.currentTarget).val()
  console.log(search)

  $.ajax({
    // retrieves data from API, filter for three categories
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key="+apiKey,

  }).then(
      (data) => {
        console.log(data.items[0])

        // create container for search results
        const container = $('<div>')
        $('body').append(container)

        // create img for blockchain search result
        const $blockchainImg =
          $('<img>').attr('src', data.items[0].volumeInfo.imageLinks.thumbnail)

        // render



          // $('<p>').html(data.items[0].searchInfo.textSnippet)
          $(container).append($blockchainImg)

  })
}


    $('.button').on('click', searchBooks)
})
