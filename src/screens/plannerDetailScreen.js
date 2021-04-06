import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';

const PlannerDetailScreen = ({route}) => {
  const item = route.params;
  return (
    <WebView
      style={{height: 300}}
      javaScriptEnabled={true}
      source={{
        uri: `${item}`,
      }}
    />
  );
};

export default PlannerDetailScreen;

const styles = StyleSheet.create({});
