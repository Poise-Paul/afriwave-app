import LogoHeader from "@/components/LogoHeader";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const AfriwaveUse = (props: Props) => {
  const [selectedUses, setSelectedUses] = useState<string[]>([]);

  const afriUses = [
    {
      name: "Money Exchange",
      icon: <FontAwesome name="exchange" size={24} color="#2DC85B" />,
    },
    {
      name: "Virtual Cards",
      icon: <FontAwesome name="credit-card-alt" size={24} color="#2DC85B" />,
    },
    {
      name: "Money Transfer",
      icon: <FontAwesome name="send" size={24} color="#2DC85B" />,
    },
    {
      name: "Build Credit",
      icon: <Octicons name="graph" size={24} color="#2DC85B" />,
    },
    {
      name: "Multi-Currency Wallets",
      icon: <FontAwesome5 name="wallet" size={24} color="#2DC85B" />,
    },
    {
      name: "Tuition Payment",
      icon: <MaterialCommunityIcons name="school" size={24} color="#2DC85B" />,
    },
  ];
  return (
    <SafeAreaView className="bg-black flex-1">
      <LogoHeader />
      <View className="flex-1 my-10 flex-col gap-10 p-5">
        <Text className="text-white text-center text-3xl font-semibold">
          What do you want to use Afriwave for?
        </Text>
        <Text className="text-gray-400 text-lg text-center">
          Select all that apply to personalize your experience
        </Text>
        <View className="flex gap-5 mx-auto flex-row flex-wrap">
          {afriUses.map((x, key) => (
            <TouchableOpacity
              onPress={() => setSelectedUses((prev) => [...prev, x.name])}
              key={key}
              className={`bg-[#1A1A1A]  p-5 gap-4 flex flex-col items-center justify-center w-[47%]`}
            >
              <View className="flex justify-between w-full flex-row">
                <Text></Text>
                {x.icon}
                <MaterialCommunityIcons
                  name={
                    selectedUses.includes(x.name)
                      ? "checkbox-marked-circle"
                      : "checkbox-blank-circle-outline"
                  }
                  size={24}
                  color={selectedUses.includes(x.name) ? "#2DC85B" : "#6b7280"}
                />
              </View>

              <Text className="text-white text-center">{x.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => router.push("/AccountCreatedScreen")}
          className="bg-primary p-4"
        >
          <Text className="text-center">Get Started</Text>
        </TouchableOpacity>

        <View className="flex justify-center flex-row gap-2">
          <View className="h-3 w-3 bg-primary rounded-full" />
          <View className="h-3 w-10 bg-primary rounded-full" />
          <View className="h-3 w-3 bg-gray-700 rounded-full" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AfriwaveUse;

const styles = StyleSheet.create({});
