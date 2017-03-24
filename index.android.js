//used for android devices

// 3 Steps
//import libraries like we do in other language
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/Albumlist';


//create Componenet
 const App = () => (
   <View>
      <Header headerText={'Taylor-ganewali'} />
      <AlbumList />
   </View>
 );

//render the App
 AppRegistry.registerComponent('FirstProject', () => App);
