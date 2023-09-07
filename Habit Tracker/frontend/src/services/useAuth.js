import {useState, useEffect} from 'react';
import {
        createUserWithEmailAndPassword, getAuth, 
        signInWithEmailAndPassword, onAuthStateChange, 
        signOut, FacebookAuthProvider, GoogleAuthProvider, 
        signInWithPopup
} from 'firebase/auth';

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const facebookProvider = new FacebookAuthProvider;
    const googleProvider = new GoogleAuthProvider;

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

    const signInFacebook = () => { signInWithPopup(auth, facebookProvider); }
    const signInGoogle = () => { signInWithPopup(auth, googleProvider); }

    return {createUser, signInUser, signOutUser, signInFacebook, 
            signInGoogle, isAuthenticated, user};
}