const NASAkey = "pEefEwyv0maeCjy7bccHgzgQZNfSSunMOcFqhdrq";

const datePicker = document.querySelector("#datePicker");
datePicker.addEventListener("change", () => {
  let NASAapodURL = "https://api.nasa.gov/planetary/apod?api_key=" + NASAkey;
  const date = datePicker.value;
  NASAapodURL += "&date=" + date;
  NASAapodURL += "&thumbs=true";
  console.log(NASAapodURL);
  getAPOD(NASAapodURL).then(data => {
    console.log(data);
    if (data.media_type == "image") {
      const content = `
      <div class="imageWrapper">
        <img src="${data.url}">
        <div class="imageText">
          <h1>${data.title}</h1>
          <div>
            <p>${data.explanation}</p>
          </div>
        </div>
      </div>
      `;
      document.querySelector("#app").innerHTML = content;
    } else {
      const content = `
        <a id="videoLink" href="${data.url}" target="_blank">
          <img src="${data.thumbnail_url}">
        </a>
      `;
      document.querySelector("#app").innerHTML = content;
    }
    console.log(data.media_type);
  });
});


async function getAPOD(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};