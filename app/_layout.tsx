import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import 'react-native-reanimated';

  
export default function RootLayout() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operador, setOperador] = useState(null);
  const [resultado, setResultado] = useState("");

  const adicionarNumero = (num) => {
    if (operador === null) {
      setNumero1(numero1 + num);
    } else {
      setNumero2(numero2 + num);
    }
  };

  const calcular = () => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    let resultado = 0;

    if (operador === "+") resultado = n1 + n2;
    if (operador === "-") resultado = n1 - n2;
    if (operador === "*") resultado = n1 * n2;
    if (operador === "/") resultado = n1 / n2;

    setResultado(resultado);

    setNumero1(String(resultado));
    setNumero2("");
    setOperador(null);

  };

  const raizQuadrada = () => {
    const n1 = parseFloat(numero1);
    const resultado = Math.sqrt(n1);
    setResultado(resultado);
  };

  const limpar = () => {
    setNumero1("");
    setNumero2("");
    setOperador(null);
    setResultado("");
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.display}>
        {numero1} {operador} {numero2}
      </Text>

      {resultado !== "" && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}

      <View style={styles.row}>
        <Botao texto="1" onPress={() => adicionarNumero("1")} />
        <Botao texto="2" onPress={() => adicionarNumero("2")} />
        <Botao texto="3" onPress={() => adicionarNumero("3")} />
        <Botao texto="+" onPress={() => setOperador('+')} />
      </View>

      <View style={styles.row}>
        <Botao texto="4" onPress={() => adicionarNumero("4")} />
        <Botao texto="5" onPress={() => adicionarNumero("5")} />
        <Botao texto="6" onPress={() => adicionarNumero("6")} />
        <Botao texto="-" onPress={() => setOperador('-')} />
      </View>

      <View style={styles.row}>
        <Botao texto="7" onPress={() => adicionarNumero("7")} />
        <Botao texto="8" onPress={() => adicionarNumero("8")} />
        <Botao texto="9" onPress={() => adicionarNumero("9")} />
        <Botao texto="*" onPress={() => setOperador('*')} />
      </View>

      <View style={styles.row}>
        <Botao texto="0" onPress={() => adicionarNumero("0")} />
        <Botao texto="√" onPress={raizQuadrada} />
        <Botao texto="=" onPress={calcular} />
        <Botao texto="/" onPress={() => setOperador('/')} />
      </View>

      <View style={styles.row}>
        <Botao texto="C" onPress={limpar} />
      </View>

    </SafeAreaView>
  );
}

function Botao({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  display: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  resultado: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  botao: {
    flex: 1,
    backgroundColor: "#ffc7f6ff",
    margin: 5,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  texto: {
    fontSize: 20,
  },
});
