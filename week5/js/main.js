
let categories = document.querySelector('.categories')
let url='https://jsonplaceholder.typicode.com/posts'
fetch(url)
.then(response=>{
    return response.json()
}).then(post=>{ return post.slice(0,10) })
.then(posts => {for(key in posts){
    categories.innerHTML +=`
        <li class="post">ID: ${posts[key].id}</li>
        <li class="post">USERID: ${posts[key].userId}</li>
        <li class="post">TITLE: ${posts[key].title}</li>
        <li class="post">BODY: ${posts[key].body}</li>
            `
}})


let apiKEY = '6wCjYgXI7iA5zQrhch17Lc6QtNDim1ey';
document.addEventListener("DOMContentLoaded",init);
function init(){
    document.getElementById("btn").addEventListener("click",ev =>{
        ev.preventDefault();
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&limit=10&q=`
        let str = document.getElementById("inp").value.trim();
        url = url.concat(str);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            // console.log('META'.content.meta)
            for (key in content.data){
            let fig = document.createElement('figure')
            let img = document.createElement('img')
            let fc = document.createElement('figcaption')
            img.src = content.data[key].images.downsized.url;
            fig.appendChild(img);
            fig.appendChild(fc);
        let result = document.querySelector(".result");
     var output=result.insertAdjacentElement("afterbegin", fig);
      document.querySelector("#inp").value = '';
  
    }   
        })
        .catch(err =>{
            console.error(err)
        })
    });
}
