// import liberaries for android
import React from 'react';
import { Text, View } from 'react-native';

// Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
    </View>
          );
};

const styles = {
  viewStyle: {
       backgroundColor: '#80ffff',
       justifyContent: 'center',
       alignItems: 'center',
       height: 60,
       paddingTop: 15,
       shadowColor: '#ddd',
       shadowOffset: { width: 0, height: 20 },
       shadowOpacity: 0.3           //Darkness of shadow
  },
textStyle: {
  fontSize: 20
}
};

//Render it to the device
export default Header;
