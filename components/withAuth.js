import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const withAuth = (WrappedComponent) => {

    const Wrapper = (props) => {

        const [token, setToken] = useState("")
        const router = useRouter()

        useEffect(() => {
            const data = localStorage.getItem('token')
            setToken(data)
            if (!data) { router.replace('/login') }
        })

        if(token){
            return(<WrappedComponent {...props} />)
        }else{
            return null
        }
    };


    return Wrapper;
};

export default withAuth;
