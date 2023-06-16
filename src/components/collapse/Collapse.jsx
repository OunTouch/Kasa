import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
                {/*
Cette partie du code affiche le contenu du composant "Collapse" en fonction de la valeur de la variable d'état "toggle". Si "toggle" est évalué à true, la classe CSS "collapse_content" est appliquée à la div, ce qui rend le contenu visible. Si "toggle" est évalué à false, la classe CSS "collapse_content_hidden" est appliquée, ce qui masque le contenu.

Le contenu peut être soit une chaîne de texte simple, soit un tableau d'éléments. Si le contenu est un tableau, il est mappé avec la méthode map pour créer un paragraphe <p> pour chaque élément du tableau. Chaque paragraphe a une clé unique définie par l'index de l'élément dans le tableau.

Voici comment cela fonctionne :

La div a une classe CSS dynamique basée sur la valeur de "toggle". Si "toggle" est évalué à true, la classe "collapse_content" est appliquée, sinon la classe "collapse_content_hidden" est appliquée.
Le contenu est vérifié pour voir s'il s'agit d'un tableau en utilisant Array.isArray(content). Si c'est le cas, cela signifie que le contenu est un tableau d'éléments.
Si le contenu est un tableau, il est mappé avec content.map((item, index) => {...}). Cela itère sur chaque élément du tableau et retourne un paragraphe <p> avec le contenu de l'élément. Chaque paragraphe a une clé unique définie par l'index de l'élément dans le tableau.
Si le contenu n'est pas un tableau, il est simplement rendu tel quel sans aucune modification.
En résumé, cette partie du code affiche le contenu du composant "Collapse" en fonction de la valeur de "toggle". Si "toggle" est vrai, le contenu est affiché, sinon il est masqué. Si le contenu est un tableau, chaque élément du tableau est rendu en tant que paragraphe séparé.
*/}
            </div>
        </>

    )
}

/*
Le code que vous avez fourni est un autre composant React appelé "Collapse" qui utilise un fichier "collapse.scss" pour les styles. Il importe également une image "arrow" à partir d'un chemin d'accès relatif spécifique. Il utilise également le hook useState de React.

Voici une explication du code :

Il importe le fichier "collapse.scss" qui contient les styles pour le composant.
Il importe l'image "arrow" à partir d'un chemin d'accès relatif spécifique. Assurez-vous que le chemin d'accès correspond à la structure de votre projet et que l'image existe à cet emplacement.
Il importe le hook useState de React.
Le composant est défini comme une fonction appelée "Collapse" avec deux propriétés destructurées : "title" et "content".
À l'intérieur du composant, il utilise le hook useState pour définir une variable d'état "toggle" avec une valeur initiale de "false".
Le composant retourne un fragment vide (<>...</>) qui permet de retourner plusieurs éléments sans les encapsuler dans une balise supplémentaire.
À l'intérieur du fragment, il y a une div avec la classe CSS "collapse".
À l'intérieur de la div, il y a une balise <h3> avec la classe CSS "collapse_title". Lorsque cette balise est cliquée, elle appelle une fonction qui met à jour la variable d'état "toggle" pour inverser sa valeur (true devient false, et vice versa).
À l'intérieur de la balise <h3>, il y a le titre passé en tant que propriété "title". Il affiche également une image rendue en tant qu'élément <img> avec la classe CSS "arrow arrow_up" ou "arrow arrow_down" en fonction de la valeur de la variable d'état "toggle". L'image est définie à partir de la variable "arrow".
Après la balise <h3>, il y a une autre div avec la classe CSS "collapse_content" ou "collapse_content_hidden" en fonction de la valeur de la variable d'état "toggle". Cela permet de masquer ou d'afficher le contenu en fonction de l'état du composant.
À l'intérieur de la div "collapse_content", le contenu passé en tant que propriété "content" est rendu. S'il s'agit d'un tableau, chaque élément du tableau est rendu en tant qu'élément <p> avec une clé unique. Sinon, le contenu est rendu directement.
Le composant "Collapse" est exporté en tant que composant par défaut, ce qui permet de l'importer et de l'utiliser dans d'autres parties de l'application.
Assurez-vous d'avoir correctement importé l'image et d'avoir les styles correspondants dans votre fichier "collapse.scss" pour que le composant "Collapse" fonctionne correctement.
*/