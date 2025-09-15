/* ========================== CAMBIO COLORE =========================== */

//potevo usare getElementbyClass
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');   // seleziona l'elemento toggler (rotella) per aprire e chiudere lo switcher

styleSwitcherToggle.addEventListener('click', () => {                            // evento listener che ascolta l'evento click sul toggler
  
  document.querySelector('.style-switcher').classList.toggle('open');            // con ogni click, cambia classe di elemento con .style-switcher
});                                                                              // (mostra o nasconde il pannello delle opzioni di stile) 


//gestisce il cambio colore
const alternateStyles = document.querySelectorAll('.alternate-style');            // seleziona TUTTI gli elementi con classe .alternate-style

//func che cambia il tema selezionato - setActiveStyle è definita in html
function setActiveStyle(color) {                                                  //func riceve parametro color (tema selezionato) - color definito in fuction
  alternateStyles.forEach((style) => {                                            //per ogni elemento con quella classe .alternate-style
    if (color === style.getAttribute('title')) {                                  //se il nome del tema, preso da attr title, corrisponde al colore passato dalla funzione
      style.removeAttribute('disabled');                                          //viene rimosso disable, e lo stile viene attivato
    } else {
      style.setAttribute('disabled', 'true');                                     //altrimenti disabilita il tema
    }
  });
}



/* ========================== CAMBIO STILE MODALITÀ CHIARA O SCURA, con icone =========================== */

const dayNight = document.querySelector('.day-night');                           //viene selezioanto l'elemento con classe .day-night - toggle per cambiare tema

dayNight.addEventListener('click', () => {                                       //ascolta l'evento click su elemento dayNight
  dayNight.querySelector('i').classList.toggle('fa-sun');                        //funzione che alterna le icone sole e luna
  dayNight.querySelector('i').classList.toggle('fa-moon');                       //funzione toggle cambia classe - se è presente, viene rimossa, se non è presente, viene aggiunta
  document.body.classList.toggle('dark');                                        //aggiunta o rimossa la classe dark alla pagina, a seconda di questo lo stile sarà chiaro o scuro 
//toggle - metodo js (add classe se non c'è, la toglie se c'è)
});

/* === impostare icona iniziale in base alla modalità === */ 
window.addEventListener('load', () => {                                         //quando la pagina viene caricata - con window, mi appoggio a tutta la pagina - ascolta evento load (funzione eseguita solo quando pagina è caricata)
  if (document.body.classList.contains('dark')) {                               //viene verificato se il documento ha la classe dark
    dayNight.querySelector('i').classList.add('fa-sun');                        //se è presente, diventa un sole (perchè e mod scura -> chiara)
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');                       //se non presente, diventa una luna (perchè è mod chiara -> scura)
  }
});
