import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/*
Ce code crée un objet router utilisant le composant createBrowserRouter. L'objet router est configuré avec un ensemble de routes qui correspondent à des chemins d'URL spécifiques et à des éléments React associés.

Voici ce que signifie chaque élément dans la configuration des routes :

{ path: "/Kasa/", element: <Home /> } : Cette route est associée au chemin d'URL "/Kasa/" et affiche le composant Home lorsqu'elle est rendue.

{ path: "/accomodation/:id", element: <Accomodation /> } : Cette route est associée à un chemin d'URL dynamique "/accomodation/:id" où ":id" représente un paramètre variable. Lorsque cette route est atteinte avec un ID spécifique, le composant Accomodation est rendu. Par exemple, "/accomodation/123" afficherait le composant Accomodation avec l'ID 123.

{ path: '/about', element: <About /> } : Cette route est associée au chemin d'URL "/about" et affiche le composant About lorsqu'elle est rendue.

{ path: "*", element: <NotFound /> } : Cette route est une correspondance générique qui capture tous les chemins d'URL qui n'ont pas été définis précédemment. Elle affiche le composant NotFound lorsqu'elle est rendue, indiquant une page non trouvée ou une erreur 404.

En résumé, le code configure un système de routage qui associe certains composants React à des chemins d'URL spécifiques, permettant ainsi à l'application de naviguer vers différentes pages en fonction de l'URL demandée.
*/
const router = createBrowserRouter([
	{
		path: "/Kasa/",
		element: <Home />
	},
	{
		path: "/accomodation/:id",
		element: <Accomodation />
	},
	{
		path: '/about',
		element: <About />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;