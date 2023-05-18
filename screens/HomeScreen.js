import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../assets/medicine-pharmacy.webp';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLeft: () => (
                  <Button
                      icon={<Ionicons name="chevron-back-outline" size={30} color="black" />}
                      title="Back"
                      onPress={() => {
                        navigation.goBack();
                      }}
                  />
              ),
            }}
        />
        <Stack.Screen
            name="Camera"
            component={CameraScreen}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
  );
}

function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Welcome to MedicinePRO!</Text>
        <Text style={styles.subtitle}>
          This tool allows you to simply and rapidly scan handwritten prescriptions!
        </Text>
        <Text style={styles.paragraph}>
          To get started, simply open the camera and take a picture of your prescription. Our
          advanced image recognition technology will scan the prescription and convert it into a
          digital format that can be saved on your device.
        </Text>
        {hasPermission ? (
            <TouchableOpacity
                style={styles.cameraButton}
                onPress={() => navigation.navigate('Camera')}
            >
              <View style={styles.cameraButtonContainer}>
                <Text style={styles.buttonText}>Capture prescription</Text>
              </View>
            </TouchableOpacity>
        ) : (
            <Text>No camera permission</Text>
        )}
      </View>
  );
}

function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraTypePress = () => {
    setType(
        type === Camera.Constants.Type.back
            ? Camera.Constants.Type.front
            : Camera.Constants.Type.back
    );
  };

  const handleCameraButtonPress = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
    }
  };

  return (
      <View style={styles.cameraContainer}>
        <Camera style={styles.cameraView} type={type} ref={cameraRef}></Camera>
        <View style={styles.cameraButtons}>
          <TouchableOpacity style={styles.cameraButton} onPress={handleCameraTypePress}>
            <Ionicons name="camera-reverse-outline" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraButton} onPress={handleCameraButtonPress}>
            <Ionicons name="camera-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const handleCameraButtonPress = async () => {
    if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();

        // Create a new FormData object
        const formData = new FormData();
        formData.append('photo', {
            uri: photo.uri,
            type: 'image/jpeg',
            name: 'photo.jpg',
        });

        // Send the image data to the backend
        fetch('http://127.0.0.1:5000/upload', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                // Process the response from the backend
                console.log(result);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  cameraContainer: {
    flex: 1,
  }, cameraView: {
        flex: 1,
    },
  cameraView: {
    flex: 1,
  },

  cameraButtons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
  },
});

