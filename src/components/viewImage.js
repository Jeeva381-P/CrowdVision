import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
//Components
import Button from './button';

//Config
import color from '../config/color';

const ViewImage = ({onPress, id}) => {
  return (
    <>
      <View style={styles.container} />
      <WebView
        style={{height: 300}}
        javaScriptEnabled={true}
        source={{
          uri: id,
        }}
      />
      <View style={styles.container}>
        <Button onPress={onPress} text="Close" />
      </View>
    </>
  );
};

export default ViewImage;

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: color.black,
    paddingBottom: 20,
  },
});
