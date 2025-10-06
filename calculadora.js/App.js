import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacion) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResultado('❌ Ingresa dos números válidos');
      return;
    }

    let res = 0;
    switch (operacion) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : '❌ No se puede dividir entre 0';
        break;
      default:
        res = 0;
    }
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora Básica</Text>

      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <View style={styles.botones}>
        <TouchableOpacity style={styles.boton} onPress={() => calcular('+')}>
          <Text style={styles.textoBoton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonResta]} onPress={() => calcular('-')}>
          <Text style={styles.textoBoton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonMulti]} onPress={() => calcular('*')}>
          <Text style={styles.textoBoton}>×</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.boton, styles.botonDiv]} onPress={() => calcular('/')}>
          <Text style={styles.textoBoton}>÷</Text>
        </TouchableOpacity>
      </View>

      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    borderWidth: 2,
    borderColor: '#6c5ce7',
    borderRadius: 10,
    width: '80%',
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  boton: {
    backgroundColor: '#6c5ce7',
    padding: 15,
    borderRadius: 12,
  },
  botonResta: {
    backgroundColor: '#ff7675',
  },
  botonMulti: {
    backgroundColor: '#00b894',
  },
  botonDiv: {
    backgroundColor: '#0984e3',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 22,
    marginTop: 30,
    color: '#2d3436',
    fontWeight: 'bold',
  },
});


