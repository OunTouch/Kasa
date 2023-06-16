import './about.scss';
import Header from "../../components/header/Header";
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';

export default function About() {

	const aboutDatas = [
		{
			"id": "1",
			"title": "Fiabilité",
			"content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "2",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "3",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "4",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

	return (
		<div>
			<Header />
			<Banner />
			<main className='about_main'>
				{aboutDatas.map(data => {
					return (
						<div key={data.id} className="about_main_collapse">
							<Collapse style={{margin:'30px 0'}}  title={data.title} content={data.content} />
						</div>
					)}
				)}
			</main>
			<Footer />
		</div>
	)
}
/*

Le code que vous avez fourni est le composant "About" qui utilise un fichier "about.scss" pour les styles. Il importe également plusieurs autres composants tels que "Header", "Banner", "Collapse" et "Footer".

Voici une explication du code :

Il importe le fichier "about.scss" qui contient les styles pour le composant.
Il importe les composants "Header", "Banner", "Collapse" et "Footer" qui seront utilisés dans le composant "About".
Le composant est défini comme une fonction appelée "About".
À l'intérieur du composant, il définit un tableau "aboutDatas" qui contient les données à afficher dans les composants "Collapse". Chaque élément de "aboutDatas" a une propriété "id", "title" et "content".
Le composant retourne une structure HTML qui comprend :
Le composant "Header".
Le composant "Banner".
Une balise <main> avec la classe CSS "about_main".
À l'intérieur de la balise <main>, il y a une boucle aboutDatas.map() qui itère sur chaque élément de "aboutDatas" et retourne un div avec la classe CSS "about_main_collapse". À l'intérieur de ce div, le composant "Collapse" est utilisé avec les propriétés "title" et "content" extraites de chaque élément de "aboutDatas". Chaque "Collapse" est entouré d'un div pour ajouter une marge de 30 pixels en haut et en bas.
Le composant "Footer".
Le composant "About" est exporté en tant que composant par défaut, ce qui permet de l'importer et de l'utiliser dans d'autres parties de l'application.
*/