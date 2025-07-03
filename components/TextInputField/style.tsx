import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        marginHorizontal: 30,
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        alignSelf: 'stretch',
        paddingVertical: 10,
        paddingLeft: 8,
    },
    inputField: {
        borderWidth: 2,
        borderColor: '#405564',
        alignSelf: 'stretch',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 8,
        backgroundColor: '#CBD2D9',
    },
    font: {
        fontFamily: 'Karla-bold',
        fontSize: 20,
        fontWeight: '500',
    }
});