import React from 'react';
import { Center, Box, Text, Button, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const DetailScreen = ({ navigation }) => {
  return (
    <Center flex={1} bg="lightGreen.100" px="3">
      <Box
        bg="white"
        p="5"
        rounded="lg"
        shadow="4"
        borderColor="coolGray.200"
        borderWidth="1"
        maxW="80"
      >
        <Icon as={MaterialIcons} name="info" size="10" color="green.500" mb="4" />
        <Text fontSize="lg" bold mb="2" color="coolGray.800" textAlign="center">
          Halaman Detail
        </Text>
        <Text fontSize="sm" color="coolGray.600" textAlign="center">
          Anda telah berhasil berpindah halaman menggunakan React Navigation!
        </Text>
        <Button colorScheme="green" mt="4" onPress={() => navigation.goBack()}>
          Kembali ke Halaman Utama
        </Button>
      </Box>
    </Center>
  );
};

export default DetailScreen;
