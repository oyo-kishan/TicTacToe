import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Box = (props) => {
    const state=props.currentState;
  return (
    <TouchableOpacity 
       onPress={()=>{
           if(state!==undefined)return props.onAgainClicked();
           return props.onClicked();
       }}
       style={styles.container}>
        <Text style={styles.text}>{state==undefined?'':state}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 5,
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default Box;
