/*
  Zadatak 7
  Napravite anonimnu funkciju i postavite je kao vrijednost varijable. Nasa bi funkcija trebala raditi na ovaj nacin: 
•	Ako je proslijeden broj, vraca kvadrat tog broja;
•	Incce vraca obavijest o pogresci.
  */

var kvadratIliGreska = function (x) {
    if (typeof x === 'number') {
        return x * x;
    } else {
        return "Pogreška";
    }
};

document.write("• " + kvadratIliGreska(5) + "<br>");
document.write("• " + kvadratIliGreska("abc") + "<br>");
