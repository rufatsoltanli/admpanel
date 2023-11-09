const itemform = document.getElementById("form")
        const Imgurl = document.getElementById("url")
        const Name = document.getElementById("name")
        const Proffesion = document.getElementById("proffesion")

        itemform.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log(Imgurl.value);
            console.log(Proffesion.value);
            console.log(Name.value);
            fetch("http://localhost:3000/users/", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ photourl: `${Imgurl.value}`, name: `${Name.value}`, proffesion: `${Proffesion.value}` })
        })
            .then((res) => res.json())
        })

        // function search(e) {
        //     e.preventDefault();
        //     console.log(Imgurl);
        //     console.log(Proffesion);
        //     console.log(Name);
        // }


    

        // const hash = window.location.hash.substring(1)
        // console.log(hash);
     
        // .then((data) => {
        //     data.forEach((x) => createCard(x.id, x.photourl, x.name, x.proffesion));
        // })