"use client"
import { Box } from "@mui/material"
import Image from "next/image"
import { FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import logo from "./../../public/logos/alloan_logo.svg";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoMenu } from "react-icons/io5"
import { useState } from "react"
import { Drawer } from "@mui/joy"


const allPaths = [{
    path: '/',
    name: 'Home'
}, {
    path: '/team',
    name: 'Our Team'
    }]

    const linkedIn = 'https://www.linkedin.com/company/alloan-ai'


export const Navigation = () => {

    const pathname = usePathname()

    console.log(pathname)

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuOpen = () => {
        setIsMenuOpen(true)
    }

    const handleMenuClose = () => {
        setIsMenuOpen(false)
    }


    return (
        <Box className={'navigation'}>
            <Link href={'/'}>
            <Image
                className="navigation__logo"
                src={logo}
                alt={'Logo'}
                width={100}
                height={100}
                />
            </Link>
            <Box className={'navigation__links'}>
                {allPaths.map((path, index) => (
                    <Link className={`link-item ${pathname === path.path ? 'active' : ''
                    }`} key={index} href={path.path}>{path.name}</Link>
                ))}
                </Box>
            <Box className={'navigation__icons'}>
                <Link href={linkedIn} target="_blank">

                        <FaLinkedinIn />
                        </Link>
            </Box>
            <IoMenu className="navigation__menu" onClick={handleMenuOpen} />
            <Drawer open={isMenuOpen} onClose={handleMenuClose} anchor={'right'} className={'navigation__mobile-menu'}>
                <Box className={'mobile-menu-container'}>
                    <Image
                className="navigation__logo mobile-logo"
                src={logo}
                alt={'Logo'}
                width={100}
                height={100}
            />
            <Box className={'mobile-links'}>
                {allPaths.map((path, index) => (
                    <Link className={`link-item ${pathname === path.path ? 'active' : ''
                    }`} key={index} href={path.path}>{path.name}</Link>
                ))}
                </Box>
                    <Box className={'mobile-icons'}>
                        <Link href={linkedIn} target="_blank">

                        <FaLinkedinIn />
                        </Link>
            </Box>
                </Box>

            </Drawer>
        </Box>
    )
}