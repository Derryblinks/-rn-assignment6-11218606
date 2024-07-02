
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../assets/images/Menu.png')} style={styles.MenuIcon} />
      </TouchableOpacity>
      <Image source={require('../assets/images/Logo.png')} style={styles.mainIcon} />
      <Image source={require('../assets/images/Search.png')} style={styles.icons} />
      <Image source={require('../assets/images/shoppingBag.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 30,
    marginTop: 10,
  },
  icons: {
    marginRight: -40,
  },

  mainIcon:{
    width: 150,
    height: 50,
    marginLeft: 20,
    alignItems:"center",
    resizeMode: "contain",

  },
  MenuIcon:{
  width: 30,
  height: 30,
  marginLeft: 10,
  
  },


});

export default Header;