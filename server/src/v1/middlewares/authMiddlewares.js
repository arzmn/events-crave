// // import {auth} from "../../firebase/firebaseConfig.js";
// import admin from "../../firebase/firebaseConfigAdmin.js";







// export const verifyToken = async (req, res, next) => {
//     const idToken = req.headers.authorization?.split('Bearer ')[1]; // Extract token from Authorization header
  
//     if (!idToken) {
//       return res.status(401).send('Unauthorized');
//     }
  
//     try {
//       const decodedToken = await admin.auth().verifyIdToken(idToken);
//       req.user = decodedToken; // Add user info to request object
//       next();
//     } catch (error) {
//       return res.status(403).send('Invalid token');
//     }
//   };
  