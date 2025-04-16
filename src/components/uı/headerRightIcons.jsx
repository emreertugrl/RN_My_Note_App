import {Bubble, Share, More} from 'iconsax-react-native';
import {View, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/color';

const HeaderRightIcons = () => {
  return (
    <View style={styles.container}>
      <Bubble size="24" color={AppColors.SECONDARY} style={styles.icon} />
      <Share size="24" color={AppColors.SECONDARY} style={styles.icon} />
      <More size="24" color={AppColors.SECONDARY} style={styles.icon} />
    </View>
  );
};

export default HeaderRightIcons;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});
