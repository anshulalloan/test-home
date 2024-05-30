"use client";

import { Button } from "@mui/joy";
import { Box } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";


const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const requestUrl = 'https://prod-12.eastus2.logic.azure.com:443/workflows/d00aa12406914e5888563704de8eaabe/triggers/When_a_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=6sbLdbzpwTVql394FJ6HCIxudNDCKbjzk_Hx_N94cfU'

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleEmailSubmit = async () => {
        setLoading(true);
        console.log(email);
        if (email.trim() === '') {
            toast("Oops! Please enter your email and try again", {
                type: 'error',
                theme: 'dark',
                hideProgressBar: true,
            })
            setLoading(false);
        }
        else if (!emailRegex.test(email)) {
            toast("Oops! Please verify your email and try again", {
                type: 'error',
                theme: 'dark',
                hideProgressBar: true,
            })
            setLoading(false);
            return;
        } else {
            try {
            const value = {
                email,
                time: new Date().toISOString(),
            }
            const jsonValue = JSON.stringify(value);
            jsonValue.replace(/"/g, '\\"')
            const response = await fetch(requestUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: jsonValue,
                }),
            });
            console.log({ response });
            if(!response.ok) {
                throw new Error('Oops! Please verify your email and try again');
            }
            else {
                setEmail('');
                toast("All set! You'll be the first to know.", {
                    type: 'success',
                    theme: 'dark',
                    hideProgressBar: true,
            })
            }
        }
        catch (error) {
            console.log('Error submitting email');
            console.log(error);
            toast("Oops! Please verify your email and try again", {
                type: 'error',
            })
        } finally {
            setLoading(false);
        }
            
        }
    }




    return (
        <Box className={'home'}
          
        >
            <Box className={'home__launch'}>
                <span>
                🚀
                </span>
                <span>Launching Soon</span>
            </Box>
            <h2 className="main-heading">
                A Virtual Assistant for Asset-Based Finance Investors.
            </h2>
            {/* <p className="para">
                A virtual investment analyst that does 95% of the work of a lending markets expert. Not just analytics, solutions, or insights but an actual AI investment analyst.
            </p> */}
            <Box className="email-field">
            <input type="email" placeholder="enter your email" value={email} onChange={handleEmailChange} />
                <Button color="primary" onClick={handleEmailSubmit} loading={loading}>
                    Get notified 
                </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
