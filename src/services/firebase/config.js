import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBc-lRxgJntZ35bLbAaw97wSFz_wGuktf4',
    authDomain: 'e-stadium-4eadc.firebaseapp.com',
    projectId: 'e-stadium-4eadc',
    storageBucket: 'e-stadium-4eadc.appspot.com',
    messagingSenderId: '267871784181',
    appId: '1:267871784181:web:50649f167e17e2fc0189bc',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseConfig, auth };
