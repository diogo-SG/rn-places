import { FlatList, StyleSheet } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({places}: {places: any[]}) {
    return (
       <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PlaceItem place={item} />}
       />
    );
}

export default PlacesList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }});