import './card.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}

/*

Le code que vous avez fourni est un autre composant React appelé "Card". Il utilise un fichier "card.scss" pour les styles et importe le composant "Link" de "react-router-dom".

Voici une explication du code :

Il importe le fichier "card.scss" qui contient les styles pour le composant.
Il importe le composant "Link" de la bibliothèque "react-router-dom". Ce composant est utilisé pour créer un lien qui redirige vers une autre page de l'application.
Le composant est défini comme une fonction appelée "Card" avec trois paramètres destructurés : "id", "title" et "cover".
À l'intérieur du composant, il retourne un composant "Link" avec les propriétés suivantes :
"to" : l'URL de destination vers laquelle le lien redirige. Dans ce cas, l'URL est générée en utilisant l'ID de l'élément et est de la forme "/accomodation/{id}".
"className" : la classe CSS "gallery_card" qui est appliquée au lien.
À l'intérieur du composant "Link", il y a une balise <img> qui affiche l'image de couverture de l'élément. La propriété "src" est définie avec la valeur de la variable "cover", et la propriété "alt" est définie avec la valeur de la variable "title". Cela permet d'afficher une image et de fournir un texte alternatif pour l'accessibilité.
Après l'image, il y a une balise <h3> qui affiche le titre de l'élément en utilisant la valeur de la variable "title".
Le composant "Card" est exporté en tant que composant par défaut, ce qui permet de l'importer et de l'utiliser dans d'autres parties de l'application.
*/