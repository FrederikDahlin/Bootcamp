# Løkker #

* Benyt markdown til at beskrive hvordan hver af de tre løkker fungerer, husk at få alle nødvendige tegn med.
* Illustrer dine forklaringer med kodeeksempler.

### for - loop ###
```javascript
    for (let x = 0; i <= 5; x++) {
       console.log(i)
    }

    for (Køres før løkken; Definer hvad og hvor meget; Hvad skal gøres) {
        console.log(Variabel)
    }
```

### do while - loop ###
```javascript
    let x = 0;
    do {
        console.log(x);
        x++;
    } 
    while (x <= 5);
```
Samme princip, der er variabel *x* med en start værdi. 

*do* sender *x* til console, og ligger +1 til *x*.

*while* smider *x* i en løkke, til og med 5.

### while - loop ###
```javascript
    let x = 0;
    while (x <= 5) {
        console.log(x);
        x++;
    }
```
Same story