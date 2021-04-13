Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova



// 1. chiedi all’utente il cognome
var cognome = prompt("Qual'è il tuo cognome?");
var cognomiDisponibili = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
cognomiDisponibili.push(cognome);



// 3. stampa la lista ordinata alfabeticamente
cognomiDisponibili.sort();

var sorted = [];
for (var i = 0; i < cognomiDisponibili.length; i++) {
    sorted.push(cognomiDisponibili[i].toLowerCase());
}

sorted.sort();

console.log(sorted);



document.getElementById("surname").innerHTML = "<li>" + sorted + "</li>"


// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
document.getElementById("order").innerHTML = "L'ordine del tuo cognome è " + (sorted.indexOf(cognome) + 1);
