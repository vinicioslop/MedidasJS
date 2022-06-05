function calcular() {
    event.preventDefault();

    if (document.getElementById("entrada").value <= 0) {
        return;
    }

    let metros = document.getElementById("entrada").value;
    let cm = metros * 100;
    let km = metros / 1000;

    let resultados = document.getElementsByClassName("resultados")[0];

    document.getElementById("cm").innerText = cm + " cm";
    document.getElementById("m").innerText = metros + " m";
    document.getElementById("km").innerText = km + " km";

    if (resultados.classList.contains("esconde")) {
        resultados.classList.remove("esconde");
    }
}