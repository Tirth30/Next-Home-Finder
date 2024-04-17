// // import { initializeApp } from "firebase/app";
// // import {getAuth} from "firebase/auth";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyBvkxr6du8A7quuMFdWSX_Qyp6zggOi6m4",
// //   authDomain: "next-home-finder-5de1b.firebaseapp.com",
// //   projectId: "next-home-finder-5de1b",
// //   storageBucket: "next-home-finder-5de1b.appspot.com",
// //   messagingSenderId: "42351311379",
// //   appId: "1:42351311379:web:cfc52ba4fe7fbffde45de6"
// // };


// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth{app};

// // export default app;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBvkxr6du8A7quuMFdWSX_Qyp6zggOi6m4",
//   authDomain: "next-home-finder-5de1b.firebaseapp.com",
//   projectId: "next-home-finder-5de1b",
//   storageBucket: "next-home-finder-5de1b.appspot.com",
//   messagingSenderId: "42351311379",
//   appId: "1:42351311379:web:cfc52ba4fe7fbffde45de6"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Corrected syntax

// export { auth }; // Exporting auth as named export
// export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvkxr6du8A7quuMFdWSX_Qyp6zggOi6m4",
  authDomain: "next-home-finder-5de1b.firebaseapp.com",
  projectId: "next-home-finder-5de1b",
  storageBucket: "next-home-finder-5de1b.appspot.com",
  messagingSenderId: "42351311379",
  appId: "1:42351311379:web:cfc52ba4fe7fbffde45de6"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app); // Corrected syntax

// export { auth }; /// Exporting auth as named export
export const auth = getAuth(app);
export default app;
