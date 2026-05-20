const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit",(e) => e.preventDefault());

const seletorCor = document.getElementById("corFavorita");

seletorCor.addEventListener("input", (e) =>{
    let corNova = e.target.value;

    document.documentElement.style.setProperty("--primary-color", corNova);
});
