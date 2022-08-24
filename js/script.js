let elDiv = document.querySelector(".text")

pokemons.forEach(pokemon => {
  let elLink = document.createElement("li")
  let elNewImg = document.createElement("img", "card-img-top")
  let elNewname = document.createElement("name")
  let elNewweaknesses = document.createElement("weaknesses")
  elNewImg.src = pokemon.img
  elNewname.textContent = pokemon.name
  elNewweaknesses.textContent = pokemon.weaknesses
  elNewImg.alt = pokemon.name
  elNewImg.height = "100"
  elNewImg.width = "100"
  elLink.classList.add(`card`, `col-2`, `my-3`, `mx-4`, `item`);

  elLink.append(elNewImg,elNewname,elNewweaknesses);
  elDiv.appendChild(elLink)
})