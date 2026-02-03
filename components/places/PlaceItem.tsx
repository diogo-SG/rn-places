import Place from "@/models/Place";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PlaceItemProps {
    place: Place;
    onSelect: () => void;
}

export default function PlaceItem({place, onSelect}: PlaceItemProps) {
    return (
        <Pressable onPress={onSelect} style={styles.placeItem}>
            <Image source={{uri: place.imageUri}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{place.title}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    placeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: '#323232',
    },
    image: {
        flex: 1,
        borderRadius: 6,
        height: 100,
    },
    info: {
        flex: 2,
        padding: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
    },
    address: {
        fontSize: 12,
        color: '#fff',
    },
});