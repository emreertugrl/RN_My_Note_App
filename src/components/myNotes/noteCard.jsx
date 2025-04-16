import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Edit, Trash} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';
import {noteCardStyle} from '../../styles/noteCardStyle';

const NoteCard = ({item}) => {
  return (
    <Pressable style={noteCardStyle.container}>
      <View style={noteCardStyle.bubleContainer}>
        <View style={noteCardStyle.buble}></View>
      </View>
      <View style={noteCardStyle.noteContainer}>
        <Text style={noteCardStyle.title}>{item.title}</Text>
        <Text style={noteCardStyle.description}>{item.description}</Text>
        <Text style={noteCardStyle.date}>{item.date}</Text>
      </View>
      <TouchableOpacity style={noteCardStyle.buttonContainer}>
        <Trash size="24" color={AppColors.RED} />
      </TouchableOpacity>
      <TouchableOpacity style={noteCardStyle.buttonContainer}>
        <Edit size="24" color={AppColors.PRIMARY} variant="Bold" />
      </TouchableOpacity>
    </Pressable>
  );
};

export default NoteCard;
