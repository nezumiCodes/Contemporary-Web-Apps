import {useState, useEffect} from 'react';
import {
        createUserWithEmailAndPassword, getAuth, 
        signInWithEmailAndPassword, onAuthStateChange, 
        signOut
} from 'firebase/auth';

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChange(auth, (user) => {
            if(user) {
                setIsAuthenticated(true);
                setUser(user);
                console.log(user);
            }
            setIsAuthenticated(false);
        });

    }, [setIsAuthenticated, auth]);

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => { signOut(auth); }

    return {createUser, signInUser, signOutUser, isAuthenticated, user};
}