import React, { useState, useEffect } from 'react';

import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Button, FlatList } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const DATA = [
  {
    id: '000',
    time: 'Time1',
  },
  {
    id: '00',
    time: 'Time2',
  },
  {
    id: '0',
    time: 'Time3',
  },
  
];


const Item = ({ id, time }) => (
  <View style={styles.item}>
    <Text style={styles.time}>{id}{time}</Text>
  </View>
);

const App = () => {
  let data = [];
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [takeTime, setTakeTime] = useState(data);


  const renderItem = ({ item }) => (
    <Item id = {item.id} 
          time = {item.time} />
  );

  
  const flyingFinish = () => {
    setTakeTime((data) => [...data, currentTime])
  };




  useEffect(() => {


    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let h = new Date().getHours() + 3;
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ms = new Date().getMilliseconds();

    date = checkTime(date);
    month = checkTime(month);
    h = checkHour(h);
    m = checkTime(m);
    s = checkTime(s);
    ms = checkMs(ms);

    function checkHour(a) {
      if      (a === 24) { a = 0 }
      else if (a === 25) { a = 1 }
      else if (a === 26) { a = 2 }
      else if (a === 27) { a = 3 }

      if (a < 10) { a = "0" + a }

      return a;
    }

    function checkTime(i) {
      if (i < 10) { i = "0" + i }
      return i;
    }

    function checkMs(x) {
      if (x < 10) { x = "00" + x }
      if (x >= 10 && x < 100) { x = "0" + x }
      return x;
    }

    setTimeout(() => {
      setCurrentTime(h + ":" + m + ":" + s + ":" + ms);
    }, 1);


    setCurrentDate(date + "/" + month + "/" + year);

  });


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            Tarih ve Saat
          </Text>
          <Text style={styles.textStyle}>
            {currentDate}
          </Text>
          <Text style={styles.textStyle}>
            {currentTime}
          </Text>

          <Button
        title="Flying Finish"
        color="#f194ff"
        onPress={() => {
          Alert.alert('Button with adjusted color pressed')
          {flyingFinish}
        }}
      />
      <Separator />
          <TouchableOpacity
            style={styles.button}
            onPress={flyingFinish}
            
          >
            <Text>Flying Finish</Text>
          </TouchableOpacity>

          <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

            <View>
              <Text>
              {takeTime}

              </Text>

            </View>

        </View>

        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          TOSFED Krono
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          By Emrah Aksoy
        </Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  time: {
    fontSize: 20,
    justifyContent:'space-evenly',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default App;

