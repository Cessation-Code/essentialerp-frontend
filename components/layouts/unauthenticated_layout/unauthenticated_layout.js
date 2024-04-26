import React from "react";
import { useEffect } from "react";

export default function UnauthenticatedLayout({ children }) {
    
    const token = localStorage.getItem('token');
    useEffect(()=>{
        if(!token)
            localStorage.setItem('token', "")
    })

    return (
        <div>{children}</div>
  );
}
