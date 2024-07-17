import Contactus from "../contactus/contactus";
import Home from '../home/home';
import Learning from '../learning/learning';
import Projects from '../projects/projects';

import Profile from "../userProfile/Profile";
interface NavLink {
    title: string;
    url: string;
    cName: string;
    icon: string;
   component?: React.ComponentType;
}



export const navlinks: NavLink[] = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: "fa-solid fa-house-user",
        component: Home
    },
   
    {
        title: "Projects",
        url: "/projects",
        cName: "nav-links",
        icon: "fa-solid fa-briefcase",
        component: Projects
    },
    {
        title: "Learn",
        url: "/learn",
        cName: "nav-links",
        icon: "fa-solid fa-laptop-code",
        component: Learning
    },
    {
        title: "About us",
        url: "/about",
        cName: "nav-links",
        icon: "fa-solid fa-address-book",
        component: Contactus
    },
  /*  {
        title: "Sign Up",
        url: "/login",
        cName: "nav-links-mobile",
        icon: "fa-solid fa-user-plus",
        component:Login
    }

    */
    {
        title: "Profile",
        url: "/profile",
        cName: "nav-links",
        icon: "fa-solid fa-user",
        component: Profile
    }
];