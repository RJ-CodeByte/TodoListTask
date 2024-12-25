import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

/* Defines device screen width and height */
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * Defines spacing values using the moderateScale function for consistent spacing across the application.
 *
 * @exports AppSpacing - Object containing spacing values
 */
export const AppSpacing = {
  1: moderateScale(1),
  2: moderateScale(2),
  3: moderateScale(3),
  4: moderateScale(4),
  5: moderateScale(5),
  6: moderateScale(6),
  7: moderateScale(7),
  8: moderateScale(8),
  9: moderateScale(9),
  10: moderateScale(10),
  11: moderateScale(11),
  12: moderateScale(12),
  13: moderateScale(13),
  14: moderateScale(14),
  15: moderateScale(15),
  16: moderateScale(16),
  17: moderateScale(17),
  18: moderateScale(18),
  20: moderateScale(20),
  24: moderateScale(24),
  25: moderateScale(25),
  30: moderateScale(30),
  32: moderateScale(32),
  34: moderateScale(34),
  35: moderateScale(35),
  36: moderateScale(36),
  40: moderateScale(40),
  42: moderateScale(42),
  45: moderateScale(45),
  46: moderateScale(46),
  50: moderateScale(50),
  55: moderateScale(55),
  56: moderateScale(56),
  60: moderateScale(60),
  65: moderateScale(65),
  70: moderateScale(70),
  75: moderateScale(75),
  80: moderateScale(80),
  90: moderateScale(90),
  95: moderateScale(95),
  100: moderateScale(100),
  120: moderateScale(120),
  140: moderateScale(140),
  150: moderateScale(150),
  160: moderateScale(160),
  165: moderateScale(165),
  210: moderateScale(210),
  220: moderateScale(220),
  230: moderateScale(230),
  240: moderateScale(240),
  290: moderateScale(290),
  350: moderateScale(350),
  500: moderateScale(500),
};

/**
 * Defines radius values using for consistent radius across the application.
 *
 * @exports AppSpacing - Object containing radius values
 */
export const AppRadius = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  12: 12,
  15: 15,
  20: 20,
  25: 25,
  30: 30,
  32: 32,
  38: 38,
  50: 50,
};

/**
 *
 * @exports AppBorderWidth - Object containing width values
 */
export const AppBorderWidth = {
  0.5: 0.5,
  1: 1,
  1.5: 1.5,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
};
