import { UserContext } from './UserContext'; // CONTEXTO
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react'; // HOOKS
import { auth } from '../.././services/firebase/config'; // AUTENTICACION

const UserContextProvider = ({ children }) => {
    const [user, updateUser] = useState(false); // ESTADO

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                updateUser(user);
            } else {
                updateUser(null);
            }
        });
    }, []);

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOut(auth);

    const updateProfileUser = (object) => updateProfile(auth.currentUser, object);

    const values = {
        user,
        updateUser,
        createUser,
        signInUser,
        signOutUser,
        updateProfileUser,
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export { UserContextProvider };
