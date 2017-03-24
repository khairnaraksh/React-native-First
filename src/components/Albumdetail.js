import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import Cardsection from './Cardsection';
import Button from './Button';

const Albumdetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailStyle,
          headerContentStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle
        } = styles;

  return (
   <Card>
    <Cardsection>
      <View style={thumbnailContainerStyle} >
        <Image
           style={thumbnailStyle}
           source={{ uri: thumbnail_image }}
        />
      </View>
       <View style={headerContentStyle}>
         <Text style={headerTextStyle}>{title}</Text>
         <Text>{artist}</Text>
       </View>
    </Cardsection>
     <Cardsection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
     </Cardsection>
     <Cardsection>
     <Button onPress={() => Linking.openURL(url)}>
Buynow
     </Button>
     </Cardsection>
   </Card>
  );
};
  const styles = {
  headerContentStyle: {
   flexDirection: 'column',
   justifyContent: 'space-around'
 },
 thumbnailStyle: {
   height: 50,
   width: 50
 },
 headerTextStyle: {
   fontSize: 20
 },
  thumbnailContainerStyle: {
   justifyContent: 'center',
   alignItems: 'center',
   marginLeft: 10,
   marginRight: 10
 },
 imageStyle: {
   height: 300,
   flex: 1,
   width: null
 }

};

 export default Albumdetail;
