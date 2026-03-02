import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6"

export const navbarLinks = [
    {
    id: 1,
    title: 'Inicio',
    href: '/',
    },
    {
    id: 2,
    title: 'Productos',
    href: '/Productos',
    },
    {
    id: 1,
    title: 'Sobre nosotros',
    href: '/nosotros',
    },
]

export const socialLinks = [
    {
        id: 1,
        title: 'Facebook',
        href: 'htttps://www.facebook.com',
        icon: <FaFacebookF />
    },
    {
        id: 2,
        title: 'Twitter',
        href: 'htttps://www.twitter.com',
        icon: <FaXTwitter />
    },
    {
        id: 3,
        title: 'Instagram',
        href: 'htttps://www.instagram.com',
        icon: <FaInstagram />
    },
    {
		id: 4,
		title: 'Tiktok',
		href: 'https://www.tiktok.com',
		icon: <FaTiktok />,
    },
]