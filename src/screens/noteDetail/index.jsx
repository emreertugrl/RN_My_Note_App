import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {screenStyle} from '../../styles/screenStyle';
import EditButtons from '../../components/noteDetail/editButton';
import {AppColors} from '../../theme/color';

const NoteDetail = ({route}) => {
  const [selectStyle, setSelectStyle] = useState(styles.normal);
  const {note} = route?.params;

  const handleChangeStyle = value => {
    const newStyle = styles[value] || styles.normal;
    setSelectStyle(newStyle);
  };
  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <EditButtons onChangeStyle={handleChangeStyle} />
        <View style={{flex: 1, backgroundColor: AppColors.WHITE, padding: 10}}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Başlık</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: AppColors.PRIMARY,
                marginVertical: 10,
              }}>
              {note.title}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Not</Text>
            <Text
              style={[
                {
                  fontSize: 20,
                  color: AppColors.SECONDARY,
                  marginVertical: 10,
                },
                selectStyle,
              ]}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  normal: {},
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
