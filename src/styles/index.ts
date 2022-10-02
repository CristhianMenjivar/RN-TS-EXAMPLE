import {Dimensions, Platform} from 'react-native';
import {WIDTH_DESIGN, HEIGHT_DESIGN} from '../config/environments';

type Base = 'w' | 'h';

export const {width, height} = Dimensions.get(
  Platform.OS === 'ios' ? 'screen' : 'window',
);

/**
 * It takes a size in pixels and returns the size in pixels for the current device
 * @param {number} size - The size of the element in the design.
 * @param {Base} [base=w] - w or h, depending on whether you want to resize based on the width or
 * height of the device.
 * @returns A function that takes in a size and a base and returns a number.
 */
export const resize = (size: number, base: Base = 'w') => {
  const currentSize = base === 'w' ? WIDTH_DESIGN : HEIGHT_DESIGN;
  const deviceSize = base === 'w' ? width : height;
  const percent = (size * 100) / currentSize;
  const percentJS = percent / 100;

  return deviceSize * percentJS;
};

/*
	EXAMPLE USE:
	1. import {resize} from '../styles
	2. styles={{
		width: resize(20),
		height: resize(20, 'h'),
	}}
*/
