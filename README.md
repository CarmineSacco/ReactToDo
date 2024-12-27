Todo API React Project
Un'applicazione per la gestione delle attività con funzionalità per amministratori e utenti.
Admin: possono creare, modificare ed eliminare task assegnati agli utenti.
Utenti: possono registrarsi, effettuare il login, visualizzare i propri task e cambiarne lo stato da "Da completare" a "Completato".
Tecnologie utilizzate
Backend: PHP
Database: MySQL (gestito tramite XAMPP)
Frontend: Node.js (con strumenti di sviluppo integrati)
Requisiti
Assicurati di avere installato:

XAMPP: per il server Apache e il database MySQL.
Node.js: per gestire e avviare il frontend e gli script.
Git: per clonare il repository del progetto.
Installazione
Segui i passaggi indicati per configurare e avviare il progetto:

1. Configurazione del database
   Avvia XAMPP e attiva il server Apache e MySQL.
   Apri phpMyAdmin dal pannello di controllo di XAMPP.

- Importa il file del database fornito (reacttodo.sql) nel tuo server MySQL:
  Vai su phpMyAdmin.

Usa l'opzione Importa per caricare il file reacttodo.sql

2. Posizionare i file backend
   Sposta la cartella todoApi nella directory htdocs di XAMPP.
   Il percorso tipico su Windows è:
   C:/xampp/htdocs/todoApi
3. Configurare il progetto
   Clona il repository nella tua macchina locale:

git clone <https://github.com/CarmineSacco/ReactToDo.git>
Accedi alla directory del progetto ,
Installa le dipendenze del progetto:

- npm install

4. Avviare il progetto
   Avvia il server di sviluppo:
   npm run dev

Funzionalità principali :

- Utenti
  Registrazione e login.
  Visualizzazione della lista dei propri task.
  Cambiamento dello stato dei task da "Da completare" a "Completato".
- Admin
  Creazione di nuovi task.
  Modifica dei task esistenti.
  Eliminazione di task.

Contatti
Per eventuali domande o segnalazioni, contatta:
Nome: Carmine Sacco
Email: saccocarmine2004@libero.it
