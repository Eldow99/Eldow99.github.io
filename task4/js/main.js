let categories = document.querySelector('.posts')
async function getResponse(){

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
   
     let content = await response.json()
    //  content=content.splice(0, 10);

    for(key in content){
    
        categories.innerHTML +=`
        <li class="post">ID: ${content[key].id}</li>
        <li class="post">USERID: ${content[key].userId}</li>
        <li class="post">TITLE: ${content[key].title}</li>
        <li class="post">BODY: ${content[key].body}</li>
        `
    }
}

getResponse();