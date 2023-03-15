import { useState } from "react";
import { Dimensions, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { styles } from "../style";
import Svg, { Image, Ellipse, ClipPath } from 'react-native-svg';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, withTiming, withDelay, withSequence, withSpring } from 'react-native-reanimated';




export default function Page() {

  const [isRegistering, setIsRegistering] = useState(false)


  const imagePosition = useSharedValue(1);
  const scalePosition = useSharedValue(1);

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
    setIsRegistering(true)
  }
  const logoutHandle = () => {
    imagePosition.value = 0
    setIsRegistering(false)
  }

  const handleClose = () => {
    imagePosition.value = 1
  }

  const handleCloseStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360])
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 1000 }),
      transform: [{ rotate: withTiming(interpolation + "deg", { duration: 1500 }) }]
    }
  })


  const handleFormStyle = useAnimatedStyle(() => {
    return {
      opacity: imagePosition.value === 0 ? withDelay(400, withTiming(1, { duration: 1000 })) : withTiming(0, { duration: 500 })
    }
  })

  const buttonScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scalePosition.value }]
    }
  })






  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>

        <Svg height={height} width={width}>
          <ClipPath id="clipPathId" clipRule="evenodd">
            <Ellipse rx={height} ry={height} cx={width / 2} />
          </ClipPath>
          <Image href={require('../asset/star.jpg')} width={width} height={height} preserveAspectRatio="xMidYMid slice" clipPath="url(#clipPathId)" />
        </Svg>

        <Animated.View style={[styles.Xcontainer, styles.shadow, handleCloseStyle]}>
          <Text onPress={handleClose} style={styles.Xtext}>X</Text>
        </Animated.View>

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

      <Animated.View style={[styles.formContainer, handleFormStyle]}>
        {!isRegistering && <TextInput placeholder="full name" placeholderTextColor="black" style={styles.textInput} />}
        <TextInput placeholder="email" placeholderTextColor="black" style={styles.textInput} />
        <TextInput placeholder="password" placeholderTextColor="black" style={styles.textInput} />
        <Animated.View style={[styles.btnContainer, { marginTop: 2 }, buttonScaleStyle]}>
          <Pressable onPress={() => scalePosition.value = withSequence(withSpring(1.2), withSpring(1))}>
            <Text style={[styles.shadow, styles.btn]}>{!isRegistering ? "Register" : "Log In"}</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>

    </Animated.View>
  );
}

