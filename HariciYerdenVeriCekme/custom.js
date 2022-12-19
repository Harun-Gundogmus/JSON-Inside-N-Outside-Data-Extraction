/* fetch() API kullanarak veri çekme */

var data = fetch("veri.json")
.then(responce => responce.json)
.then(data => {
    console.log(data);
})