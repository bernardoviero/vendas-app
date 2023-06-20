import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 24px;
  color: red;
`;

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Teste1</Text>
        <TextNew>Teste2</TextNew>
      </View>
    </SafeAreaView>
  );
};

export default App;
