import React, {FunctionComponent} from 'react';
import {Text, View} from 'react-native';

const LayoutMain: FunctionComponent = ({children}) => {
  return (
    <View>
      <Text>Hello word!</Text>
      {children}
    </View>
  );
};

export default LayoutMain;
