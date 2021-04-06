import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';

export default function apiService() {
  const [details, setDetails] = useState();
  const result = async () => {
    try {
      const {data} = await database()
        .ref('/listing/place')
        .on('value', (snapshot) => {
          const val = snapshot.val();
          setDetails(val);
        });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    result();
  }, []);
  return details;
}
