import React from 'react';
import { Box, Button, Text, Center, VStack, HStack, Image, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const Example = () => {

};

const HomeScreen = ({ navigation }) => {
  return (
    <Center flex={1} bg="lightBlue.100" px="3">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        bg="white"
        shadow="3"
      >
        <VStack space={3} p="4">
          <HStack space={2} alignItems="center">
            <Icon as={MaterialIcons} name="home" size="6" color="blue.500" />
            <Text fontSize="lg" bold color="coolGray.800">
              Selamat Datang di Aplikasi!
            </Text>
          </HStack>
          <Text fontSize="sm" color="coolGray.600">
            Tampilan ini menggunakan NativeBase untuk membuat UI yang modern dan menarik.
          </Text>
          <Image
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
            size="xl"
          />
          <Button colorScheme="blue" mt="2" onPress={() => navigation.navigate('Detail')}>
            Pergi ke Halaman Detail
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

const App = ({ navigation }) => {
  return (
    <>
      <Example />
      <HomeScreen navigation={navigation} />
    </>
  );
};

export default App;
