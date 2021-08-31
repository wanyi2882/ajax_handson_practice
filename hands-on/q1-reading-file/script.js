document.querySelector("#load-btn").addEventListener('click', async function(){
    let response = await axios.get("contact.txt");

    let box = document.querySelector("#content");
    box.innerHTML = response.data;
})


