import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from './layouts/authenticated_layout/authenticated_layout';
import LoadingSpinner from './loadingSpinner';
import PropTypes from 'prop-types';

export default function withAuth(WrappedComponent){

    const Wrapper = () => {

        const [token, setToken] = useState("")
        const [employee, setEmployee] = useState(null)
        const [navUsername, setNavUsername] = useState("")
        const [navOrganisation, setNavOrganisation] = useState("")
        const router = useRouter()
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

        async function fetchEmployee(data) {
            try{
                let response = await fetch(`${baseUrl}/api/v1/employee/getEmployee`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${data}`
                    }
                });
                if (response.status == 200){
                    response = await response.json();
                    setEmployee(response.employee)
                    setNavOrganisation(response.organisation.organisation_name)
                    setNavUsername(response.employee.first_name)
                    setToken(data)
                } else {
                    router.replace('/login')
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                    localStorage.removeItem('organisation')
                }
            }catch(e){
                console.log(e)
                setEmployee(null)
            }
        }

        useEffect(() => {
            const data = localStorage.getItem('token')
            fetchEmployee(data)
        }, [])

        
        if (!token || !employee) {
            return (
                <AuthenticatedLayout username={navUsername} organisation={navOrganisation}>
                    <LoadingSpinner />
                </AuthenticatedLayout>
            )
        } else {
            return (
                <AuthenticatedLayout username={navUsername} organisation={navOrganisation}>
                    <WrappedComponent employee={employee} />
                </AuthenticatedLayout>
            )
        }
    };

    return Wrapper;
};

withAuth.PropTypes = {
    WrappedComponent: PropTypes.node.isRequired
}
