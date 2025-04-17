import {SafeAreaView, ScrollView, View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/router/header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ROUTES} from '../../utils/router';
import {mockData} from '../../utils/mockData';
import NoteCard from '../../components/myNotes/noteCard';
import {useEffect, useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

const MyNotes = ({navigation, route}) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    if (!route.params?.newNote) return;
    const newNote = route.params.newNote;
    setNotes(prev => {
      const exists = prev.find(note => note.id === newNote.id);
      if (exists) {
        console.warn(exists);
        return prev.map(note => (note.id === newNote.id ? newNote : note));
      } else {
        console.warn(newNote);
        return [...prev, newNote];
      }
    });
  }, [route.params?.newNote]);
  useEffect(() => {
    // İlk başta mockData'yı yükle
    setNotes(mockData);
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />
        <View style={{flex: 5}}>
          <FlatList
            data={notes}
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
