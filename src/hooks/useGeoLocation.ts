import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const useGeoLocation = () => {
  const getGeoLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        console.log(initialPosition);
      },
      (error) => console.log('Debes activar el GPS: ' + error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  if (Platform.OS === 'ios') {
    Geolocation.requestAuthorization();
    getGeoLocation();
  } else {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Titulo',
        message: 'Mensaje',
        buttonPositive: 'Botón',
      },
    ).then((permissionResponse) => {
      if (permissionResponse === PermissionsAndroid.RESULTS.GRANTED) {
        getGeoLocation();
      } else {
        console.log('Location permission not granted!!!!');
      }
    });
  }
};

export default useGeoLocation;
