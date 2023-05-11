import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';


const TabIcon = ({ color, size, iconName }) => {
	return <FontAwesome5 name={iconName} size={size} color={color} />;
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<BottomTab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					let iconName = 'home'; // default icon
					if (route.name === 'Home') {
						iconName = 'home';
					} else if (route.name === 'Workouts') {
						iconName = 'dumbbell';
					} else if (route.name === 'Settings') {
						iconName = 'cog';
					}
					return (
						<TabIcon
							color={color}
							size={size}
							iconName={iconName}
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
