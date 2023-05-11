/**
 * FitGlide - App.tsx
 * React Native App designed to guide users through a 30-minute High-Intensity Interval Training (HIIT) workout.
 * Created by: Ahmed Ezzat - 2023
 * https://github.com/Rathetsu/Fit-Glide
 *
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/components/BottomTabNavigator';

const App = () => {
	return (
		<NavigationContainer>
			<BottomTabNavigator />
		</NavigationContainer>
	);
};

export default App;
