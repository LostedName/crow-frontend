import { AboutPage, LoginPage, MainPage, PrivacyPage, RegisterPage, TermsPage } from "./pages";
import { ElementRoutes } from "./types/routes";

const routes: ElementRoutes = [
    {
        path:"/registration",
        element: RegisterPage,
    },
    {
        path:"/login",
        element: LoginPage,
    },
    {
        path:"/about",
        element: AboutPage, 
    },
    {
        path:"/privacy",
        element: PrivacyPage, 
    },
    {
        path:"/terms",
        element: TermsPage, 
    },
    {
        path:"/",
        element: MainPage, 
    },
];

export default routes;