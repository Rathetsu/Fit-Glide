import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, BUTTON_COLORS } from '../constants/theme';

const GradientButton = ({
	onPress,
	containerStyle,
	hollow = false,
	buttonStyle,
	textStyle,
	text,
}) => {
	const borderStart = BUTTON_COLORS.primary;
	const borderEnd = BUTTON_COLORS.borderColor;
	const start = hollow ? 'white' : BUTTON_COLORS.gradientStart;
	const end = hollow ? 'white' : BUTTON_COLORS.gradientEnd;

	return (
		<TouchableOpacity onPress={onPress} style={containerStyle}>
			<LinearGradient
				colors={[borderStart, borderEnd]}
				start={{ x: 0, y: 1 }}
				end={{ x: 1, y: 0 }}
				style={{ borderRadius: 100 }}>
				<View style={{ padding: 4 }}>
					<LinearGradient
						colors={hollow ? ['white', 'white'] : [start, end]}
						start={{ x: 0, y: 1 }}
						end={{ x: 1, y: 0 }}
						style={{ borderRadius: 100 }}>
						<View style={buttonStyle}>
							<Text style={textStyle}>{text}</Text>
						</View>
					</LinearGradient>
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default GradientButton;
