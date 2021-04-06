import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Text,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
//Components
import Button from './button';

//Config
import color from '../config/color';

const Graph = ({onPress, id}) => {
  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.blur} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <View>
          <LineChart
            data={{
              labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 0,
                    Math.random() * 50,
                    Math.random() * 50,
                    Math.random() * 50,
                    Math.random() * 50,
                    Math.random() * 50,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={300}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#000000',
              backgroundGradientFrom: 'rgba(255, 255, 255, 0.9)',
              backgroundGradientTo: 'rgba(255, 255, 255, 0.9)',
              decimalPlaces: 0,
              color: (opacity = 1) => color.primary,
              labelColor: (opacity = 1) => color.primary,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginBottom: 15,
              borderRadius: 30,
            }}
          />
        </View>
        <Button onPress={onPress} text={'Close'} />
      </View>
    </>
  );
};

export default Graph;

const styles = StyleSheet.create({
  blur: {
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  container: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 'auto',
    backgroundColor: color.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingBottom: 20,
  },
});
