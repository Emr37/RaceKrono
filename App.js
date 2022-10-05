import React, {useState, useEffect} from 'react';
 
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

 
const App = () => {
  let [currentDate, setCurrentDate] = useState('');
  let [currentTime, setCurrentTime] = useState('');

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
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    ms = checkMs(ms);

    function checkTime(i){
      if (i < 10){i = "0" + i}
      return i;
    }

    function checkMs(x){
      if (x < 10){x = "00" + x}
      if (x >= 10 && x < 100){x = "0" + x}
      return x;
    }

      setTimeout(() => {
        setCurrentTime( h + ":" + m + ":" + s + ":" + ms);
      }, 1);
      

      setCurrentDate(date + "/" + month + "/" + year);

  });
  


   

 
  return (
    <SafeAreaView style={{flex: 1}}>
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
});

export default App;

