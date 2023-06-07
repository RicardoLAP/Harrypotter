function determinarCasaHarryPotter(personagem) {
    var casa = "";

    switch (personagem) {
    case "Sibila Trelawney":
        casa = "Corvinal";
        break;
    case "Cho Chang":
        casa = "Corvinal";
        break;
    case "Peter Pettigrew":
        casa = "Grifinória";
        break;
    case "Ninfadora Tonks":
        casa = "Lufa-Lufa";
        break;
    case "Narcisa Malfoy":
        casa = "Sonserina";
        break;
    default:
        casa = "Desconhecido";
        break;
    }

    return casa;
}
function exibirCasa() {
    var personagem = document.getElementById("personagemInput").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = determinarCasaHarryPotter(personagem);
}