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
        console.log(data)
      })
}


    $('.button').on('click', searchBooks)
})
