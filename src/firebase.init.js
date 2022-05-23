import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBJ2WCE4X3isYHReaI8SXDiSprSpoQJlo0',
	authDomain: 'msi-gpu.firebaseapp.com',
	projectId: 'msi-gpu',
	storageBucket: 'msi-gpu.appspot.com',
	messagingSenderId: '366447076297',
	appId: '1:366447076297:web:02fb368b114ef1decebe18',
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
