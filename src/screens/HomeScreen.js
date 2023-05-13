import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientButton from '../components/GradientButton';
import { COLORS } from '../constants/theme';

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>HIIT Workout App</Text>
			<GradientButton
				text="Preview Workout"
				onPress={() => navigation.navigate('Workouts')}
				containerStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				textStyle={styles.buttonText}
			/>
			<GradientButton
				text="Start Workout"
				onPress={() => navigation.navigate('Circuit')}
				containerStyle={styles.buttonContainer}
				buttonStyle={styles.button}
				textStyle={styles.buttonText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.background,
	},
	title: {
		fontSize: 36,
		fontWeight: 'bold',
		marginBottom: 40,
		color: COLORS.primary,
		textShadowColor: COLORS.borderColor,
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10,
	},
	buttonContainer: {
		marginVertical: 10,
	},
	button: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		borderRadius: 100,
		alignItems: 'center',
	},
	buttonText: {
		color: COLORS.base,
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default HomeScreen;
