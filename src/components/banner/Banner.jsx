import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}
/*
Le code que vous avez fourni est un composant React appelé "Banner" qui utilise des modules CSS pour styliser le composant. Il utilise également React Router ainsi que les hooks useState et useEffect de React.

Voici une explication de ce que fait le code :

Il importe le fichier "banner.scss", qui contient les styles du composant.
Il importe le hook "useLocation" de la bibliothèque "react-router-dom", qui permet d'accéder à l'emplacement URL actuel.
Il importe les hooks "useEffect" et "useState" de React.
Le composant est défini comme une fonction appelée "Banner".
À l'intérieur du composant, il y a une variable d'état appelée "aboutPage" initialisée à "false" à l'aide du hook useState. Cette variable sera utilisée pour déterminer si la page actuelle est la page "/about".
Le hook "useLocation" est appelé pour obtenir l'objet de localisation actuel.
Le hook "useEffect" est utilisé pour exécuter un effet lorsque le composant est monté (premier rendu). Dans ce cas, il vérifie si le chemin d'accès de l'emplacement est "/about" et met à jour la variable "aboutPage" à "true" si c'est le cas.
Le composant retourne une section avec la classe CSS "banner_about" si la variable "aboutPage" est vraie, sinon elle utilise la classe CSS "banner". Cela permet de choisir le style du composant en fonction de la page actuelle.
Si la variable "aboutPage" est fausse, un élément <p> avec le texte "Chez vous, partout et ailleurs" est rendu à l'intérieur de la section. Sinon, rien n'est rendu à l'intérieur de la section.
*/