import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import WorkoutModal from '../components/WorkoutModal';
import { COLORS } from '../constants/theme';
import workouts from '../data/workouts';


const WorkoutsScreen = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [selectedWorkout, setselectedWorkout] = useState(null);

	const handleCardPress = (exercise) => {
		setselectedWorkout(exercise);
		setModalVisible(true);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={workouts}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<WorkoutCard workout={item} onPress={() => handleCardPress(item)} />
				)}
			/>
			{selectedWorkout && (
				<WorkoutModal
					visible={modalVisible}
					onClose={() => setModalVisible(false)}
					workout={selectedWorkout}
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
