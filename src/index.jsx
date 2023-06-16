import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App  />
	</React.StrictMode>
);
/*
Ce code utilise les bibliothèques React et ReactDOM pour rendre l'application React dans un élément DOM avec l'ID 'root'.

Voici ce que fait le code :

Les bibliothèques React et ReactDOM sont importées.

La fonction ReactDOM.createRoot est appelée avec document.getElementById('root') en tant qu'argument pour créer une racine de rendu dans l'élément DOM avec l'ID 'root'. Cela indique à React où il doit rendre l'application.

La méthode root.render(...) est appelée pour effectuer le rendu de l'application React. L'élément racine de l'application est entouré de <React.StrictMode>. Le composant App est rendu à l'intérieur de <React.StrictMode> en tant que composant principal de l'application.

L'utilisation de <React.StrictMode> est une fonctionnalité de développement de React qui active des vérifications supplémentaires et des avertissements stricts pour aider à détecter les problèmes potentiels dans l'application.

En résumé, le code crée une racine de rendu avec ReactDOM.createRoot et rend le composant App à l'intérieur de <React.StrictMode>, permettant ainsi à l'application React d'être rendue dans l'élément DOM avec l'ID 'root'.*/
