import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

export function useSize({initialValue, finalValue, duration, grow, trigger}) {
  const [animate] = useState(
    new Animated.Value(grow ? initialValue : finalValue),
  );

  useEffect(() => {
    Animated.timing(animate, {
      toValue: grow ? finalValue : initialValue,
      duration: duration,
    }).start(() => trigger);
  }, [animate, duration, finalValue, grow, initialValue, trigger]);

  return animate;
}
