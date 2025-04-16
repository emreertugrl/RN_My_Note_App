import {SafeAreaView, View} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';

const MyNotes = () => {
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;
