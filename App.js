// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Alert, SafeAreaView, Button, Dimensions } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import SignInStack from "./navigation";
import HomeScreen from "./screens/HomeScreen";
import PostScreen from "./screens/PostScreen";

export default function App() {
  // console.log(useDimensions());
  // const { landscape } = useDeviceOrientation();
  // const handlePress = () => console.log("Pressed")
  return <SignInStack />
}
{/* <HomeScreen /> */ }
{/* <WelcomeScreen /> */ }
    // <View style={{
    //   backgroundColor: "#fff",
    //   flex: 1,
    //   flexDirection: "row",
    //   // horizontal axis
    //   justifyContent: "center",
    //   // main axis
    //   alignItems: "center",
    //   alignContent: "center",
    //   // secondary axis
    //   flexWrap: "wrap"
    // }}>
    //   <View style={{
    //     backgroundColor: "tomato",
    //     // flexBasis: 100,
    //     // flexGrow: 1, flexGrow and shrink are the same as flex just use a negative number to shrink
    //     width: 100,
    //     height: 100,
    //     // top: 40,
    //     // left: 10,
    //     // position: "absolute"
    //   }} />
    //   <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
    //   <View style={{ backgroundColor: "dodgerblue", width: 100, height: 100 }} />
    //   <View style={{ backgroundColor: "greenyellow", width: 100, height: 100 }} />
    // </View>

    // <SafeAreaView style={styles.container}>
    //    <Text numberOfLines={1} onPress={handlePress} >Hello Steve! - a very long long long long long long long long text</Text> */}
    //   <View style={{
    //     backgroundColor: 'dodgerblue',
    //     width: '100%',
    //     height: landscape ? '100%' : '30%',
    //   }}>
    //   </View>
    //   <Text>Hello World</Text>
    //   <TouchableHighlight onPress={() => console.log("Pressed")}>
    //     <Image
    //       blurRadius={1}
    //       source={{
    //         width: 200,
    //         height: 300,
    //         uri: "https://picsum.photos/200/300"
    //       }} />
    //   </TouchableHighlight> */}
    //   <Button title="Click me" onPress={() =>
    //     Alert.prompt("My title", "My message", text => console.log(text))
    //     // Alert.alert("My Title", "My Message",
    //     //   [{ text: "Yes", onPress: () => console.log("Yes") },
    //     //   { text: "No", onPress: () => console.log("Yes") }])
    //   } />
    //   <StatusBar style="auto" />
    // </SafeAreaView>

// const containerStyle = { backgroundColor: "orange" }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
