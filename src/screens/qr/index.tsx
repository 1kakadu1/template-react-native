import { useState } from "react";
import { IQrCodePropsHomeScreenNavigationProp } from "../../navigation/navigation.model";
import { StyleSheet, Text, View } from "react-native";
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from "react-native-vision-camera";

export default function QrCodeScreen( { navigation, route }: IQrCodePropsHomeScreenNavigationProp) {
    const device = useCameraDevice('back')
    const { hasPermission, requestPermission} = useCameraPermission()
    const [latestScannedData, setLatestScannedData] = useState<string | null | undefined>(null);
  
    const codeScanner = useCodeScanner({
      codeTypes: ['qr', 'ean-13'],
      onCodeScanned: (codes) => {
        setLatestScannedData(codes[0].value);
        console.log(`Scanned ${codes.length} codes!`)
      }
    })
    console.log (device, hasPermission)
    return (
    
        <View style={styles.container}>
        {
          device  && hasPermission && (
            <Camera   
            style={StyleSheet.absoluteFill}   
            device={device}
            isActive={true} 
            codeScanner={codeScanner} />
          )
        }
        {latestScannedData && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
            <Text style={styles.resultText}>{latestScannedData}</Text>
          </View>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    resultContainer: {
      position: 'absolute',
      bottom: 40, // Adjust the position to provide space between the camera view and the result container
      left: 20,
      right: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 10,
      borderRadius: 5,
    },
    resultTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'white',
    },
    resultText: {
      fontSize: 14,
      color: 'white',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });