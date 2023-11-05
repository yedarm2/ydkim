import { initializeApp, cert, ServiceAccount, getApps } from 'firebase-admin/app';

// * initializeApp가 중복 실행되는 에러를 방지하기 위함 (예를 들어서 next dev에서 라던지...)
if (!getApps().length) {
	const credential = cert({
		type: process.env.FIREBASE_TYPE,
		project_id: process.env.FIREBASE_PROJECT_ID,
		private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
		private_key: process.env.FIREBASE_PRIVATE_KEY,
		client_email: process.env.FIREBASE_CLIENT_EMAIL,
		client_id: process.env.FIREBASE_CLIENT_ID,
		auth_uri: process.env.FIREBASE_AUTH_URI,
		token_uri: process.env.FIREBASE_TOKEN_URI,
		auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
		client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
	} as ServiceAccount);

	initializeApp({
		credential,
		storageBucket: 'ydkim-68e4c.appspot.com',
	});
}

export const firebaseApp = getApps()[0];
