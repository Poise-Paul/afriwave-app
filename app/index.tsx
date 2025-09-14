import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const index = (props: Props) => {
  return (
    <SafeAreaView className="bg-black flex-1">
      <View className="flex flex-col items-center  gap-10 p-7">
        <Image
          source={require("../assets/images/image.png")}
          className="h-60 w-60"
        />
        <Text className="text-4xl font-bold text-green-500">
          Welcome to Afriwave
        </Text>
        <Text className="text-center text-xl text-white">
          Your trusted partner for seamless cross-border money transfers across
          Africa and beyond.
        </Text>
        <View className="h-48 bg-[#1a1a1a] p-5">
          <Text className="text-lg leading-6 text-white">
            Send money to family and friends in different countries with just a
            few taps. AfriWave offers competitive rates, instant transfers, and
            secure transactions to over 30 African countries.
          </Text>
        </View>
        <Text className="text-gray-500">
          Experience the future of cross-border payments
        </Text>
        {/* Work Screen */}
        <TouchableOpacity onPress={() => router.push("/(app)/(tabs)")}>
          <Text className="text-white">Go to work screen</Text>
        </TouchableOpacity>
        {/* End Work Screen */}
        <TouchableOpacity
          onPress={() => router.push("/(onboarding)")}
          className="w-full bg-[#2dc75b] p-5"
        >
          <Text className="text-center">Get Started</Text>
        </TouchableOpacity>
        <Text className="text-center text-[#737373]">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
