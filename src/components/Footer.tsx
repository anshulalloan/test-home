'use client';
import { Box, useMediaQuery } from "@mui/material"
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const Footer = () => {
    const shouldBreak = useMediaQuery('(max-width: 385px)')
    return (
        <Box className={'footer'}>
            <Box className={'footer__content'}>
                <p>All rights reserved &#169; {(new Date()).getFullYear()} alloan.ai, {shouldBreak ? <br/>: null}Pennsylvania, USA</p>
            </Box>
                <Box className={'footer__socials'}>
                    <Link href={'/privacy'}>Privacy Policy (Updated 02/2024)</Link>
                {/* <FaXTwitter /> */}
                </Box>
        </Box>
    )
}