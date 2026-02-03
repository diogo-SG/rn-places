import PlacesList from "@/components/places/PlacesList";
import { StyleSheet } from "react-native";

function AllPlaces() {
    return <PlacesList places={[]} />
}

export default AllPlaces;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }});