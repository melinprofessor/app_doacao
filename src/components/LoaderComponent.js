import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { StyleSheet } from 'react-native';


const LoaderComponent = (props) => {
  return (
    <AnimatedLoader
      animationStyle={ styles.lottie }
      overlayColor="rgba(255,255,255,0.75)"
      source={ require('./loader.json') }
      speed={ 1 }
      visible={props.visible}
    />
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200
  }
});

export default LoaderComponent;
