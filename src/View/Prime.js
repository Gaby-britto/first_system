import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime({titulo, descricao, preco}) {
  return (
    <>
      <View style={style.cardCompra}>
        <Text style={style.nomeLista}>{titulo}</Text>
        <Text style={style.descricao}>
        {descricao}
        </Text>
        <Text Text style={style.preco}>
            {preco}
        </Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  nomeLista: {
    fontWeight: "bold",
    color: "#C71585",
    paddingTop: 20,
    marginLeft: 20,
  },
  cardCompra: {
    width: 350,
    height: 250,
    backgroundColor: "#DCDCDC",
    marginTop: 20,
    borderRadius: 5,
    marginLeft: 20
  },
  descricao: {
    paddingTop: 20,
    color: "black",
    marginLeft: 20,
    lineHeight: 20
  },
  preco: {
    color: "#C71585",
    lineHeight: 20,
    paddingTop: 50,
    fontSize: 26,
    marginLeft: 20,
    fontWeight: "bold",
  },
 
});
