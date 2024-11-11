import React, { useEffect, useState } from 'react';
import Cookies from "js-cookie";
import axios from 'axios';

function useAllGetUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
                if (!token) {
                    console.log("JWT token is missing.");
                    return;
                }
                  
                const response = await axios.get("http://localhost:8800/userAll", {
                    withCredentials: true, 
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    }
                });
                
                setAllUsers(response.data.data); 
            } catch (error) {
                console.log("Error in useAllGetUsers", error);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    return [allUsers, loading];
}

export default useAllGetUsers;
