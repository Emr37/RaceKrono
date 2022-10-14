import React, { useState, useEffect } from 'react';

import { ImageBackground, Image, SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Button, FlatList, Alert, TextInput, ScrollView } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);




const App = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [takeTime, setTakeTime] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);










  const flyingFinish = () => {
    setTakeTime((takeTime) => [...takeTime, currentTime])
  };




  useEffect(() => {


    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ms = new Date().getMilliseconds();

    date = checkTime(date);
    month = checkTime(month);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    ms = checkMs(ms);



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
      <ImageBackground opacity={0.5} source={require('./assets/finish_flag.png')} resizeMode='contain' style={[styles.image,]}>



        <View style={styles.container}>


          <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'space-around', backgroundColor: '#bbbbbb99', flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('./assets/finish_flag.png')} style={{ height: 20, width: 20 }} />

              <Text style={styles.textStyle}>
                Flying Finish
              </Text>
              <Image source={require('./assets/chronometer.png')} style={{ height: 20, width: 20 }} />
            </View>
            <Separator />
            <View>
              <Text style={[styles.textStyle, { backgroundColor: '#bbbbbb99' }]}>
                {currentDate}
              </Text>

            </View>

            <Separator />

            <TouchableOpacity
              style={styles.button}
              onPress={flyingFinish}
            >

              <Text style={styles.time}>{currentTime}</Text>
            </TouchableOpacity>

            <FlatList
              data={takeTime}

              renderItem={({ item }) => (
                <View style={styles.item}>

                  <TextInput
                    keyboardType='decimal-pad'
                    style={[styles.textStyle, { color: '#eeeeee' }]}
                    placeholder="Kapı Numarası"
                    placeholderTextColor={'white'}
                  />

                  <Text style={[styles.textStyle, { color: '#eeeeee' }]}>
                    {item}
                  </Text>
                </View>
              )
              }
            />
          </View>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: '#aaaaaa',
            }}>
            Race Krono
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: '#aaaaaa'
            }}>
            By Emrah Aksoy
          </Text>

        </View>
      </ImageBackground>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,



  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
  button: {
    backgroundColor: '#bedebe99',
    marginBottom: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50


  },
  item: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#D2001A99',
    padding: 2,
    marginVertical: 2,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',


  },
  time: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',

  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',





  }
});

export default App;

