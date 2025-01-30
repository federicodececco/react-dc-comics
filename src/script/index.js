import headerMenu from "../data/headerMenu";

/* const elemArr = [];
headerMenu.forEach((element) => {
    elemArr.push()
}); */

const comicsBtn = document.getElementById("ciao");
console.log(comicsBtn);
const charactersBtn = document.getElementById("headerList1");
comicsBtn.addEventListener("click", () => {
  headerMenu[1].state = true;
  headerMenu[0].state = false;
});
charactersBtn.addEventListener("click", () => {
  headerMenu[0].state = true;
  headerMenu[1].state = false;
});
