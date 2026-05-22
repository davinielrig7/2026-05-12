const elementoForm = document.getElementById("formulario");

elementoForm.addEventListener("submit", (e) => e.preventDefault());

const seletorCor = document.getElementById("corFavorita");

seletorCor.addEventListener("input", (e) => {
    let corNova = e.target.value;

    localStorage.setItem("primaryColor", corNova);

    document.documentElement.style.setProperty("--primary-color", corNova);
});

document.addEventListener("DOMContentLoaded", () => {

    const corSalva = localStorage.getItem("primaryColor");

    if (corSalva) {

        seletorCor.value = corSalva;

        document.documentElement.style.setProperty("--primary-color", corSalva);

    } else {

        const rootStyles = window.getComputedStyle(document.documentElement);

        const primaryColor = rootStyles
            .getPropertyValue("--primary-color")
            .trim();

        seletorCor.value = primaryColor;
    }
});