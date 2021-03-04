// prenso un cognome
var inserisciCognome = prompt("inserisci il tuo cognome con la prima lettera maiuscola")

// prendo gli elementi del HTML
var listaCognomi = document.getElementById("listaCognomi")
var laTuaPosizione = document.getElementById("laTuaPosizione")

// creo array cognomi
var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Alongi", 'Mastrobattista', "Verdi"]

// aggiungo cognome preso
cognomi.push(inserisciCognome)

// ordino alfabeticamente i cognomi
var cognomiOrdinati = cognomi.sort()

// ciclo array cognomi
for (let i = 0; i < cognomi.length; i++) {

    listaCognomi.innerHTML += "<li>" + (i + 1) + "  " + cognomiOrdinati[i] + "</li>"
}

// prendo la posizione del cognome inserito
var posizionamento = cognomiOrdinati.indexOf(inserisciCognome) + 1

// stampo la posizioni in cui sono
laTuaPosizione.innerHTML = "sei al numero " + posizionamento