import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("¡Botón presionado!", "Maestra Alma, la tqm 😎 pongame 100");
    console.log("Botón presionado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola maestra Alma, la tqm 😍 ¡Póngame 100!</Text>
      <StatusBar style="auto" />

      <View style={styles.btnContainer}>
        <Button
          title="Presióname"
          color="#4CAF50"
          onPress={handlePress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  texto: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  btnContainer: {
    width: 200,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
});
