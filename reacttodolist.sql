-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Dic 27, 2024 alle 15:22
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reacttodolist`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `tasks`
--

CREATE TABLE `tasks` (
  `id_task` int(11) NOT NULL,
  `titolo` varchar(50) NOT NULL,
  `argomento` varchar(500) DEFAULT NULL,
  `id_utente` int(11) DEFAULT NULL,
  `stato` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tasks`
--

INSERT INTO `tasks` (`id_task`, `titolo`, `argomento`, `id_utente`, `stato`) VALUES
(13, 'prova task 4', 'prova update', 2, 1),
(15, 'prova status aggiornato', 'prova prova prova', 2, 1),
(17, 'a', 'a', 2, 1),
(19, 'b', 'b', 2, 0),
(21, 'c', 'c', 2, 0);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `id_utente` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cognome` varchar(50) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `permesso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`id_utente`, `nome`, `cognome`, `username`, `email`, `password`, `permesso`) VALUES
(2, 'Carmine', 'Sacco', 'username', 'provaemail@gmail.com', '1234', 0),
(4, 'admin', 'admin', 'admin', 'provaemaiAdminl@gmail.com', '4321', 1),
(5, 'Maria', 'Greco', 'maria.greco55', 'maria.greco60@example.com', '4k^J', 0),
(6, 'Giulia', 'Ricci', 'giulia.ricci75', 'giulia.ricci84@example.com', 'tBbm', 0),
(7, 'Simone', 'Marini', 'simone.marini54', 'simone.marini77@example.com', 'AsOA', 0),
(8, 'Elisa', 'Greco', 'elisa.greco28', 'elisa.greco42@example.com', '9!Sa', 0),
(9, 'Davide', 'Galli', 'davide.galli96', 'davide.galli51@example.com', 'QdzD', 0),
(10, 'Luca', 'Ricci', 'luca.ricci13', 'luca.ricci98@example.com', 'X*(4', 0),
(11, 'Giulia', 'Conti', 'giulia.conti48', 'giulia.conti69@example.com', '=#Yc', 0),
(12, 'Francesco', 'Testa', 'francesco.testa61', 'francesco.testa62@example.com', '%ScH', 0),
(13, 'Davide', 'Galli', 'davide.galli2', 'davide.galli53@example.com', 'o()r', 0),
(14, 'Francesco', 'Leoni', 'francesco.leoni91', 'francesco.leoni78@example.com', 'Cuqc', 0),
(15, 'Giulia', 'Marini', 'giulia.marini89', 'giulia.marini2@example.com', '5OXs', 0),
(16, 'Davide', 'Bianchi', 'davide.bianchi11', 'davide.bianchi21@example.com', 'Ps--', 0),
(17, 'Giulia', 'Rossi', 'giulia.rossi77', 'giulia.rossi58@example.com', '3StZ', 0),
(18, 'Davide', 'Leoni', 'davide.leoni94', 'davide.leoni13@example.com', 'L#vQ', 0),
(19, 'Marco', 'Testa', 'marco.testa92', 'marco.testa55@example.com', '8$mb', 0),
(20, 'Simone', 'Ricci', 'simone.ricci92', 'simone.ricci5@example.com', '3!E!', 0),
(21, 'Maria', 'Leoni', 'maria.leoni48', 'maria.leoni3@example.com', 'kDrT', 0),
(22, 'Elisa', 'Greco', 'elisa.greco15', 'elisa.greco98@example.com', '04)W', 0),
(23, 'Marco', 'Testa', 'marco.testa13', 'marco.testa40@example.com', 'EWA5', 0),
(24, 'Elisa', 'Esposito', 'elisa.esposito98', 'elisa.esposito22@example.com', 'y605', 0);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id_task`),
  ADD KEY `id_utente` (`id_utente`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`id_utente`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id_task` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `id_utente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`id_utente`) REFERENCES `utenti` (`id_utente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
