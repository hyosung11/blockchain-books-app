// message that file is linked to html
console.log("connected and ready")

// apiKey
const apiKey = "AIzaSyBWqQ-M9D80N6FOQFj6XC8FwQ2_LrBHU1A"

// window on load
$(() => {

  // grabbing More Info button
  const $openBtn = $('#openModal')

  // grabbing modal element
  const $modal = $('#modal')

  // grabbing close button
  const $closeBtn = $('#close')

  // EVENT HANDLERS
  // event handler to open the modal
  const openModal = () => {
    $modal.show()
  }
  // event handler to close the modal
  const closeModal = () => {
    $modal.hide()
  }

  // EVENT LISTENERS
  // add an event listener to More Info button
  $openBtn.on('click', openModal)

  // add an event listener to Close button
  $closeBtn.on('click', closeModal)

  setTimeout(openModal, 2000)


  // starting variables
  const searchBooks = (event) => {
  event.preventDefault()
  const search = $(event.currentTarget).val()
  // console.log($(event.currentTarget).val())
  // empty contents
  $('main').empty()
  // reset button function?

  $.ajax({
    // retrieves data from API, filters for categories
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key="+apiKey,

  }).then(
      (data) => {
        // console.log(data.items[0])
        // loop through the list of books
        for (let i = 0; i < 10; i++) {
        // create container for search results
        const results = $('<div>').addClass('search')
        $('main').append(results)
        // console.log(data.items[i]);
        if (data.items[i].volumeInfo.imageLinks === undefined) {
          console.log("image does not exist");
          // need to create "does not exist" default image
        } else {
          // gets img for search result and puts it in div with class img
          const $image = $('<div>').addClass('img')
            $(results).append($image)
          const $imageDiv = $('<img>').attr('src', data.items[i].volumeInfo.imageLinks.thumbnail)
            $($image).append($imageDiv)
        }
        // gets title of book and puts into p tag with title class
        const $title =
          $('<p>').text(data.items[i].volumeInfo.title).addClass('title') // subtitle?
          $(results).append($title)
        // gets subtitle
        const $subtitle =
          $('<p>').text(data.items[i].volumeInfo.subtitle).addClass('subtitle') // subtitle?
          $(results).append($subtitle)
        // gets author info
        const $author = $('<p>')
          for (let j = 0; j < data.items[i].volumeInfo.authors.length; j++) {
            $span = $('<span>').addClass('author')
            if (data.items[i].volumeInfo.authors.length-1 == j) {
              $span.html(data.items[i].volumeInfo.authors[j])
            } else {
              $span.html(data.items[i].volumeInfo.authors[j] + ', ')
            }
            $author.append($span)
          }
        $(results).append($author)
        // gets textSnippet
        const $textSnippet =
          $('<p>').html(data.items[i].searchInfo.textSnippet || 'text not available').addClass('textSnippet')
          console.log($textSnippet);
          $(results).append($textSnippet)

        }
      }
    )
  }
    // event handler for button click
    $('.button').on('click', searchBooks)
    // reset button
})
