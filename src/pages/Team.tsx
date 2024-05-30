'use client';
import { MemberDetailDrawer } from "@/components/team/MemberDetailDrawer";
import { Box } from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState, type FC } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { advisors, founders } from "../../public/data/members/members";


type TMemberCardProps = {
    photo: StaticImageData
    detailPhoto: StaticImageData
    name: string
    role: string
    linkedin: string
    description: string[]
}
const MemberCard: FC<TMemberCardProps> = ({
    photo,
    detailPhoto,
    name,
    role,
    linkedin,
    description
}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true)
    }
    const handleDrawerClose = () => {
        setIsDrawerOpen(false)
    }
    return (
        <Box className={'member-card'}>
            <Box className={'photo'}>
                <Image className="member-photo" src={photo} alt={name} width={320} height={230} />
            </Box>
            <Box className={'info'}>
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <p className="description" onClick={handleDrawerOpen}>{description.join(" ").slice(0, 190)}... <span onClick={handleDrawerOpen}>Read More</span> </p>
            </Box>
            <Box className={'socials'}>
                <Link href={linkedin} target="_blank">
                    <SlSocialLinkedin />
                </Link>
            </Box>
            <MemberDetailDrawer 
                photo={detailPhoto}
                name={name}
                role={role}
                linkedin={linkedin}
                description={description}
                isOpen={isDrawerOpen}
                handleClose={handleDrawerClose}
            />
        </Box>
    )
}

const Team = () => {
    return (
        <Box className={'our-team-page'}
        >
            <Box className={'our-team-page__content'}>
                <h2>Meet the <br/>Co-founders</h2>
                <Box className={'member-cards-containers'}>
                    {founders.map((member, index) => (
                        <MemberCard
                            key={index}
                            photo={member.photo}
                            detailPhoto={member.squarePhoto}
                            name={member.name}
                            role={member.role}
                            linkedin={member.linkedIn}
                            description={member.description}
                        />
                    ))}
                </Box>
            </Box>
            <Box className={'our-team-page__content'}>
                <h2>Our Advisors</h2>
                <Box className={'member-cards-containers'}>
                    {advisors.map((member, index) => (
                        <MemberCard
                            key={index}
                            photo={member.photo}
                            detailPhoto={member.squarePhoto}
                            name={member.name}
                            role={member.role}
                            linkedin={member.linkedIn}
                            description={member.description}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Team;
