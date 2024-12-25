import {StyleSheet} from 'react-native';

import {AppSpacing} from '../../constants';

export const styles = StyleSheet.create({
  serviceItemContainer: {flexDirection: 'row'},
  titleStyle: {
    flex: 1,
    textAlign: 'left',
  },
  subtitleStyle: {
    textAlign: 'right',
    flex: 2,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: AppSpacing[8],
  },
});
