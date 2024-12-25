import React, {forwardRef, memo, Ref} from 'react';
import {FlatList, FlatListProps} from 'react-native';

import {keyExtractorHandler} from '../../utils';

import {AppNoData} from '../AppNoData';

interface AppFlatListProps extends FlatListProps<unknown> {}

/* This code snippet is defining a React functional component named `AppFlatList`. Here's a breakdown
of what it does: */
export const AppFlatList = memo(
  forwardRef(
    (
      props: AppFlatListProps,
      ref: Ref<FlatList> | undefined,
    ): React.JSX.Element => {
      return (
        <FlatList
          ref={ref}
          bounces={true}
          ListEmptyComponent={AppNoData}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractorHandler}
          {...props}
        />
      );
    },
  ),
);
