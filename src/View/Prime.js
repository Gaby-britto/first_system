import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Prime() {
  return (
    <>
      <View style={style.topo}>
        <Text style={style.titleTopo}>System Details</Text>
      </View>
      <View style={style.cardCompra}>
        <Text style={style.nomeLista}>Bolo de Morango</Text>
        <Text style={style.descricao}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text Text style={style.preco}>
            R$ 40,00
        </Text>
      </View>
      <View style={style.cardCompra}>
        <Text style={style.nomeLista}>Bolo de Cereija</Text>
        <Text style={style.descricao}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text Text style={style.preco}>
            R$ 60,00
        </Text>
      </View>
      <View style={style.cardCompra}>
        <Text style={style.nomeLista}>Bolo de Amora</Text>
        <Text style={style.descricao}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text Text style={style.preco}>
            R$ 30,00
        </Text>
      </View>
      <View>
        <Text style={style.title}> OS MELHORES BOLOS</Text>
        <Text style={style.subTitle}> Você só encontra aqui</Text>
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
    paddingTop: 20,
    fontSize: 26,
    marginLeft: 20,
    fontWeight: "bold",
  },
  title: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: "bold",
    color: "#C71585",
    marginLeft: 50
  },
  subTitle:{
    marginTop: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "#DB7093",
    marginLeft: 100
  }
});
