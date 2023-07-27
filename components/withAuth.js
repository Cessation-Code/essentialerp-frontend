import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from './layouts/authenticated_layout/authenticated_layout';
import LoadingSpinner from './loadingSpinner';

const withAuth = (WrappedComponent) => {

    const Wrapper = (props) => {

        const [token, setToken] = useState("")
        const [employee, setEmployee] = useState(null)
        const [navUsername, setNavUsername] = useState()
        const [navOrganisation, setNavOrganisation] = useState()
        const router = useRouter()

        useEffect(() => {

            setNavUsername(localStorage.getItem('username'))
            setNavOrganisation(localStorage.getItem('organisation'))

            async function fetchEmployee() {
                try {
                    await fetch('https://essential-erp-10cac5b0da28.herokuapp.com/api/v1/employee/getEmployee', {
                        // const response = await fetch('https://localhost:8000/api/v1/employee', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(response => response.json()).then(data => {
                        // if token is invalid, redirect to login page
                        if (data.message === 'Authentication Invalid') {
                            router.replace('/login')
                            localStorage.removeItem('token')
                            localStorage.removeItem('username')
                            localStorage.removeItem('organisation')
                        }
                        setEmployee(data)
                    });
                } catch (e) {
                    setEmployee(null)
                }
            }

            const data = localStorage.getItem('token')
            setToken(data)
            if (!localStorage.getItem('token') || !localStorage.getItem('username') || !localStorage.getItem('organisation')) { router.replace('/login') }
            fetchEmployee()
        }, [])

        // console.log(employee)
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

export default withAuth;
