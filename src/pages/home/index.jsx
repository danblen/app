import {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default ({navigation}) => {
  return (
    <View className="index">
      <Button title="sd" onPress={() => navigation.navigate('as')}>
        sdfs
      </Button>
    </View>
  );
};
