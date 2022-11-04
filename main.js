function creatGame(player1, hour, player2) {
  return `
  <li>
              <div class="nome-times">
              <img class="img-bandeira" src="./assets/icon=${player1}.svg" alt="Bandeira do(a) ${player1}" />
             <h3>${player1}</h3>
             </div>
              <strong>${hour}</strong>
              <div class="nome-times">
              <img class="img-bandeira" src="./assets/icon=${player2}.svg" alt="Bandeira do(a) ${player2}" />
              <h3>${player2}</h3>
             </div>
            </li>
           
  `
}

let delay = -0.3
function createCard(date, day, tipo, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <p>${tipo}</p>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Domingo", "", creatGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "Segunda",
    "",
    creatGame("england", "10:00", "iran") +
      creatGame("senegal", "13:00", "netherlands") +
      creatGame("united states", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "Terça",
    "",
    creatGame("argentina", "07:00", "saudi arabia") +
      creatGame("denmark", "10:00", "tunisia") +
      creatGame("mexico", "13:00", "poland") +
      creatGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "Quarta",
    "",
    creatGame("morocco", "07:00", "croatia") +
      creatGame("germany", "10:00", "japan") +
      creatGame("spain", "13:00", "costa rica") +
      creatGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Quinta",
    "",
    creatGame("switzerland", "07:00", "cameroon") +
      creatGame("uruguay", "10:00", "south korea") +
      creatGame("portugal", "13:00", "ghana") +
      creatGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Sexta",
    "",
    creatGame("wales", "07:00", "iran") +
      creatGame("qatar", "10:00", "senegal") +
      creatGame("netherlands", "13:00", "ecuador") +
      creatGame("england", "16:00", "united states")
  ) +
  createCard(
    "26/11",
    "Sábado",
    "",
    creatGame("tunisia", "07:00", "australia") +
      creatGame("poland", "10:00", "saudi arabia") +
      creatGame("france", "13:00", "denmark") +
      creatGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "Domingo",
    "",
    creatGame("japan", "07:00", "costa rica") +
      creatGame("belgium", "10:00", "morocco") +
      creatGame("croatia", "13:00", "canada") +
      creatGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "Segunda",
    "",
    creatGame("cameroon", "07:00", "serbia") +
      creatGame("south korea", "10:00", "ghana") +
      creatGame("brazil", "13:00", "switzerland") +
      creatGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "Terça",
    "",
    creatGame("ecuador", "12:00", "senegal") +
      creatGame("netherlands", "12:00", "qatar") +
      creatGame("iran", "16:00", "united states") +
      creatGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "Quarta",
    "",
    creatGame("tunisia", "12:00", "france") +
      creatGame("australia", "12:00", "denmark") +
      creatGame("poland", "16:00", "argentina") +
      creatGame("saudi arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "Quinta",
    "",
    creatGame("croatia", "12:00", "belgium") +
      creatGame("canada", "12:00", "morocco") +
      creatGame("japan", "16:00", "spain") +
      creatGame("costa rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "Sexta",
    "",
    creatGame("south korea", "12:00", "portugal") +
      creatGame("ghana", "12:00", "uruguay") +
      creatGame("serbia", "16:00", "switzerland") +
      creatGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "03/12",
    "Sábado",
    "Oitavas de Final",
    creatGame("a confirmar", "12:00", "a confirmar") +
      creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "04/12",
    "Domingo",
    "Oitavas de Final",
    creatGame("a confirmar", "12:00", "a confirmar") +
      creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "05/12",
    "Segunda",
    "Oitavas de Final",
    creatGame("a confirmar", "12:00", "a confirmar") +
      creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "06/12",
    "terça",
    "Oitavas de Final",
    creatGame("a confirmar", "12:00", "a confirmar") +
      creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "09/12",
    "Sexta",
    "Quartas de Final",
    creatGame("a confirmar", "12:00", "a confirmar") +
      creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "10/12",
    "Sábado",
    "Quartas de Final",
    creatGame("a confirmar", "12:00", "a confirmar") +
      creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "13/12",
    "TERÇA",
    "Semifinais",
    creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "14/12",
    "Quarta",
    "Semifinais",
    creatGame("a confirmar", "16:00", "a confirmar")
  ) +
  createCard(
    "17/12",
    "Sábado",
    "Disputa pelo terceiro lugar",
    creatGame("a confirmar", "12:00", "a confirmar")
  ) +
  createCard(
    "18/12",
    "Domingo",
    "final",
    creatGame("a confirmar", "12:00", "a confirmar")
  )
