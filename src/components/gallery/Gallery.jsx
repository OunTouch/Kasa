import './gallery.scss'
import datas from '../../data/data'
import Card from '../card/Card'

export default function Gallery() {

    return (
        <main className='home_gallery'>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

/*

Le code que vous avez fourni est un autre composant React appelé "Gallery". Il utilise un fichier "gallery.scss" pour les styles, importe des données depuis un fichier "data.js" et utilise également un composant appelé "Card".

Voici une explication du code :

Il importe le fichier "gallery.scss" qui contient les styles pour le composant.
Il importe les données depuis le fichier "data.js" en utilisant une syntaxe relative pour accéder au dossier parent et trouver le fichier.
Il importe le composant "Card" depuis un fichier "Card.js" ou un fichier de module qui exporte le composant.
Le composant est défini comme une fonction appelée "Gallery".
À l'intérieur du composant, il retourne une balise <main> avec la classe CSS "home_gallery".
Il utilise la méthode map pour itérer sur le tableau "datas" (les données importées depuis le fichier "data.js").
Pour chaque élément du tableau "datas", il rend un composant "Card" avec les propriétés suivantes :
"key" : l'identifiant unique de chaque élément dans le tableau, utilisé pour aider React à optimiser les performances lors de la rendu de la liste.
"id" : l'identifiant de l'élément.
"title" : le titre de l'élément.
"cover" : la couverture (image ou autre contenu visuel) de l'élément.
Le composant "Gallery" est exporté en tant que composant par défaut, ce qui permet de l'importer et de l'utiliser dans d'autres parties de l'application.
Note : Les chemins d'accès relatifs aux fichiers peuvent varier en fonction de l'organisation de votre projet. Assurez-vous que les chemins d'accès correspondent à la structure de votre projet.
*/