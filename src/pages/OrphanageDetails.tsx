import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import logo from '../images/logo.png';

export default function OrphanageDetails() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={logo} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15C3D6',

    alignItems: 'center',
    justifyContent: 'center',
  },
});
