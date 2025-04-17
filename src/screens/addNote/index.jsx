import {StyleSheet, Text, SafeAreaView, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import {AppColors} from '../../theme/color';
import Button from '../../components/uı/button';
import {getRandomNumber} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../utils/router';

const AddNote = ({route}) => {
  const {note, type} = route?.params;
  const navigation = useNavigation();

  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);

  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) setTitleRequired(true);
    if (!description) setDescriptionRequired(true);
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
    }

    const form = {
      id: type === 'add' ? getRandomNumber(1, 100) : note.id,
      title: title,
      description: description,
      date: new Date().toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    // console.warn(form);
    navigation.navigate(ROUTES.MyNotes, {newNote: form});
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1, padding: 10}}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
            }}>
            Başlık
          </Text>
          <TextInput
            placeholder="Lütfen Başlığı yazınız"
            value={title}
            onChangeText={text => setTitle(text)}
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 90,
              marginVertical: 10,
            }}
          />

          {titleRequired && (
            <Text
              style={{fontWeight: '500', fontSize: 16, color: AppColors.RED}}>
              Lütfen başlık alanını doldurunuz
            </Text>
          )}

          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              marginTop: 30,
              marginVertical: 10,
            }}>
            Açıklama
          </Text>

          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            placeholder='"Lütfen notunuzu bu alana yazınız..'
            style={{
              backgroundColor: AppColors.WHITE,
              borderWidth: 1,
              padding: 5,
              margin: 8,
              borderRadius: 5,
              borderColor: AppColors.GRAY,
              height: 180,
            }}
          />

          {descriptionRequired && (
            <Text
              style={{fontWeight: '500', fontSize: 16, color: AppColors.RED}}>
              Lütfen açıklama alanını doldurunuz
            </Text>
          )}
        </View>
        <View>
          <Button
            onPress={saveNote}
            title={type === 'update' ? 'Güncelle' : 'Kaydet'}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: AppColors.PRIMARY,
              padding: 15,
              paddingVertical: 15,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;

const styles = StyleSheet.create({});
