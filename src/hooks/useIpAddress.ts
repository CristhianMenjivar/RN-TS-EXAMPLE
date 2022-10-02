import axios from 'axios';
import {useEffect, useState} from 'react';
import {getIpAddress} from 'react-native-device-info';
import {useWorkingIndicator} from './useBooleanToggler';

/**
 * It makes a request to the ipify API, and returns the IP address of the user
 * @returns An object with an ipAddress property and a value of the ip address.
 */
export const getIp = async () => {
  try {
    const {data} = await axios.get('https://api.ipify.org?format=json');
    return {
      ipAddress: data?.ip,
    };
  } catch (error) {
    return {error};
  }
};

/**
 * It first tries to get the IP address from the API, if it fails, it tries to get the IP address from
 * the browser
 * @returns The ip address of the device
 */
export const getIpAddressDevice = async () => {
  try {
    const response = await getIp();
    if (response?.ipAddress) {
      return response.ipAddress;
    } else {
      const responseIpAddress = await getIpAddress();
      return responseIpAddress;
    }
  } catch (error) {
    console.log('ip error', error);
    return '-';
  }
};

/**
 * JavaScript
 * @returns - ipAddress: string
 *   - loading: boolean
 *   - getIp: function
 */
const useIpAddress = () => {
  const [ipAddress, setIpAddress] = useState('-');
  const {startWork, finishWork, isWorking} = useWorkingIndicator({
    initialValue: true,
  });

  const handlerIpAddress = async () => {
    startWork();
    const ip = await getIpAddressDevice();
    finishWork();
    setIpAddress(ip);
  };

  useEffect(() => {
    handlerIpAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ipAddress,
    loading: isWorking,
    getIp: handlerIpAddress,
  };
};

export default useIpAddress;
