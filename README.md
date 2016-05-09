# Test Frontend  - WORK IN PROGRESS Sezione Todo

 - Frameworks:
   - Bootstrap v3.3.5
   - Jquery 1.11.3

## Istruzioni
- Server Locale  Wamp - Xmamp
- Demo diposnibilie all indirizzo specificato nel file onlinedemo.txt
- Cors abilitato x CHROME (CHROME PLUGIN)
- IE Cambiare le impostazioni di sicurezza personalizate e consentire il cross origin

- Descrizione Generale
  - pages.js
    - Paginazione Dinamica
  - main.js
    - chiamate ajax


### Struttura
- index.html
- style.min.css
  - unifica i segenti files
    - style.css + responisve.css + col-mix.css
      - Scopo : Velocizzare il caricamento della struttura e ridurre le richieste di risorse
- style.css
- parts/maincontent.html   
  - accedi.html     
  - collabora.html    
  - come.html
- js/js/page.js
  - main.js
  - js/site.min
    - files page.js
      - unfica i seguenti files + main.js  
       - Scopo : Velocizzare il caricamento della struttura e ridurre le richieste di risorse
- fonts/ files font awesome
  - attualemnte non utlizzati nel progetto
- css/bootstrap.min.css   
  - fontawesome.min.css
  - fontawesome.css
- css/originalcss/bootstrap.css  css originale di boostrap
  - responsive.css css originale responsive
  - col-mix.css    collonne boostrap personalizzate x il layout
- assets/bootstrap.js
  - bootstrap.min.js            
  - typeahead.js  
  - jquery.lazyload.min

#### Todo
- ottimizzazione immagini (compressione e dimensioni),
- migliore inclusione del video embedd in iframe  e verifica per mobile andoroid v.5.0 / v.5.0++ video play
- rules per la convalida form da implementare
- migliorare append dinamico input all'elemento form in accedi.html
- verifica  selezione del form scelto su evento on click - plugin


##### Scelte
- Bootstrap v3.3.5
   - Documentazione completa
   - elevata  compatibilità testata borswer
   - possbilità di personalizzare compomenenti
   - possibilità di utilizzo preprocessori Sass/Less

- Jquery 1.11.3
- Documentazione completa
- elevata  compatibilità testata borswer
- possbilità di personalizzare di integrazione plugin
- buona integrazione con altri linguaggi - no conflict

- Plugins
  - lazyload plugin utlizzato per ottimizzazione del caricamento immagine di sfondo (low-res normal-res)
  - tyepeahed per autosearch plugin per autosearch richiamato

###### Note
- testato sui seguenti broswer :
- Desktop ie 9 ++ ; Chrome ; Firefox; Safari 5.1 windows
- Mobile  android    4.4.2 broswer stock
- Mobile  andorid  lollipop broswer stock
