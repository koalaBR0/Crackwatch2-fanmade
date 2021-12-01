-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Nov-2021 às 23:04
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_cmd`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `img` text NOT NULL,
  `nome` varchar(100) NOT NULL,
  `lanc` varchar(10) NOT NULL,
  `crack` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `game`
--

INSERT INTO `game` (`id`, `img`, `nome`, `lanc`, `crack`) VALUES
(1, 'https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc3/GTA_6_Release_Rockstar_Games.jpg', 'GTA 6', '2077-09-27', 0),
(2, 'https://images.greenmangaming.com/b1277771ca824a258bf1a80423282f01/05d0f66868cb475992e2e65b14ebbf98.jpg', 'Battlefield 2042', '2021-11-19', 0),
(3, 'https://xboxplay.games/uploadStream/12245.jpg', 'Watch Dogs Legion', '2020-10-29', 0),
(4, 'https://theclutch.com.br/wp-content/uploads/2020/12/ruined-king-min.jpg', 'ruined king', '2021-11-17', 1),
(5, 'https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Landscape_2560x1440-2560x1440-827a9d1823ad230a0ea5a2efc7936370.jpg', 'Far cry 6', '2021-10-06', 0),
(6, 'https://cdn2.unrealengine.com/egs-riseofthetombraider20yearcelebration-crystaldynamics-g1c-00-1920x1080-80172a495f14.jpg?h=720&resize=1&w=1280', 'Rise Of The Tomb Raider', '2016-02-09', 1),
(8, 'https://i.ytimg.com/vi/8qWFOmk0AtU/maxresdefault.jpg', 'Marvel\'s Avengers', '2020-09-04', 1),
(9, 'https://cdn1.epicgames.com/offer/2a09fb19b47f46dfb11ebd382f132a8f/EGS_MarvelsGuardiansoftheGalaxy_EidosMontral_S1_2560x1440-e5016495b5181014bf291e4cb65fffa3?h=270&resize=1&w=480', 'Guardians of the Galaxy', '2021-10-26', 0);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
