import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../assets/medicine-pharmacy.webp';

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [cameraRef, setCameraRef] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraButtonPress = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log(photo);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to MedicinePRO!</Text>
      <Text style={styles.subtitle}>This tool allows you to simply and rapidly scan handwritten prescriptions!</Text>
      <Text style={styles.paragraph}>To get started, simply open the camera and take a picture of your prescription. Our advanced image recognition technology will scan the prescription and convert it into a digital format that can be saved on your device.</Text>
      {hasPermission ? (
        <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('Camera')}>
          <View style={styles.cameraButtonContainer}>
            <Ionicons name="camera-outline" size={30} color="white" />
            <Text style={styles.cameraButtonText}>Capture prescription</Text>
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

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
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

  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.cameraView} type={type} ref={(ref) => setCameraRef(ref)}></Camera>
      <View style={styles.cameraButtons}>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraTypePress}>
          <Ionicons name="camera-reverse-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraButtonPress}>
          <Ionicons name="camera-outline" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HomeScreenWrapper({ navigation }) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#12A5DA',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#90BA55',
    textAlign: 'center',
  },
  logo: {
    width: 180,
    height: 100,
    marginTop: 20,
  },
  cameraButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#90BA55',
    borderRadius: 5,
    width: 250,
  },
  cameraIcon: {
    width: 30,
    height: 30,
  },
  cameraButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cameraButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 18,
    color: '#878787',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#90BA55',
  },
  

});
