import React from 'react';
import { View, StyleSheet, Text } from "react-native";

function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>icon </Text>
                <Text>Quiz App</Text>
                <Text>icon</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.section}>
                    <Text>Question Count</Text>
                    <Text> 230</Text>

                </View>
                <View style={styles.section}>
                    <Text>Your Ranking</Text>
                    <Text>1250</Text>
                </View>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple'
    }
    ,
    header: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'orange',
        color: 'white',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        borderColor: 'black', // if you need 
        borderWidth: 1,
        overflow: 'hidden',
        shadowColor: 'brown',
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    box: {
        flex: 0.15,
        backgroundColor: 'orange',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'space-evenly',
        width: "90%",
        alignSelf: 'center',
        marginTop: '20%',
        marginBottom: '30%'
    },
    section:{
        backgroundColor: 'grey',
        justifyContent: 'center'
    }
})

export default Home;
