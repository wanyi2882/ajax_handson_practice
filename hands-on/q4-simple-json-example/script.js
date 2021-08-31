document.querySelector("#load-image-btn").addEventListener('click', async function(){
    let response = await axios.get('artwork.json');
    console.log(response.data);

    let content = `
    <h1>${response.data.title}</h1>
    <img src="${response.data.image_url}"/>`

    let artDiv = document.querySelector("#artwork");
    artDiv.innerHTML += content;
})