var listele = document.getElementById("listele")
let data = fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(veri=>{
    veri.forEach(element => {
        //console.log(element.title);
        listele.innerHTML += `<li>${element.title}</li>`
    });

})