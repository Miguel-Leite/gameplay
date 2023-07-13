import { View } from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";


export function Home() {
  return (
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
      </View>
      <View>
        <CategorySelect />
      </View>
    </Background>
  );
}