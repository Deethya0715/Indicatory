import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.page} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  page: {
    position: 'absolute',
    top: 642,
    left: 24,
    width: 342,
    height: 56,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    color: '#003D3D',
    backgroundColor: '#00FFFFFF',
    opacity: 1,
    borderWidth: 0,
    borderRadius: 10,
    boxShadow: '0px 0px 1px #171a1fD, 0px 0px 2px #171a1f14',
  },
});

export default Button;