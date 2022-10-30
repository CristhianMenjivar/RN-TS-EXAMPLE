import React from 'react';
import {Text, SafeAreaView, StatusBar, View} from 'react-native';
import ButtonCal from '../../components/ButtonCal';
import useCalculator from '../../hooks/useCalculator';
import {styles} from './styles';

const CalculadoraScreen = () => {
  const {
    numero,
    numberOld,
    positivoNegativo,
    calcular,
    btnRest,
    btnSum,
    btnMultiple,
    btnDividir,
    deleteEndCharacter,
    buildNumber,
    clean,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <View style={styles.container}>
        {numberOld !== '0' && <Text style={styles.result}>{numberOld}</Text>}
        <Text
          style={styles.resultSecond}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {numero}
        </Text>

        <View style={styles.fila}>
          <ButtonCal text="C" onPress={clean} type="gray" />
          <ButtonCal text="+/-" onPress={positivoNegativo} type="gray" />
          <ButtonCal text="del" onPress={deleteEndCharacter} type="gray" />
          <ButtonCal text="/" onPress={btnDividir} type="orange" />
        </View>

        <View style={styles.fila}>
          <ButtonCal text="7" onPress={buildNumber} />
          <ButtonCal text="8" onPress={buildNumber} />
          <ButtonCal text="9" onPress={buildNumber} />
          <ButtonCal text="x" onPress={btnMultiple} type="orange" />
        </View>

        <View style={styles.fila}>
          <ButtonCal text="4" onPress={buildNumber} />
          <ButtonCal text="5" onPress={buildNumber} />
          <ButtonCal text="6" onPress={buildNumber} />
          <ButtonCal text="-" onPress={btnRest} type="orange" />
        </View>

        <View style={styles.fila}>
          <ButtonCal text="1" onPress={buildNumber} />
          <ButtonCal text="2" onPress={buildNumber} />
          <ButtonCal text="3" onPress={buildNumber} />
          <ButtonCal text="+" onPress={btnSum} type="orange" />
        </View>

        <View style={styles.fila}>
          <ButtonCal text="0" onPress={buildNumber} dobleSize />
          <ButtonCal text="." onPress={buildNumber} />
          <ButtonCal text="=" onPress={calcular} type="orange" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalculadoraScreen;
