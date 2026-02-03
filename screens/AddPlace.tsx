import PlaceForm from '@/components/places/PlaceForm';
import { StyleSheet } from 'react-native';

function AddPlace() {
  return <PlaceForm />;
}

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
