import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import { DrawerNavigationItems } from 'react-navigation-drawer';
import { createDrawerNavigator ,DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

function DrawerCustom(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
