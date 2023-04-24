getFetch()
document.querySelector('.main-button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://thronesapi.com/api/v2/characters`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //choose a random ID number between 0 
        //and however many characters the API returns
        let num = Math.floor(Math.random() * data.length)

        document.querySelector(".character-name").innerText = `${data[num].firstName} ${data[num].lastName}`
        document.querySelector(".character-photo").src = data[num].imageUrl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}