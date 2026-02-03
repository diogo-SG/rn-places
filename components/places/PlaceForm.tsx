import { Colors } from '@/constants/colors';
import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ImagePicker from './ImagePicker';
import LocationPicker from './LocationPicker';

function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredImageUri, setEnteredImageUri] = useState('');
  const [enteredAddress, setEnteredAddress] = useState('');
  const [enteredLocation, setEnteredLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={enteredTitle}
          onChangeText={(text) => setEnteredTitle(text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Image</Text>
        <TextInput
          value={enteredImageUri}
          onChangeText={(text) => setEnteredImageUri(text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Address</Text>
        <TextInput
          value={enteredAddress}
          onChangeText={(text) => setEnteredAddress(text)}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.label}>Location</Text>
        <TextInput
          value={enteredLocation?.lat.toString() || ''}
          onChangeText={(text) =>
            setEnteredLocation({
              lat: parseFloat(text),
              lng: enteredLocation?.lng || 0,
            })
          }
          style={styles.input}
        />
        <TextInput
          value={enteredLocation?.lng.toString() || ''}
          onChangeText={(text) =>
            setEnteredLocation({
              lat: enteredLocation?.lat || 0,
              lng: parseFloat(text),
            })
          }
          style={styles.input}
        />
      </View>
      <View>
        <Button title="Save" onPress={() => {}} />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary700,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
