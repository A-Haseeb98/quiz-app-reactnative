import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import QuizList from '../../components/list';

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
            <View style={styles.list} >
                <Text style={styles.head}> Choose Quiz Type </Text>
                <QuizList text='Art and Literature' />
                <QuizList text='Science and Nature' />
                <QuizList text='General Science' />
                <QuizList text='Sports and Entertainment' />
                <QuizList text='Art and Literature' />
                <QuizList text='Science and Nature' />
                <QuizList text='General Science' />
                <QuizList text='Sports and Entertainment'/>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text>Start Quiz</Text>
            </TouchableOpacity>
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
        marginTop: '5%',
        marginBottom: '5%'
    },
    head:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        marginVertical: '0.4%'
    }
    ,
    section: {
        justifyContent: 'center'
    },
    list: {
        flex: 0.55
    },
    btn: {
        flex: 0.10,
        backgroundColor: 'yellow',
        width: '90%',
        alignSelf: 'center',
        marginVertical: '5%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'

    },

})

export default Home;
