const itemform = document.getElementById("form")
const Imgurl = document.getElementById("url")
const Name = document.getElementById("name")
const Proffesion = document.getElementById("proffesion")

const hash = window.location.hash.substring(1)
console.log(hash);
// const putMethod = {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     },
//     body: JSON.stringify({ id: hash, photourl: `${Imgurl.value}`, name: `${Name.value}`, proffesion: `${Proffesion.value}` })
// }
itemform.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(Imgurl.value);
    console.log(Proffesion.value);
    console.log(Name.value);
    const putMethod = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ id: hash, photourl: `${Imgurl.value}`, name: `${Name.value}`, proffesion: `${Proffesion.value}` })
    }
    // .then((res) => res.json())
    fetch("http://localhost:3000/users/" + hash, putMethod)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

})
// fetch("http://localhost:3000/users/", putMethod)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// .then(res => res.json())
// .then(element => createtable(element.id, element.photourl, element.name, element.proffesion
// ))



