import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const router = useRouter();

    // Check for authentication here localStorage.getItem('token')
    const isAuthenticated = null
    console.log(localStorage)

    useEffect(() => {
      if (!isAuthenticated) {
        // Redirect to the login page if not authenticated
        router.replace('/login');
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      // Return null during client-side rendering to prevent component rendering
      return null;
    }

    // Render the protected component if authenticated
    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
