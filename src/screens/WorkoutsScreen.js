import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutModal from '../components/WorkoutModal';
import { COLORS } from '../constants/theme';

// Sample data
const workouts = [
	{
		id: '1',
		name: 'Push Ups',
		image: require('../assets/images/push_ups.png'),
		gif: require('../assets/gifs/push_ups.gif'),
		description: 'A push-up is a common calisthenics exercise...',
	},
	// more...
];

const WorkoutsScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedExercise, setSelectedExercise] = useState(null);

	const handleCardPress = (exercise) => {
		setSelectedExercise(exercise);
		setModalVisible(true);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={workouts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<WorkoutCard exercise={item} onPress={() => handleCardPress(item)} />
				)}
			/>
			{selectedExercise && (
				<WorkoutModal
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
					exercise={selectedExercise}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.background,
		padding: 10,
	},
});

export default WorkoutsScreen;
