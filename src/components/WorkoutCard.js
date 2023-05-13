import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import WorkoutModal from './WorkoutModal';
import { COLORS } from '../constants/theme';

const WorkoutCard = ({ workout }) => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View style={styles.card}>
			<TouchableOpacity onPress={() => setModalVisible(true)}>
				<Image source={workout.image} style={styles.image} />
				<Text style={styles.title}>{workout.name}</Text>
			</TouchableOpacity>
			<WorkoutModal
				visible={modalVisible}
				onClose={() => setModalVisible(false)}
				workout={workout}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.base,
		borderRadius: 10,
		padding: 10,
		marginVertical: 5,
		marginBottom: 10,
	},
	image: {
		width: 50,
		height: 50,
		marginRight: 10,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: COLORS.secondary,
	},

});

export default WorkoutCard;


// The `workout` object:
// const workout = {
// 	name: 'Push Ups',
// 	image: require('../assets/images/push_ups.png'),
// 	gif: require('../assets/gifs/push_ups.gif'),
// 	description: '...',
//   };
