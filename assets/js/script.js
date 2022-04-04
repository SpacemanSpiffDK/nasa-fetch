// JS by Dan Høegh
// UCN MMD 2021

const draw = (selector, content) => {
  
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.innerHTML = content;
  });
}


const NASAkey = "pEefEwyv0maeCjy7bccHgzgQZNfSSunMOcFqhdrq";
const NASAapodURL = "https://api.nasa.gov/planetary/apod?api_key=" + NASAkey;

async function getAPOD() {
  let response = await fetch(NASAapodURL)
  let data = await response.json();
  return data;
};

getAPOD().then(data => {
  console.log(data);
  if (data.media_type === "image"){
    const content = `
      <div class="imageWrapper">
        <img src="${data.url}" alt="data.title">
        <div class="imageText">
          <h1>${data.title}</h1>
          <div>
            <p>${data.explanation}</p>
          </div>
        </div>
      </div>
    `;
    draw("#app", content);
  }
});

