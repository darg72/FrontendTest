# Test Frontend  - WORK IN PROGRESS Sezione Todo

 - Frameworks:
   - Bootstrap v3.3.5
   - Jquery 1.11.3

## Utilizzo Necessita
- Server Locale  Wamp - Xmamp
- Demo diposnibilie all indirizzo specificato nel file online.txt
- Cors abilitato x CHROME (CHROME PLUGIN)
- IE Cambiare le impostazioni di sicurezza personalizate e consentire il cross origin

### Struttura
- index.html
- style.min.css
            - unifia i segenti files  style.css + responisve.css + col-mix.css 
             - Velocizzare il caricamento della struttura e ridurre le richieste di risorse
- style.css
- parts/maincontent.html   
        - accedi.html     
        - collabora.html    
        - come.html
- js/js/page.js
        - main.js
        - js/site.min   files page.js + main.js  unificati minificati
           - Per velocizzare il caricamento della struttura e ridurre le richieste di risorse
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
- Boostrap  
- Jquery
- Plugins
  - lazyload plugin utlizzato per ottimizzazione del caricamento immagine di sfondo (low-res normal-res)
  - tyepeahed per autosearch plugin per autosearch richiamato

###### Note
- testato su broswer Desktop ie 9 ++ ; Chrome ; Firefox; Safari 5.1 windows
- Mobile  android    4.4.2 broswer stock
- Mobile  andorid  lollipop broswer stock
