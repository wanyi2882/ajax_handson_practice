document.querySelector("#load-users-btn").addEventListener('click', async function(){
    let response = await axios.get("users.json");
    console.log(response.data.users);
    display(response.data.users)
})

function display(users){
    for (let u of users){
        let details = `
        <ul>
        <li>first name: ${u.firstName}</li>
        <li>last name: ${u.lastName}</li>
        <li>email: ${u.emailAddress}</li>
        </ul>`

    let userDiv = document.querySelector("#all-users");
    userDiv.innerHTML += details;
    }
}

document.querySelector("#search-btn").addEventListener('click', async function(){
    let searchResponse = await axios.get("users.json");

    let s = document.querySelector("#search-id").value;

    for (let i=0; i < searchResponse.data.users.length; i++){
        if (searchResponse.data.users[i]["userId"] == s){

            let searchDiv = document.querySelector("#search-result");
            searchDiv.innerHTML = `
            <li>First Name: ${searchResponse.data.users[i]["firstName"]}</li> 
            <li>Last Name: ${searchResponse.data.users[i]["lastName"]}</li>`
        }
    }
})