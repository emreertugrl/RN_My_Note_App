import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';
import {screenWidth} from '../../utils/constants';

const FloatActionButton = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Add size="50" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: AppColors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    bottom: 20,
    right: 20,
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
  },
});
