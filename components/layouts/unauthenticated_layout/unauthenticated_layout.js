import React from "react";
import { useEffect } from "react";

export default function UnauthenticatedLayout({ children }) {
    
    // checks if the localStorage item indexed token is avaialable, if not; instantiates it
    useEffect(()=>{
        if(!localStorage.getItem('token'))localStorage.setItem('token', "")
    })

    return (
        <div>{children}</div>
  );
}
