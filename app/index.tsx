import IconButton from "@/components/UI/IconButton";
import { Colors } from "@/constants/colors";
import AddPlace from "@/screens/AddPlace";
import AllPlaces from "@/screens/AllPlaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500,
        },
        headerTintColor: Colors.gray700,
        contentStyle: {
          backgroundColor: Colors.gray700,
        },
      }}>
        <Stack.Screen name="index" component={AllPlaces} 
        options={({navigation}) => ({ 
        title: 'All Places', 
        headerRight: ({tintColor}) => <IconButton icon="add" size={24} color={tintColor || '#fff'} onPress={() => navigation.navigate('add-place')} /> })} />
        <Stack.Screen name="add-place" component={AddPlace} options={{ title: 'Add Place' }} />
      </Stack.Navigator>

    </>

  );
}
