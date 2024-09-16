import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Prime from './src/View/Prime';
import Texto from './src/Components/Texto';
import Header from './src/Components/Header';
import Contador from './src/Components/Contador';


export default function App() {
  return (
    <ScrollView>
      <Header/>
      <Prime
      titulo = "Bolo de Morango"
      descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      preco = " R$ 40,00"
      />
      <Prime
      titulo = "Bolo de Cereija"
      descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      preco = " R$ 60,00"
      />
      <Prime
      titulo = "Bolo de Amora"
      descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      preco = " R$ 30,00"
      />
      <Prime
      titulo = "Bolo de Framboesa"
      descricao = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      preco = " R$ 20,00"
      />
     <Texto/>
     <Contador/>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

