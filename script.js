// Global Constants
const apiKey = "InZ13soqb2G1JrzalPU6kcOPW4yj5s6O"
const q = "sticker"
const limit = 9
const offset = 0
const rating = "g"
const lang = "en"
const randomId = "e826c9fc5c929e0d6c6d423841a282aa"
const bundle = "messaging_non_clips"



const searchForm = document.querySelector("#search-form")
const searchInput = document.querySelector("#search-input")
const searchButton = document.querySelector("#search-button")
const display = document.querySelector(".display-results")
const hiddenButton = document.querySelector("#hidden")

//hiddenButton.style.display = none
//var currentPageNum = 0
//let offSet = 0
/**
 * Update the DOM to display results from the Giphy API query.
 *
 * @param {Object} results - An array of results containing each item
 *                           returned by the response from the Giphy API.
 *
 */
function displayResults(results) {
  // YOUR CODE HERE
  console.log(results)
  results.data.forEach((element) => {
    let gif = document.createElement('img');
    gif.src = element.images.original.url;
    display.innerHTML += `<img src="${gif.src}" alt="image">`
  })
}


/**
 * Make the actual `fetch` request to the Giphy API
 * and appropriately handle the response.
 *
 * @param {String} searchTerm - The user input text used as the search query
 *
 */
async function getGiphyApiResults(searchTerm) {
  // YOUR CODE HERE
  const res = await fetch(`${`http://api.giphy.com/v1/gifs/search`}?q=${searchTerm}&limit=${limit}&offset=${offset}&api_key=${apiKey}`)
  const data = await res.json()
  console.log(data)
  displayResults(data)
}

/**
 * The function responsible for handling all form submission events.
 *
 * @param {SubmitEvent} event - The SubmitEvent triggered when submitting the form
 *
 */
async function handleFormSubmit(event) {
  // YOUR CODE HERE
  event.preventDefault()
  console.log(searchInput)
  getGiphyApiResults(searchInput.value)
}

/**
 * Handle fetching the next set of results from the Giphy API
 * using the same search term from the previous query.
 *
 * @param {MouseEvent} event - The 'click' MouseEvent triggered by clicking the 'Show more' button
 *
 */
async function handleShowMore(event) {
  // YOUR CODE HERE
  //hiddenButton.addEventListener('click', handleFormSubmit)
  //currentPageNum += 1
}

window.onload = function () {
  // YOUR CODE HERE
  // Add any event handlers here
  searchButton.addEventListener('click', handleFormSubmit)
}
