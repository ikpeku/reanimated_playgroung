import { View, Dimensions, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { styles } from "../style";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming } from 'react-native-reanimated';



export default function Page() {
  const imagePosition = useSharedValue(1);
  const { height, width } = Dimensions.get("screen")

  const imageAnimatedStyle = useAnimatedStyle(() => {

    const scale = interpolate(imagePosition.value, [0, 1], [- height / 2, 0]);
    return {
      transform: [{ translateY: withTiming(scale, { duration: 1000 }) }],
    }
  })


  const hideModal = useAnimatedStyle(() => {
    const interpolated = interpolate(imagePosition.value, [0, 1], [150, 0])
    return {
      opacity: withTiming(imagePosition.value, { duration: 1000 }),
      transform: [{ translateY: withTiming(interpolated, { duration: 1500 }) }]
    }
  })

  const loginHandle = () => {
    imagePosition.value = 0
  }
  const logoutHandle = () => {
    imagePosition.value = 0
  }

  const handleClose = () => {
    imagePosition.value = 1
  }






  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>

        <Svg height={height} width={width}>
          <ClipPath id="clipPathId" clipRule="evenodd">
            <Ellipse rx={height} ry={height} cx={width / 2} />
          </ClipPath>
          <Image href={require('../asset/star.jpg')} width={width} height={height} preserveAspectRatio="xMidYMid slice" clipPath="url(#clipPathId)" />
        </Svg>

        <Pressable onPress={handleClose} style={[styles.Xcontainer, styles.shadow]}>
          <Text style={styles.Xtext}>X</Text>
        </Pressable>

      </Animated.View>


      <Animated.View style={[styles.btnsContainer, hideModal]}>
        <Pressable onPress={loginHandle} style={styles.btnContainer}>
          <Text style={styles.btn}>Log In</Text>
        </Pressable>
        <Pressable onPress={logoutHandle} style={[styles.btnContainer, { marginTop: 2 }]}>
          <Text style={styles.btn}>Register</Text>
        </Pressable>
      </Animated.View>

      {/* register form */}
      {/*       
      <View style={styles.formContainer}>
        <TextInput placeholder="full name" placeholderTextColor="black" style={styles.textInput} />
        <TextInput placeholder="email" placeholderTextColor="black" style={styles.textInput} />
        <TextInput placeholder="password" placeholderTextColor="black" style={styles.textInput} />
        <Pressable style={[styles.btnContainer, { marginTop: 2 }]}>
          <Text style={[styles.shadow, styles.btn]}>Register</Text>
        </Pressable>
      </View> */}

    </Animated.View>
  );
}

