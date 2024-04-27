import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const createUser = (email, password, name, photo) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const newUser = result.user;
            return updateProfile(newUser,{
                displayName: name,
                photoURL: photo
            }).then(()=>{
                setUser(newUser);
                return newUser;
            })  
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    const logIn = (email , password) =>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email , password);
    }

    const logOut = () =>
    {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            // console.log('auth state changed: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
        
    },[user])
    const authInfo = {
        user,createUser,loading,logOut,logIn,setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;