import {useRef, useState} from 'react';
import {Alert} from 'react-native';

enum Operators {
  sum,
  rest,
  multi,
  div,
}

const useCalculator = () => {
  const [numero, setNumero] = useState('0');
  const [numberOld, setNumberOld] = useState('0');

  const lastOperationRef = useRef<Operators>();

  const clean = () => {
    setNumero('0');
    setNumberOld('0');
  };

  const buildNumber = (numeroTexto: string) => {
    try {
      // No aceptar doble punto
      if (numero.includes('.') && numeroTexto === '.') {
        return;
      }

      if (numero.startsWith('0') || numero.startsWith('-0')) {
        // Punto decimal
        if (numeroTexto === '.') {
          setNumero(numero + numeroTexto);

          // Evaluar si es otro cero, y hay un punto
        } else if (numeroTexto === '0' && numero.includes('.')) {
          setNumero(numero + numeroTexto);

          // Evaluar si es diferente de cero y no tiene un punto
        } else if (numeroTexto !== '0' && !numero.includes('.')) {
          setNumero(numeroTexto);

          // Evitar 0000.0
        } else if (numeroTexto === '0' && !numero.includes('.')) {
          setNumero(numero);
        } else {
          setNumero(numero + numeroTexto);
        }
      } else {
        setNumero(numero + numeroTexto);
      }
    } catch (error) {
      Alert.alert(typeof error === 'string' ? error : 'Error!');
    }
  };

  const deleteEndCharacter = () => {
    let negativo = '';
    let numeroTemp = numero;
    if (numero.includes('-')) {
      negativo = '-';
      numeroTemp = numero.substr(1);
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1));
    } else {
      setNumero('0');
    }
  };

  const changeNumberByOld = () => {
    if (numero.endsWith('.')) {
      setNumberOld(numero.slice(0, 1));
    } else {
      setNumberOld(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    changeNumberByOld();
    lastOperationRef.current = Operators.div;
  };
  const btnMultiple = () => {
    changeNumberByOld();
    lastOperationRef.current = Operators.multi;
  };
  const btnSum = () => {
    changeNumberByOld();
    lastOperationRef.current = Operators.sum;
  };
  const btnRest = () => {
    changeNumberByOld();
    lastOperationRef.current = Operators.rest;
  };

  const calcular = () => {
    try {
      const num1 = Number(numberOld);
      const num2 = Number(numero);

      setNumberOld('0');

      switch (lastOperationRef.current) {
        case Operators.sum:
          setNumero(`${num1 + num2}`);
          break;
        case Operators.div:
          setNumero(`${num1 / num2}`);
          break;
        case Operators.rest:
          setNumero(`${num1 - num2}`);
          break;
        case Operators.multi:
          setNumero(`${num1 * num2}`);
          break;

        default:
          break;
      }
    } catch (error) {
      Alert.alert(typeof error === 'string' ? error : 'Error!');
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero(`-${numero}`);
    }
  };

  return {
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
  };
};

export default useCalculator;
