import { Colors } from '@/constants/colors';
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from 'expo-image-picker';
import { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import OutlinedButton from '../UI/OutlinedButton';

function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  async function verifyPermissions() {
    if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    if (await verifyPermissions()) {
      const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
      });
      if (!image.canceled) {
        setImageUri(image.assets[0].uri);
      }
    }
  }
  return (
    <View>
      <View style={styles.imagePreview}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.primary700,
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    borderRadius: 6,
  },
  button: {
    marginTop: 8,
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
