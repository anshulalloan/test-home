import { Box } from "@mui/material"
import { useState, type FC, use, useEffect } from "react"
import { MdClose } from "react-icons/md"


export type ToasterProps = {
    show: boolean
    message: string
    type: 'success' | 'error' | 'warning'
}


export const Toaster: FC<ToasterProps> = ({
    show,
    message,
    type
}) => {
    const [trigger, setTrigger] = useState(false);
    const showToast = () => {
        setTrigger(true);
        setTimeout(() => {
            setTrigger(false);
        }, 3000);
    }
    useEffect(() => { 
        if (show) {
            showToast();
        }
    }, [message, type, show]);
    return (
        <Box className={`toaster toaster-type-${type} ${trigger ? 'show' : 'hide'}`}>
            {/* <MdClose className="close" onClick={()=>setShow(false)} /> */}
            <p> {message} </p>
        </Box>
    )
}