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

  // Exemplos de uso:
  console.log(determinarCasaHarryPotter("Sibila Trelawney")); // Saída: Corvinal
  console.log(determinarCasaHarryPotter("Cho Chang")); // Saída: Corvinal
  console.log(determinarCasaHarryPotter("Peter Pettigrew")); // Saída: Lufa-Lufa
  console.log(determinarCasaHarryPotter("Ninfadora Tonks")); // Saída: Grifinória
  console.log(determinarCasaHarryPotter("Narcisa Malfoy")); // Saída: Sonserina
  console.log(determinarCasaHarryPotter("Harry Potter")); // Saída: Desconhecido
