import { createContext, useState, useEffect, useContext } from "react";

// funciones de autenticacion de firebase
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from '../firebase'

export  const  authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error ("No hay Usuario logueado");
    return context
}

export function AuthProvider  ({children}) {

    const [user, setUser] = useState(
        {
            email: ' ',
            password: ' ', 
        }
    );
    
    const [errorSes, setErrorSes] = useState("");

    useEffect(() => {        
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);            
            if (currentUser == null) setUser({ email: '', password: '' })
        });
        return () => unsuscribe();
    }, []);
    
    //Creacion de usuario en base
    const signup = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setearErrorSesion  (error)
        }
    }


    //Logueo de usuario
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setearErrorSesion(error)
        }
    }


    //cerrar sesion        
    const logout = async () => {
        await signOut(auth);
        setUser({ email: '', password: '' })
     
    }

    const setearErrorSesion = (error) => {
        if (error.code === "auth/invalid-email")
            setErrorSes("Email invalido")
        else
            if (error.code === "auth/user-not-found")
            setErrorSes("Usuario no registrado en base")
            else
                if (error.code === "auth/weak-password")
                setErrorSes("La Password debe tener como mínimo 6 caracteres")
                else
                    if (error.code === "auth/email-already-in-use")
                    setErrorSes("Usuario ya existente, debe loguearse")
                    else
                        if (error.code === "auth/wrong-password")
                        setErrorSes("Contraseña Incorrecta")
                        else
                            if (error.code === "auth/user-not-found")
                            setErrorSes("Usuario no registrado, debe crear cuenta")
                            else
                                if (error.code === "auth/internal-error")
                                setErrorSes("Error interno, vuelva a intentar")
                                else
                                    alert('Error:' + error.code)
    }


    return <authContext.Provider value={{user, setUser,  signup, login, logout, errorSes}}>{children}</authContext.Provider>;        
}