import React, { useState } from "react";
import {
  StatusBar,
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Notifications from "expo-notifications";
import * as Animatable from "react-native-animatable";

import { styles } from "./styles";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Generator() {
  const [notificationText, setNotificationText] = useState("");
  const [notificationCount, setNotificationCount] = useState("");

  const handleCallNotifications = async (notificationTitle) => {
    const { status } = await Notifications.getPermissionsAsync();

    if (status !== "granted") {
      handlePermissionDenied();
    } else {
      sendNotifications(notificationTitle);
    }
  };

  const handlePermissionDenied = () => {
    Alert.alert(
      "Permissão Negada",
      "Por favor, permita as notificações nas configurações do aplicativo.",
      [
        {
          text: "Configurações",
          onPress: () => {
            Notifications.requestPermissionsAsync().then(
              ({ status: newStatus }) => {
                if (newStatus === "granted") {
                  sendNotifications("");
                } else {
                  Alert.alert(
                    "Permissão Negada",
                    "Você não permitiu as notificações."
                  );
                }
              }
            );
          },
        },
        { text: "Cancelar" },
      ]
    );
  };

  const sendNotifications = async (notificationTitle) => {
    const count = parseInt(notificationCount);

    if (isNaN(count) || count <= 0) {
      Alert.alert(
        "Entrada Inválida",
        "Digite um número inteiro positivo para a quantidade de vezes."
      );
      return;
    }

    const value = parseFloat(notificationText.replace(",", "."));

    if (isNaN(value) || value <= 0) {
      Alert.alert("Entrada Inválida", "Digite um valor válido para a venda.");
      return;
    }

    const total = value * 0.9101 - 2.49;
    for (let i = 0; i < count; i++) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: notificationTitle,
          body: `Valor: R$${total.toFixed(2)}`,
        },
        trigger: null,
      });
    }

    setNotificationText("");
    setNotificationCount("");
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Kiwify Generator</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>𝚅𝚊𝚕𝚘𝚛 𝙳𝚊 𝚅𝚎𝚗𝚍𝚊:</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor da venda"
          keyboardType="numeric"
          value={notificationText}
          onChangeText={(text) => setNotificationText(text)}
        />

        <Text style={styles.title}>𝚀𝚞𝚊𝚗𝚝𝚒𝚍𝚊𝚍𝚎:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade para disparar"
          keyboardType="numeric"
          value={notificationCount}
          onChangeText={(text) => setNotificationCount(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCallNotifications("Venda Aprovada")}
        >
          <Text style={styles.buttonText}>𝙶𝚎𝚛𝚊𝚛 𝚅𝚎𝚗𝚍𝚊</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleCallNotifications("Pix Gerado")}
        >
          <Text style={styles.buttonText}>𝙶𝚎𝚛𝚊𝚛 𝙿𝚒𝚡</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
