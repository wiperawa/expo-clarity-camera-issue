import React, { useLayoutEffect, useState } from 'react';
import { Box, HStack } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, FlashMode } from 'expo-camera';

export const CameraScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => setIsFocused(true), 500);
    return () => { setTimeout(() => setIsFocused(false), 1) };
  }, []);

  const takePhotoHandler = () => {
    console.log('take photo');
  }

  return (
      <HStack flex={1}>
        <Box flex={1}>
          {isFocused && <Camera
            flashMode={FlashMode.auto}
            style={StyleSheet.absoluteFillObject}
          />}
        </Box>
        <Box
          flex={1}
          flexDir="row"
          justifyContent="space-between"
          height="15%"
          width="100%"
          bottom={0}
          position="absolute"
          backgroundColor="rgba(0, 0, 0, .5)"
        >
          <Box
            alignSelf="center"
            flex={1}
            alignItems="center"
          >
            <TouchableOpacity
              onPress={takePhotoHandler}
              style={{
                width: 70,
                height: 70,
                bottom: 0,
                borderRadius: 50,
                backgroundColor: '#fff',
              }}
            />
          </Box>
        </Box>
      </HStack>
  );
};