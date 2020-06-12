var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

document.getElementById("btn-modal").addEventListener("click", () => {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("change").addEventListener("click", () => {
  let text = document.getElementById("area").value;

  let section = document.getElementById("credits");
  section.innerHTML = "";
  let el = document.createElement("p");
  el.innerHTML = text;
  section.appendChild(el);
  modal.style.display = "none";
});

document.getElementById("reload").addEventListener("click", () => {
  document.location.reload(false);
});
