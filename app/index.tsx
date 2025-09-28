import LogoHeader from "@/components/LogoHeader";
import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
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
  const transactions = [
    {
      title: "Fast Transfers",
      desc: "Money arrives within minutes, not days.",
      icon: <FontAwesome6 name="bolt-lightning" size={20} color="white" />,
    },
    {
      title: "Secure Transactions",
      desc: "Bank-level encryption and security",
      icon: <FontAwesome5 name="shield-alt" size={20} color="white" />,
    },
    {
      title: "Low Fees",
      desc: "Up to 80% cheaper than traditional banks.",
      icon: <FontAwesome name="percent" size={20} color="white" />,
    },
  ];
  return (
    <SafeAreaView className="bg-black flex-1">
      <LogoHeader />
      {/* <View className="flex  flex-col items-center justify-center h-full gap-10 p-7">
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

        <Text className="text-gray-500">
          Experience the future of cross-border payments
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/(onboarding)")}
          className="w-full bg-[#2dc75b] p-5"
        >
          <Text className="text-center">Get Started</Text>
        </TouchableOpacity>
        <Text className="text-center text-[#737373]">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View> */}
      <View className="flex  flex-col h-full gap-10 p-7">
        <View className="bg-[#151515] h-60 items-center justify-center w-full">
          <Image
            source={require("../assets/images/africa-logo.png")}
            resizeMode="contain"
            className="h-80 w-80"
          />
        </View>
        <View className="items-center justify-center">
          <Text className="text-white text-center mx-10 font-bold text-2xl">
            Borderless Finance for Africa
          </Text>
          <Text className="text-center text-white text-lg">
            Send money across African borders instantly, securely, and at the
            lowest fees possible.
          </Text>
        </View>
        <View className="w-full flex-col gap-4 flex">
          {transactions.map((item, index) => (
            <View
              key={index}
              className="flex flex-row p-3 bg-primary items-center gap-4"
            >
              <View className="bg-[#151515] rounded-full justify-center items-center h-14 w-14">
                {item.icon}
              </View>

              <View className="flex-1">
                <Text className="text-white font-bold">{item.title}</Text>
                <Text className="text-black/50">{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Work screen here */}
        <TouchableOpacity onPress={() => router.push("/(onboarding)/login")}>
          <Text className="text-white text-center">Go to work screen</Text>
        </TouchableOpacity>
        {/* End Work screen */}
        <View className="flex flex-col gap-3">
          <TouchableOpacity
            onPress={() => router.push("/(onboarding)")}
            className="w-full bg-[#2dc75b] p-5 items-center justify-center"
          >
            <Text className="text-white">Sign Up</Text>
          </TouchableOpacity>
          <Text className="text-gray-400 text-center text-sm">
            By continuing, you agree to our Terms and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
