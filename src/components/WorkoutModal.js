import React from 'react';
import { View, Text, Image, Modal, Button, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

const WorkoutModal = ({ visible, onClose, workout }) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalTitle}>{workout.name}</Text>
					<Image source={workout.gif} style={styles.gif} />
					<Text style={styles.modalText}>{workout.description}</Text>
					<Button title="Close" onPress={onClose} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
		backgroundColor: COLORS.background,
	},
	modalView: {
		margin: 20,
		backgroundColor: COLORS.base,
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 7,
	},
	modalTitle: {
		marginBottom: 15,
		textAlign: 'center',
		fontSize: 24,
		fontWeight: 'bold',
		color: COLORS.primary,
	},
	gif: {
		width: '100%',
		height: 200,
		resizeMode: 'contain',
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		color: COLORS.secondary,
	},
});

export default WorkoutModal;
