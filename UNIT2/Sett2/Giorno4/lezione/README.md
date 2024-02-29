1. CARICAMENTO DELLA FINESTRA
## caricare elenco regioni nella select
## disabilitare la select delle province

2. EVENTHANDLER
## scelta della regione
# SE viene scelta la option vuota
1. svuotare la select delle province
2. disabilitare la select delle province
3. bloccare l'esecuzione della funzione
# ELSE
1. riattivare la select delle province
2. caricare le select delle province della regione selezionata

3. SCELTA DELLA PROVINCIA
# SE viene scelta la option vuota
1. nascondere il div della stampa
2. bloccare l'esecuzione della funzione
# ELSE
1. pescare la provincia scelta
2. pescare l'immagine dello stemma della regione
3. stampare nome regione, stemma regione, nome provincia, stemma provincia

4. STAMPA
1. riattivare il div della stampa
2. leggere l'array delle province della regione
3. pescare la provincia scelta
4. pescare l'immagine dello stemma della regione
5. stampare il tutto