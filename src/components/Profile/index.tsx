import { Text, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";


export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/Miguel-Leite.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá
          </Text>
          <Text style={styles.username}>
            Miguel
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de victória
        </Text>
      </View>
    </View>
  );
}