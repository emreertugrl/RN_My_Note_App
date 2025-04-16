import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NoteDetail from '../screens/noteDetail';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import {ROUTES} from '../utils/router';
import HeaderRightIcons from '../components/uı/headerRightIcons';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ROUTES.MyNotes}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRightIcons />,
        }}
        name={ROUTES.AddNote}
        component={AddNote}
      />
      <Stack.Screen name={ROUTES.NoteDetail} component={NoteDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
