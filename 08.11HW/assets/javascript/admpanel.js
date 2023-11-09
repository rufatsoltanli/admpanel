async function Fetch() {
    const res = await fetch("http://localhost:3000/users")

    const data = await res.json()

    data.forEach(element => {
        createtable(element.id, element.photourl, element.name, element.proffesion
        )
    });
}
Fetch();

function createtable(id, url, name, proffesion) {
    const cont = document.querySelector(".itemscont")
    const item = document.createElement("div")
    const itemId = document.createElement("div")
    const itemImage = document.createElement("div")
    const itemName = document.createElement("div")
    const itemProffesion = document.createElement("div")
    const itemPhoto = document.createElement("img")
    const itemButtonCont = document.createElement("div")
    const itemDelButton = document.createElement("button")
    const itemEditButton = document.createElement("button")
    const EditLink = document.createElement("a")


    itemPhoto.src = url
    EditLink.setAttribute("href", (`./AdmPanelEdit.html#` + id))
    itemId.textContent = "Elementin ID-si: " + id
    itemName.textContent = "Ad: " + name
    itemProffesion.textContent = "Vezife: " + proffesion
    itemDelButton.textContent = "Delete X"
    EditLink.textContent = "Edit"


    item.classList.add("item")
    itemId.classList.add("itemid")
    itemImage.classList.add("itemimage")
    itemName.classList.add("itemname")
    itemProffesion.classList.add("itemproffesion")
    itemImage.classList.add("itempimage")
    itemButtonCont.classList.add("itembuttoncont")
    itemDelButton.classList.add("itemdelbutton")
    itemEditButton.classList.add("itemeditbutton")

    itemEditButton.append(EditLink)
    itemButtonCont.append(itemDelButton)
    itemButtonCont.appendChild(itemEditButton)
    itemImage.append(itemPhoto)
    item.append(itemId, itemImage, itemName, itemProffesion)
    item.append(itemButtonCont)
    cont.append(item)

    itemDelButton.addEventListener("click", function () {
        fetch('http://localhost:3000/users/' + id, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(res => console.log(res))

    })
}
