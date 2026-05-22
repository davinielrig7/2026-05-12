
const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit",(e) => e.preventDefault());

const seletorCor = document.getElementById("corFavorita");

seletorCor.addEventListener("input", (e) =>{
    let corNova = e.target.value;
    localStorage.setItem("primaryColor", corNova);

    document.documentElement.style.setProperty("--primary-color", corNova);
});

document.addEventListener("DOMContentLoaded", () =>
{
    if (localStorage.getItem("primaryColor")) {

        seletorCor.value = localStorage.getItem("primaryColor");

        document.documentElement.style.setProperty("--primary-color", seletorCor.value);

    } else {

        const rootStyles = window.getComputedStyle(document.documentElement);

        const primaryColor = rootStyles.getPropertyValue("--primary-color").trim();

        seletorCor.value = primaryColor;
    }

    const rootStyles = window.getComputedStyle(document.documentElement);

    const prymaryColor = rootStyles.getPropertyValue("--primary-color").trim();

    seletorCor.value = prymaryColor;
})