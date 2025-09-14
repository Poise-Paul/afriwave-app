import LogoHeader02 from "@/components/LogoHeader02";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const FundingPendingScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 p-5 mt-5 flex-col gap-10">
        <View className="flex flex-col gap-3 justify-center items-center">
          <View className="bg-[#1A1A1A] h-32 w-32 flex justify-center items-center rounded-full">
            <MaterialCommunityIcons
              name="clock-time-four"
              size={80}
              color="#FEC008"
            />
          </View>
          <Text className="font-bold text-white text-3xl">Payment Pending</Text>
          <Text className="text-gray-400 mx-10 text-center">
            Your payment is processing. We'll notify you once it's complete.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)")}
          className="bg-primary/50 p-4 rounded-full"
        >
          <Text className="text-lg text-white text-center">
            Return to Dashboard
          </Text>
        </TouchableOpacity>
        <View className="bg-[#1A1A1A] flex flex-col gap-2 px-5 py-7">
          <View className="flex items-center flex-row justify-between">
            <Text className="text-gray-200">Transaction ID</Text>
            <Text className="font-bold text-lg text-white">#AF28753691</Text>
          </View>
          <View className="flex items-center flex-row justify-between">
            <Text className="text-gray-200">Date</Text>
            <Text className="font-bold text-lg text-white">
              May 15, 2023 • 14:32
            </Text>
          </View>
          <View className="flex items-center flex-row justify-between">
            <Text className="text-gray-200">Status</Text>
            <Text className="font-bold text-[#FEC008] text-lg">Processing</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FundingPendingScreen;
