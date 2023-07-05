/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b){
    if(a === b){
        return ((a + b)*3)
    }
    return a + b 
}
console.log(crazySum(5, 5))


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(c){
    if(c >= 20 && c <= 100 || c === 400){
        return true
    }
    return false
}
console.log(boundary(400))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string){
    return string.split("").reverse().join("")
}
console.log(reverseString("EPICODE"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst (str){
    let parole = str.split(" ")
    let frase = ""
    let parola = ""

    for (i = 0; i < parole.length; i++){
        parola = parole[i].split("")[0].toUpperCase() + parole[i].slice(1) + " "
        frase = frase + parola
    }
    return frase
}
console.log(upperFirst('daje roma daje'))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    const numbers = []
    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * 11)
        numbers.push(randomIndex)
    }
    return numbers
}

console.log(giveMeRandom(5))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    if(l1 === l2){
        return (l1*l2 + " è l'area di un QUADRATO, avendo l1 e l2 la stessa lunghezza!!")
    } 
    return (l1*l2 + " è l'area di un rettangolo")
    
}
console.log(area(4, 5))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(d, e){
    e = 19
    let risultato = d - e;

    if(risultato > 19 || risultato < -19){
        return (Math.abs(risultato) * 3)
    }
    return risultato
}
console.log(crazyDiff(-10))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function codify(string){
    if(string.startsWith('code')){
        return string
    }
    return 'code' + string
}
console.log(codify("ciao"))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(f){
    if(f % 3 === 0 || f % 7 === 0){
        return true
    } else {
    return false
    }
}
console.log(check3and7(50))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(str){
    return str.slice(1, str.length - 1)
}
console.log(cutString('buonasera'))