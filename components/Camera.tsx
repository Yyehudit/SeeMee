import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { View, Button, Text } from 'react-native';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(Camera.CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={cameraType}>
        <Button
          title="Flip Camera"
          onPress={() =>
            setCameraType(
              cameraType === Camera.CameraType.back
                ? Camera.CameraType.front
                : Camera.CameraType.back
            )
          }
        />
      </Camera>
    </View>
  );
};

export default CameraScreen;
