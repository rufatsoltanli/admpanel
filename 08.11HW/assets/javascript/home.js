async function Fetch() {
    const res = await fetch("http://localhost:3000/users")
    const data = await res.json()

    data.forEach(element => {
        createcard(element.id, element.photourl, element.name, element.proffesion
        )
    });
}
Fetch();

function createcard(id, url, name, proffesion) {

    const cont = document.querySelector(".cardscont")
    console.log(cont);
    const card = document.createElement("div")
    const cardPhoto = document.createElement("div")
    const photoImg = document.createElement("img")
    const cardName = document.createElement("div")
    const cardProffesion = document.createElement("div")

    card.classList.add("card")
    cardPhoto.classList.add("cardPhoto")
    cardName.classList.add("cardName")
    cardProffesion.classList.add("cardProffesion")

    photoImg.src = url
    cardName.textContent = "Ad: " + name
    cardProffesion.textContent = "Vezifesi: " + proffesion

    card.append(cardPhoto, cardName, cardProffesion)
    cardPhoto.append(photoImg)
    cont.appendChild(card)

    document.body.appendChild(cont)

}
