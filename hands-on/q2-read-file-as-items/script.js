document.querySelector('#click-btn').addEventListener('click', async function(){
    let response = await axios.get('items.txt');
    console.log(response.data);

    //processing to convert response.data string to an array
    let fruits = response.data.split(',');

    let fruitsDiv = document.querySelector('#fruits');
    for (let currentFruit of fruits){
        //using HTML:
        // fruitsDiv.innerHTML += `<li>${currentFruit}</li>`

        //using appendChild:
        let liElement = document.createElement('li');
        liElement.innerHTML = currentFruit;
        fruitsDiv.appendChild(liElement);
    }
})