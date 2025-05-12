// const names = ["John Doe", "Emmet James", "Lucy Smith"];

// names.map((n) => {
//   const newNames = n.split(" ");
// 
//   return newNames[0][0] + "." + newNames[1][0];
// });

// https://galleriafem.netlify.app/gallery

// document.querySelectorAll('.image-overlay').forEach((img) => {
//     console.log(img.querySelector('h2').textContent + "-" + img.querySelector("span").textContent)
// });

const movieList = document.querySelector("ul");
const form = document.querySelector("form");
const movieTextInput = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const movie = document.createElement("li");

  movie.textContent = movieTextInput.value;

  const completedBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  removeBtn.textContent = "Delete";
  removeBtn.style.marginLeft = "16px";

  completedBtn.textContent = "Toggle";
  completedBtn.style.marginLeft = "16px";
  
  removeBtn.addEventListener("click", () => {
    movieList.removeChild(movie);
  });

  completedBtn.addEventListener("click", () => {
    // movie.classList.add("crossed")
    movie.classList.toggle("crossed");
  });

  movie.appendChild(completedBtn);
  movie.appendChild(removeBtn);

  movieList.appendChild(movie);

  // <img src="x" onerror="alert()" />

  // movieList.innerHTML += `<li>${movieTextInput.value}</li>`

  movieTextInput.value = "";
});
