import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import { styles } from "./styles";
import { propsStack } from "../../routes/Model";

export default function Home() {
  const { navigate } = useNavigation<propsStack>();

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerLogo}
      >
        <Animatable.Image
          source={require("../../assets/logo.jpg")}
          style={{ width: "50%" }}
          resizeMode="contain"
        />
      </Animatable.View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Fake Kiwify Notification</Text>
        <Text style={styles.message}>By @M1113r</Text>
        <TouchableOpacity
          style={styles.buttonAcessar}
          onPress={() => navigate("Generator")}
        >
          <Text style={styles.buttonText}>𝙴𝚗𝚝𝚛𝚊𝚛</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
