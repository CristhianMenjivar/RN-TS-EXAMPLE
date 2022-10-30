import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {resize} from '../styles';

const styles = StyleSheet.create({
  buttonDoubleSize: {
    width: resize(151),
  },
  button: {
    height: resize(70),
    width: resize(70),
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: '#9B9B9B',
  },
  buttonText: {
    fontSize: resize(30),
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },
  ButtonOrange: {
    backgroundColor: '#FF9427',
  },
  buttonTextOrange: {
    color: 'white',
  },
  buttonDark: {
    backgroundColor: '#2D2D2D',
  },
  buttonTextDark: {
    color: 'white',
  },
});

type Props = {
  text: string;
  onPress: (numberText: string) => void;
  type?: 'orange' | 'gray' | 'dark';
  customStyle?: StyleProp<ViewStyle>;
  dobleSize?: boolean;
};

const ButtonCal = ({
  onPress,
  text,
  type = 'dark',
  customStyle,
  dobleSize = false,
}: Props) => (
  <TouchableOpacity onPress={() => onPress(text)}>
    <View
      style={[
        styles.button,
        type === 'dark' && styles.buttonDark,
        type === 'orange' && styles.ButtonOrange,
        dobleSize && styles.buttonDoubleSize,
        customStyle,
      ]}>
      <Text
        style={[
          styles.buttonText,
          type === 'dark' && styles.buttonTextDark,
          type === 'orange' && styles.buttonTextOrange,
        ]}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ButtonCal;
