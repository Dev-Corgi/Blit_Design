import React from 'react';
import {Text} from 'react-native';

const FontText = props => {
    // const [fontsLoaded] = useFonts({
    //     'Inter-Black': require('./asset/fonts/Inter-Black.ttf'),
    //     'Inter-Bold': require('./asset/fonts/Inter-Bold.ttf'),
    //     'Inter-ExtraBold': require('./asset/fonts/Inter-ExtraBold.ttf'),
    //     'Inter-Light': require('./asset/fonts/Inter-Light.ttf'),
    //     'Inter-Medium': require('./asset/fonts/Inter-Medium.ttf'),
    //     'Inter-Regular': require('./asset/fonts/Inter-Regular.ttf'),
    //     'Inter-SemiBold': require('./asset/fonts/Inter-SemiBold.ttf'),
    //     'Inter-Thin': require('./asset/fonts/Inter-Thin.ttf'),
    //     'The Jamsil-Bold': require('./asset/fonts/The Jamsil-Bold.ttf'),
    //     'The Jamsil-ExtraBold': require('./asset/fonts/The Jamsil-ExtraBold.ttf'),
    //     'The Jamsil-Light': require('./asset/fonts/The Jamsil-Light.ttf'),
    //     'The Jamsil-Medium': require('./asset/fonts/The Jamsil-Medium.ttf'),
    //     'The Jamsil-Regular': require('./asset/fonts/The Jamsil-Regular.ttf'),
    //     'The Jamsil-Thin': require('./asset/fonts/The Jamsil-Thin.ttf')
    //   });
    
    //   if (!fontsLoaded) {
    //     return null; // 폰트 로딩 중이라면 아무것도 렌더링하지 않음
    //   }

  return (
    <Text
      {...props}
      style={{
        ...props.style
      }}>
      {props.children}
    </Text>
  );
};

export default FontText;