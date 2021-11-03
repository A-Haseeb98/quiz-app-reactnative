import React from "react";
import { StyleSheet, View,Text } from "react-native";

function QuizList(props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor:'white',
            marginVertical: "1%",
            marginHorizontal: '3%',
            borderRadius: 10,
            paddingVertical: '1%',
            paddingHorizontal: '5%',
        },
        text:{
            fontSize: 20,
            fontFamily: "roboto",
            color: 'black'
        }

    }
)

export default QuizList