let character = {
    firstName: "",
    lastName: "",
  
    fetchCharacter: function (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  
      fetch(
        "https://starwars-databank-server.vercel.app/api/v1/characters/name/" +
          firstName +
          "%20" +
          lastName
      )
        .then((response) => response.json())
        .then((data) => this.displayCharacter(data));
    },

    fetchSingleCharacter: function (firstName) {
        this.firstName = firstName;
    
        fetch(
          "https://starwars-databank-server.vercel.app/api/v1/characters/name/" +
            firstName +
            "%20"
        )
          .then((response) => response.json())
          .then((data) => this.displaySingleCharacter(data));
      },
      displaySingleCharacter: function (data) {
        const name = data[0].name;
        const description = data[0].description;
        const imagesrc = data[0].image;
    
        document.querySelector(".title").innerText =
          this.firstName;
        document.querySelector(".description").innerHTML = description;
        document.getElementById("imgID").src = imagesrc;
      },
  
    displayCharacter: function (data) {
      const name = data[0].name;
      const description = data[0].description;
      const imagesrc = data[0].image;
  
      document.querySelector(".title").innerText =
        this.firstName + " " + this.lastName;
      document.querySelector(".description").innerHTML = description;
      document.getElementById("imgID").src = imagesrc;
    },
  
    search: function () {
      var charFull = document.querySelector(".search_box").value;
      var charFullName = charFull.split(' ');
  
      if (charFullName.length === 1) {
        this.fetchSingleCharacter(charFullName[0]);
      } else if (charFullName.length === 2) {
        this.fetchCharacter(charFullName[0], charFullName[1]);
      } 
    },
  };
  
  window.onload = function () {
    document.querySelector(".search_button").addEventListener("click", function () {
      character.search();
    });
    document
  .querySelector(".search_box")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      character.search();
    }
  });
  };
 