import { Drawer } from "@mui/joy"
import { Box } from "@mui/material"
import type { StaticImageData } from "next/image"
import Image from "next/image"
import Link from "next/link"
import type { FC } from "react"
import { IoClose } from "react-icons/io5"
import { RiTwitterXLine } from "react-icons/ri"
import { SlSocialLinkedin } from "react-icons/sl"

type TMemberDetailDrawerProps = {
    photo: StaticImageData
    name: string
    role: string
    linkedin: string
    description: string[]
    isOpen: boolean
    handleClose: () => void
}

export const MemberDetailDrawer: FC<TMemberDetailDrawerProps> = (
    {
        photo,
        name,
        role,
        linkedin,
        description,
        isOpen,
        handleClose
    }
) => {

    return (
        <Drawer
          anchor={"bottom"}
          open={isOpen}
            onClose={handleClose}
            size={'lg'}
            className={'member-detail-drawer'}
        >
            <span className="close-icon" onClick={handleClose}><IoClose/></span>
            <Box className={'member-detail-container'}>
                <Image className="member-photo" src={photo} alt={name} width={160} height={160} />
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <Box className={'description-container'}>
                    {description.map((desc, index) => (
                        <p key={index}>{desc}</p>
                    ))}
                </Box>
                 <Box className={'socials'}>
                <Link href={linkedin} target="_blank">
                    <SlSocialLinkedin />
                </Link>
            </Box>
          </Box>
        </Drawer>
    )
}