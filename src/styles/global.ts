import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    textBorder: {
        color: '#FFFFFF',
        textShadowColor: '#000',
        textShadowRadius: 10,
    },
    dropShadow: {
        elevation: 2,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});