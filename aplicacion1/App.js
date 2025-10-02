import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola maestra Alma la tqm pongame 100</Text>
      <StatusBar style="auto" />

      <View style={styles.btnContainer}>
        <Button
          title="Presióname"
          color="#4CAF50"
          onPress={() => Alert.alert("¡Botón presionado!")}
          onPress={() => console.log("Botón presionado")}
          disabled={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20, 
  },
  btnContainer: {
    width: 200, 
  },
});
