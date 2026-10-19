 async function getImage() {
    try{
        const characterName = document.getElementById("character").value;
        console.log(characterName);
        const url = `https://api.disneyapi.dev/character?name=${characterName}`;

        const response = await fetch(url);
        const json = await response.json();
        console.log(json);

        const characterHolder = document.getElementById("characterHolder");
        characterHolder.appendChild(document.createElement("br"));
        let img = document.createElement("img");
        img.src = json.data[0].imageUrl;
        img.alt = characterName;
        characterHolder.appendChild(img);
    }
    catch(error) {
        console.log(error);
    }
 
 }


//      try{
//         const url = "https://api.disneyapi.dev/character?name=Moana";
//         const headers = new Headers();
//         headers.append("Accept", "application/json");

//         const response = await fetch(url, { headers: headers });

//         const json = await response.json();
//         console.log(json);         
        
//         const JokeHolder = document.getElementById("jokeHolder")
        
//         jokeHolder.textContent = json.data[0].imageUrl
//         const img = document.createElement("img");
//         img.src = json.data[0].imageUrl;
//         img.alt = "Moana";
//         jokeHolder.appendChild(img);
        
    
//      }

//      catch(error) {
//          console.log(error);
//      }


//  }


  