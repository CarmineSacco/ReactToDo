# Todo API React Project

Un'applicazione per la gestione delle attività con funzionalità per amministratori e utenti.

- **Admin**: possono creare, modificare ed eliminare task assegnati agli utenti.
- **Utenti**: possono registrarsi, effettuare il login, visualizzare i propri task e cambiarne lo stato da "Da completare" a "Completato".

---

## Tecnologie utilizzate

- **Frontend**: React  
  Utilizzato per creare un'interfaccia utente dinamica e reattiva. Grazie a React, gli utenti possono interagire facilmente con l'applicazione, visualizzare e aggiornare i task in tempo reale.
- **Backend**: PHP  
  Gestisce la logica del server, le operazioni del database e le API per la comunicazione con il frontend.
- **Database**: MySQL  
  Memorizza i dati degli utenti e dei task. È gestito tramite **XAMPP**, che fornisce un ambiente di sviluppo locale completo.
- **Node.js**:  
  Utilizzato per gestire gli strumenti di sviluppo, come il server di sviluppo React e la gestione delle dipendenze del progetto.


## Requisiti

Assicurati di avere installato:

- **XAMPP**: per il server Apache e il database MySQL.
- **Node.js**: per gestire e avviare il frontend e gli script.
- **Git**: per clonare il repository del progetto.

---

## Installazione

Segui i passaggi indicati per configurare e avviare il progetto:

### 1. Configurazione del database

1. Avvia **XAMPP** e attiva il server **Apache** e **MySQL**.
2. Apri **phpMyAdmin** dal pannello di controllo di XAMPP.
3. Importa il file del database fornito (`reacttodo.sql`):
   - Vai su **phpMyAdmin**.
   - Usa l'opzione **Importa** per caricare il file `reacttodo.sql`.

### 2. Posizionare i file backend

- Sposta la cartella `todoApi` nella directory `htdocs` di XAMPP.  
  Il percorso tipico su Windows è:
  ```plaintext
  C:/xampp/htdocs/todoApi
  ```
  ### 3. Configurazione progetto

- Clonare la repository.  
    
  ```plaintext
  git clone https://github.com/CarmineSacco/ReactToDo.git
   ```
- Installazione dipendenze.
  ```plaintext
     npm i
   ```
- Avviare il server di sviluppo
  ``` plaintext
  npm run dev

  ```

Contatti
Per eventuali domande o segnalazioni, contatta:
Nome: Carmine Sacco
Email: saccocarmine2004@libero.it
