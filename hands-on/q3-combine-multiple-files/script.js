document.querySelector('#load-btn').addEventListener('click', async function(){
    let response = await axios.get('file1.txt');
    console.log(response.data);

    let response2 = await axios.get('file2.txt');
    console.log(response2.data);

    document.querySelector("#content").innerHTML =response.data + "\n" + response2.data

})