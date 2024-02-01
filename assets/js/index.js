
const SELECTOR_INPUT = '.m-search-form input[type="search"]';
const MIN_INPUT_LENGTH = 3;

const has = (header, className) =>
  header.classList.contains(className);
const add = (header, className) =>
  header.classList.add(className);
const remove = (header, className) =>
  header.classList.remove(className);

(() => {
  // every button with the right class will show the "demo" modal on click
  const headers = Array.from(document.querySelectorAll('.o-header'));

  if (headers) {
    headers.forEach((header) => {
      const input = header.querySelector(SELECTOR_INPUT);

      /**
       * This event fires on every input to make sure the header
       * is in the right state (showing suggestions or not)
       */
      if (input) {
        input.addEventListener('input', (event) => {
          const { value } = event.target;

          if (
            value.length >= MIN_INPUT_LENGTH &&
            !has(header, '-show-suggestions')
          ) {
            add(header, '-show-suggestions');
          }

          if (
            value.length < MIN_INPUT_LENGTH &&
            has(header, '-show-suggestions')
          ) {
            remove(header, '-show-suggestions');
          }
        });
      }
    });
  }

  /**
   * THEME SWITCHER
   */
  let body = document.getElementsByTagName("body")[0];
  document.querySelector('#theme-switcher').addEventListener('click', (event) => {
    if(localStorage.getItem('theme') === 'dark') {
      body.classList.remove('-dark-mode');
      localStorage.setItem('theme', 'light');
    } else { 
      body.classList.add('-dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
  if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('-dark-mode');
  } else {
    body.classList.remove('-dark-mode');
  }

  var index = new FlexSearch.Document({
  tokenize: "forward",
  cache: 100,
  document: {
    id: 'id',
    store: [
      "href", "title", "description"
    ],
    index: ["title", "description", "content"]
  }});

})();