import './navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const currentRoute = window.location.pathname;

    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/Kasa/' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/Kasa/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link  to='/about'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

/*
Le code que vous avez fourni est le composant React "Navbar" qui utilise un fichier "navbar.scss" pour les styles. Il importe également le composant Link de react-router-dom pour gérer la navigation entre les différentes pages.

Voici une explication du code :

Il importe le fichier "navbar.scss" qui contient les styles pour le composant.
Il importe le composant Link de react-router-dom qui sera utilisé pour créer les liens de navigation.
Le composant est défini comme une fonction appelée "Navbar".
À l'intérieur du composant, il utilise la variable "currentRoute" pour stocker le chemin d'accès actuel de la fenêtre en utilisant window.location.pathname.
Le composant retourne un élément <nav> avec la classe CSS "nav".
À l'intérieur du <nav>, il y a une liste non ordonnée <ul> avec la classe CSS "nav_list".
Dans la liste, il y a deux éléments <li> qui représentent les liens de navigation :
Chaque <li> a une classe CSS dynamique basée sur la valeur de "currentRoute". Si le chemin d'accès actuel correspond au chemin d'accès spécifié dans le <Link>, la classe "nav_list_item_active" est appliquée, sinon la classe "nav_list_item" est appliquée.
Le premier <li> correspond à la page d'accueil ("/Kasa/"). Il contient un <Link> qui redirige vers cette page et affiche le texte "Accueil".
Le deuxième <li> correspond à la page "about". Il contient un <Link> qui redirige vers cette page et affiche le texte "A propos".
Le composant "Navbar" est exporté en tant que composant par défaut, ce qui permet de l'importer et de l'utiliser dans d'autres parties de l'application.
Assurez-vous d'avoir correctement importé les styles correspondants dans votre fichier "navbar.scss" pour que le composant "Navbar" soit affiché correctement. De plus, assurez-vous que le composant "Navbar" est inclus dans le routage de votre application afin que les liens de navigation fonctionnent correctement.
*/
