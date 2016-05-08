# Test Frontend
 Frameworks:
 - Bootstrap v3.3.5
 - Jquery 1.11.3  cdn online

## Utilizzo Necessita Cors Abilitato
-- Server Locale e/o Online
-- Cors abilitato x CHROME (CHROME PLUGIN)
-- IE Cambiare le iimpostazioni di sicurezza personalizate e consentire il cross origin

### Struttura
- index.html
- style.min.css  style.css + responisve.css + col-mix.css unificati minificati
                          Per velocizzare il caricamento della struttura e ridurre le richieste di risorse
-style.css
- parts/maincontent.html  parti della sezione #main_content
         accedi.html       parti della sezione #main_content

- js/js/page.js
         main.js
     js/site.min <--- files page.js + main.js  unificati minificati
                      Per velocizzare il caricamento della struttura e ridurre le richieste di risorse

- fonts/ files  font-awesome  non richiamati nel progetto

- css/bootstrap.min.css   richiamato nel progetto
        fontawesome.min.css fontawesome.css  non richiamati

- css/originalcss/bootstrap.css css originale di boostrap
                   responsive.css css originale responsive
                   col-mix.css collonne boostrap personalizzate x il layout
- assets/bootstrap.js
          bootstrap.min.js  richiamato              
          typeahead.js  plugin per autosearch richiamato
          jquery.lazyload.min plugin utlizzato per ottimizzazione del caricamento immagine di sfondo (low-res normal-res) richiamato

#### Todo
- ottimizzazione immagini (compressione e dimensioni),
- migliore inclusione del video embedd in iframe -- e verifica per mobile andoroid 5.0 -- 5.0++ il play non parte
- rules per la convalida form
- migliorare append dinamico input all'elemento form in maincontent.html
- verifica risoluzione alcuni bug, talvolta all' evento click del mouse il campo selezionato per il from non viene selezionato
- effetto slideUp da verificare effetto flickering al menu top
- img di sfondo posizionamento absolute con elemento padre relative


##### Scelte
- Boostrap e Jquery 

###### Note
- testato su broswer Desktop ie 9 ++ ; Chrome ; Firefox; Safari 5.1 windows
- Mobile  android  4.4.2 broswer stock
- Mobile  andorid  lollipop broswer stock
