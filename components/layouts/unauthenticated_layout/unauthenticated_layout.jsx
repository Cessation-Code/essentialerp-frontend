'use client'

import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

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

UnauthenticatedLayout.propTypes = {
    children: PropTypes.node.isRequired
}
