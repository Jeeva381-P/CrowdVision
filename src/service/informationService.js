// import {useEffect, useState} from 'react';
// import database from '@react-native-firebase/database';

// export default function apiService() {
//   const [count, setCount] = useState(null);
//   const result = async () => {
//     try {
//       const {data} = await database()
//         .ref('/listing/count')
//         .on('value', (snapshot) => {
//           const val = snapshot.val();
//           setCount(val);
//         });
//     } catch (error) {
//       alert(error);
//     }
//   };
//   useEffect(() => {
//     result();
//   }, []);
//   return count;
// }
