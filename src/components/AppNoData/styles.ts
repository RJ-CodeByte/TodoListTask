import {StyleSheet} from 'react-native';

import {AppSpacing} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: AppSpacing[20],
    marginHorizontal: AppSpacing[20],
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
