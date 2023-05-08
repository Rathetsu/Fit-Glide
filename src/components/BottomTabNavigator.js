import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName;
					if (route.name === 'Home') {
						iconName = 'home';
					} else if (route.name === 'Workouts') {
						iconName = 'dumbbell';
					} else if (route.name === 'Settings') {
						iconName = 'cog';
					}
					return (
						<MaterialCommunityIcons
							name={iconName}
							size={size}
							color={color}
						/>
					);
				},
			})}
		>
			<BottomTab.Screen name="Home" component={HomeScreen} />
			<BottomTab.Screen name="Workouts" component={WorkoutsScreen} />
			<BottomTab.Screen name="Settings" component={SettingsScreen} />
		</BottomTab.Navigator>
	);
};

export default BottomTabNavigator;
