function add(valor) {
    document.getElementById("visor").value += valor;
}

function invert() {
    document.getElementById("visor").value = visor.value*-1;
}

function calc() {
    document.getElementById("visor");
    try {
        visor.value = eval(visor.value);
    } catch(error) {
        visor.value = "Erro";
    }
}

function removeLastDigit() {
    document.getElementById("visor").value = visor.value.slice(0, -1);
}

function removeAll() {
    document.getElementById("visor").value = visor.value.slice(0, null);
}