import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>HIIT Workout App</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Preview')}>
				<Text style={styles.buttonText}>Preview Workout</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Circuit')}>
				<Text style={styles.buttonText}>Start Workout</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	title: {
		fontSize: 32,
		fontWeight: 'bold',
		marginBottom: 40,
	},
	button: {
		backgroundColor: '#1E90FF',
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 5,
		marginVertical: 10,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: 'bold',
	},
});

export default HomeScreen;
