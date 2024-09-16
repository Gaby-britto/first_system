import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Texto() {
  const [texto, setTexto] = useState('Texto do novo componente');

  useEffect(() => {
    setTexto('O melhor Bolo')
  }, []);
  return <Text style={estilos.texto}>{texto}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    color: "#C71585",
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 8,
    marginLeft: 21
  },
});
