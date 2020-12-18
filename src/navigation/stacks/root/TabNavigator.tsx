import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Icon, iconName } from '../../../components';
import SettingsStackScreen from './tabs/SettingsStack';
import WalletStackScreen from './tabs/WalletStack';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  // if (route && route.state && route.state.index) {
  //   return !(route.state.index > 0);
  // }
  return true;
};

const tabScreenOptions = ({ route }: { route: any }) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    let name;

    switch (route.name) {
      case 'WalletStack':
        name = focused ? iconName.settingsActive : iconName.settingsInactive;
        break;
      case 'SettingsStack':
        name = focused ? iconName.settingsActive : iconName.settingsInactive;
        break;
      default:
        name = iconName.settingsInactive;
        break;
    }

    return <Icon name={name} size={32} />;
  },
});

const tabBarOptions = {
  showLabel: false,
  keyboardHidesTabBar: true,
  style: { borderTopWidth: 0 },
};

const TabNavigator = ({ navigation, route }: any) => {
  return (
    <Tab.Navigator
      screenOptions={tabScreenOptions}
      tabBarOptions={tabBarOptions}
    >
      <Tab.Screen
        name="WalletStack"
        component={WalletStackScreen}
        options={({ route }) => ({ tabBarVisible: getTabBarVisible(route) })}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStackScreen}
        options={({ route }) => ({ tabBarVisible: getTabBarVisible(route) })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
