import React from 'react';
import { View } from 'react-native';

 const Card = (props) => {
   return (
       <View style={styles.containerStyle}>
          {props.children}
         </View>
     );
  };

const styles = {
 containerStyle: {
  borderWidth: 2,
  borderRadius: 3,
  borderColor: '#ddd',
  borderBottomWidth: 0,
  shadowColor: '#000',
  shadowOffset: { width: 0, hieght: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 2,
  elevation: 1,
  marginLeft: 6,
  marginRight: 7,
  marginTop: 10
 }
};
export default Card;
