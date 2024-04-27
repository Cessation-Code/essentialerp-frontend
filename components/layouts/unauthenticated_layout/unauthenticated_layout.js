import React from "react";
import { useEffect } from "react";

export default function UnauthenticatedLayout({ children }) {
    
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(!token)
            localStorage.setItem('token', "")
    })

    return (
        <div>{children}</div>
  );
}
