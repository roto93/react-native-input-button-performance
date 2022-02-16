import { StatusBar } from 'expo-status-bar';
import { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import Box from './src/Box'
import Key from './src/Key';

export default function App() {

  const [boxArray, setBoxArray] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]);

  const keyArray = [{ t: '1' }, { t: '2' }, { t: '3' }, { t: '4' }, { t: '5' }, { t: '6' }, { t: '1' }, { t: '2' }, { t: '3' }, { t: '4' }, { t: '5' }, { t: '6' }, { t: '1' }, { t: '2' }, { t: '3' }, { t: '4' }, { t: '5' }, { t: '6' }, { t: '1' }, { t: '2' }, { t: '3' }, { t: '4' }, { t: '5' }, { t: '6' }, { t: '1' }, { t: '2' }, { t: '3' }, { t: '4' }, { t: '5' }, { t: '6' },]

  const setBoxArrayCallback = useCallback(setBoxArray, [])

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginBottom: 60, width: '80%', flexWrap: 'wrap' }}>
        {boxArray.map((item, index) => <Box key={index} text={item.t} />)}
      </View>

      <View style={{ flexDirection: 'row', width: '75%', flexWrap: 'wrap' }}>
        {keyArray.map((item, index) => <Key key={index} text={item.t} setBoxArray={setBoxArrayCallback} />)}
      </View>
      <Button title="clear" onPress={() => { setBoxArray([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]) }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
