import {SafeAreaView, ScrollView, View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ROUTES} from '../../utils/router';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
// import {useNavigation} from '@react-navigation/native';

const MyNotes = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <View style={{flex: 5}}>
          <FlatList
            data={mockData}
            renderItem={({item}) => <NoteCard item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <FloatActionButton
          onPress={() => navigation.navigate(ROUTES.AddNote, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;

{
  /* <ScrollView>
{mockData.map(item => (
  <View>
    <Text>{item.id}</Text>
  </View>
))}
</ScrollView> */
}
