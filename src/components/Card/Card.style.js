import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E6E6FA",
        padding: 20,
        margin: 5,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        borderRadius: 10,  
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain',
    },

    title: {
        fontWeight: '700',
        fontSize: 20,
    },
    price: {
        marginTop: 5,
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 17,
    },
    innerContainer: {
        padding: 5
    },
    inStock: {
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
    },


})