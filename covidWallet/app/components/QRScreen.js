import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,

} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import QRCodeScanner from 'react-native-qrcode-scanner';


const QRScreen = () => {

  const [result, setResult] = useState()
  //This method gives the value of the QR Code
  onSuccess = (e) => {
    setResult(e.data)
    //TODO: Parse QR Values Here
    Alert.alert("The QR Code value is " + e.data)
  }

  return (

    <View style={styles.MainContainer}>


      <QRCodeScanner
        reactivate={true}
        showMarker={true}
        customMarker={
          <View style={
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent'
            }
          }>
            <View style={
              {
                height: 250,
                width: 250,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: 'transparent'
              }
            } />
          </View>
        }
        ref={(node) => { this.scanner = node }}
        onRead={this.onSuccess}
        topContent={
          <Text style={styles.textBold}>
            Point your camera to a QR code to scan
                  </Text>
        }

      />

    </View>



  );
};

const styles = StyleSheet.create({

  sectionContainer: {
    backgroundColor: Colors.black,
  },
  textBold: {
    fontSize: 20,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff'
  },
  buttonText: {
    fontSize: 21,
    color: '#4178CD'
  },
  buttonTouchable: {
    padding: 16
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: 'red',
  },

  MainContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Imagesize: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40
  },


  RoundButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4178CD',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: 150,
    borderRadius: 20,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 15,
    width: 15,
    marginLeft: 15

  },
  TextGuide: {
    color: 'black',
    marginTop: 14,
    marginLeft: 5,
    marginBottom: 30,
  },
  TextStyle: {
    color: 'white',
    marginTop: 14,
    marginLeft: 5,
    marginBottom: 15,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
});

export default QRScreen;