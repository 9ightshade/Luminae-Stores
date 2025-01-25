import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useTokenClearAndRedirect() {
    const navigate = useNavigate();


    // Clear the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/');
    ;

    return null;
}



function useTokenExpirationCheckAndRedirect() {
    const navigate = useNavigate();
    const [tokenExpirationTime, setTokenExpirationTime] = useState(null);

    useEffect(() => {
        const checkTokenExpiration = async () => {
            const storedToken = localStorage.getItem('token');
            const storedExpirationTime = localStorage.getItem('tokenExpirationTime');

            if (storedToken && storedExpirationTime) {
                setTokenExpirationTime(parseInt(storedExpirationTime));

                // Check if token is expired
                if (Date.now() > tokenExpirationTime) {
                    // Attempt to refresh token (asynchronously)
                    try {
                        const newToken = await fetchNewToken(); // Replace with your token refresh logic
                        localStorage.setItem('token', newToken);
                        // Update expiration time if necessary
                        setTokenExpirationTime(calculateNewExpirationTime(newToken));
                    } catch (error) {
                        // Handle token refresh failure
                        console.error('Token refresh failed:', error);
                        localStorage.removeItem('token');
                        localStorage.removeItem('tokenExpirationTime');
                        navigate('/');
                    }
                }
            }
        };

        checkTokenExpiration();
    }, []);

    return null;
}

export default useTokenExpirationCheckAndRedirect;