// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   ScrollView,
// } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import { Button } from 'react-native-elements';

// const GenerateQRCode = ({ member }) => {
//   if (!member) {
//     return <Text>Loading...</Text>;
//   }

//   const [qrValue, setQrValue] = useState(JSON.stringify(member));

//   const regenerateQRCode = () => {
//     const newValue = JSON.stringify({ ...member, timestamp: Date.now() });
//     setQrValue(newValue);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.header}>Member QR Code</Text>
//       <View style={styles.qrCodeContainer}>
//         <QRCode value={qrValue} size={200} />
//       </View>
//       <Text style={styles.memberName}>{member.memberName}</Text>
//       <Text style={styles.memberId}>Member ID: {member.memberId}</Text>
//       <Button
//         title="Regenerate QR Code"
//         onPress={regenerateQRCode}
//         buttonStyle={styles.regenerateButton}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F0F0F0',
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#4b9ac9',
//   },
//   qrCodeContainer: {
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     padding: 20,
//     marginBottom: 20,
//   },
//   memberName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: '#333',
//   },
//   memberId: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#333',
//   },
//   regenerateButton: {
//     backgroundColor: '#4b9ac9',
//   },
// });

// export default GenerateQRCode;
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Button } from 'react-native-elements';

const GenerateQRCode = () => {
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    generateRandomQRCode();
  }, []);

  const generateRandomQRCode = () => {
    const randomValue = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setQrValue(randomValue);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.background}>
        <Text style={styles.header}>QR Code</Text>
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrValue || 'default'} size={200} />
        </View>
        <Button
          title="Regenerate QR Code"
          onPress={generateRandomQRCode}
          buttonStyle={styles.regenerateButton}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#4b9ac9',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  qrCodeContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
  },
  regenerateButton: {
    backgroundColor: '#6CBEDE',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
  },
});

export default GenerateQRCode;
