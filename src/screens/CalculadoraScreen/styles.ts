import {StyleSheet} from 'react-native';
import {resize} from '../../styles';

export const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    justifyContent: 'flex-end',
    paddingHorizontal: resize(20),
    flex: 1,
  },
  result: {
    fontSize: resize(50),
    color: 'white',
    textAlign: 'right',
  },
  resultSecond: {
    fontSize: resize(40),
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
    marginBottom: resize(15, 'h'),
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: resize(18, 'h'),
    paddingHorizontal: resize(10),
  },
});
