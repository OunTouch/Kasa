import './carousel.scss'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'

export default function Slider({imageSlider}) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${imageSlider[currentIndex]})`}} className='carousel'>
            {imageSlider.length > 1 && 
                <>
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>
                </>
            } 
        </section>
    )
}

/*
Le code que vous avez fourni est un autre composant React appelé "Slider" qui utilise un fichier "carousel.scss" pour les styles. Il importe également deux images, "ArrowRight" et "ArrowLeft", à partir de chemins d'accès relatifs spécifiques. Il utilise également le hook useState de React.

Voici une explication du code :

Il importe le fichier "carousel.scss" qui contient les styles pour le composant.
Il importe les images "ArrowRight" et "ArrowLeft" à partir de chemins d'accès relatifs spécifiques. Assurez-vous que les chemins d'accès correspondent à la structure de votre projet et que les images existent à ces emplacements.
Il importe le hook useState de React.
Le composant est défini comme une fonction appelée "Slider" avec une propriété "imageSlider" qui représente les images du carrousel.
À l'intérieur du composant, il utilise le hook useState pour définir une variable d'état "currentIndex" avec une valeur initiale de 0.
Il définit deux fonctions, "nextSlide" et "prevSlide", qui mettent à jour l'index actuel ("currentIndex") pour afficher le prochain ou le précédent élément du carrousel. Si l'index atteint la fin ou le début du tableau "imageSlider", il revient respectivement au début ou à la fin pour créer une boucle dans le carrousel.
Le composant retourne une section avec un style inline qui définit l'image de fond en utilisant l'URL de l'élément actuel du tableau "imageSlider". Cela permet de changer l'image de fond en fonction de l'élément actuel du carrousel.
Si le tableau "imageSlider" contient plus d'une image, il affiche les flèches de navigation, la position actuelle du diaporama et la taille totale du diaporama :
Les images des flèches de navigation sont rendues en tant qu'éléments <img> avec les classes CSS "carousel_arrow carousel_arrow_right" et "carousel_arrow carousel_arrow_left" respectivement. Les images sont définies à partir des variables "ArrowRight" et "ArrowLeft".
Un texte affichant la position actuelle du diaporama est rendu à l'aide de l'élément <p> avec la classe CSS "slideCount". Il affiche l'index actuel du carrousel plus un "/" plus la taille totale du carrousel.
Les images des flèches de navigation et le texte de la position actuelle sont rendus uniquement si le tableau "imageSlider" contient plus d'une image.
Le composant "Slider" est exporté en tant que composant par défaut, ce qui permet de l'importer et de l'utiliser dans d'autres parties de l'application.
Assurez-vous d'avoir correctement importé les images et d'avoir les styles correspondants dans votre fichier "carousel.scss" pour que le composant "Slider" fonctionne correctement.
*/