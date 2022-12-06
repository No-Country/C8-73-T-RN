import { UserContext } from '../../context/user/UserContext'; // CONTEXTO
import { useContext } from 'react'; // HOOKS

const Account = () => {
    const { signOutUser } = useContext(UserContext); // AYUDANTES

    return (
        <main>
            <h1>PERFIL DE USUARIO</h1>
            <button onClick={() => signOutUser()}>cerrar SESION</button>
        </main>
    );
};

export { Account };
