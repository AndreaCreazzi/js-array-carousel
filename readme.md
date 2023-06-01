# Traccia

## Consegna:

Dato un array contenente una lista di cinque immagini, creare un carosello come
nello screenshot allegato. Potete anche usare immagini diverse e variare
leggermente lo stile, l'importante è la logica!

## MILESTONE 1

Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo
un'immagine grande al centro: avremo così la struttura base e gli stili pronti
per poterci poi concentrare solamente sull'aspetto logico.

## MILESTONE 2

Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini
dinamicamente servendoci dell'array fornito e un semplice ciclo for che
concatena un template literal.

Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe
specifica che la renderà visibile.

Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella
milestone 1, ma costruito dinamicamente attraverso JavaScript.

## MILESTONE 3

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che
quindi verrà visualizzata al posto della precedente.

## BONUS 1:

Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine
e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre
l'ultima e viceversa!

## BONUS 2:

Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra
dell’immagine grande attiva, (usate lo screen in allegato come ispirazione).
Tutte le miniature avranno un layer di opacità scura, tranne quella
corrispondente all’immagine attiva, che invece avrà un bordo colorato.

Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di
miniatura attiva. Prima di partire a scrivere codice:

Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma
analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.

Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci
ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti.

Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista
il focus dell'esercizio.

## Consigli del giorno:

1. Costruiamo del carosello una versione statica contenente solamente
   un'immagine. Di questa versione statica al momento opportuno commenteremo
   (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js.
   Potremo quindi usarli come "template".

2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire
cosa vogliamo fare
<hr>

## Ragionamento Esercizio

<br>

1. Prendo gli elementi dal DOM
1. creo un array per le foto
1. preparo l'html
1. preparo un ciclo per le foto
1. verifico se il ciclo funziona
1. inserisco il bottone prev in ascolto
1. inserisco gli elementi dentro il bottone
1. inserisco il bottone next in ascolto
1. cambio un elemento dentro il bottone next
1. inserisco gli elementi nel DOM
1. (bonus 1) creo un controllo che renda le foto in slide infinite
1. (bonus 2) creo un controllo per l'id thumb da stampare in pagina
