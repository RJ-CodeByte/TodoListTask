import React, {forwardRef, LegacyRef, memo} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

interface AppScrollViewProps extends ScrollViewProps {
  children?: React.JSX.Element;
}

export const AppScrollView = memo(
  forwardRef(
    (
      props: AppScrollViewProps,
      ref: LegacyRef<ScrollView> | undefined,
    ): React.JSX.Element => {
      const {children} = props;

      return (
        <ScrollView
          ref={ref}
          bounces={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          {...props}>
          {children}
        </ScrollView>
      );
    },
  ),
);
