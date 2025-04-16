import {SafeAreaView, View} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ROUTES} from '../../utils/router';
// import {useNavigation} from '@react-navigation/native';

const MyNotes = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <FloatActionButton
          onPress={() => navigation.navigate(ROUTES.AddNote)}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
