import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <>
    <View style={style.topo}>
        <Text style={style.titleTopo}>System Details</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
    topo: {
        width: "100%",
        height: 150,
        backgroundColor: "#C71585",
      },
      titleTopo: {
        width: "100%",
        textAlign: "center",
        color: "white",
        paddingTop: 60,
        fontSize: 20,
        fontWeight: "bold",
      },
})
