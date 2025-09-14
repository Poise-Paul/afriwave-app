import LogoHeader02 from "@/components/LogoHeader02";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const PaymentCancelled = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 p-5 mt-5 flex-col gap-10">
        <View className="flex flex-col gap-3 justify-center items-center">
          <View className="bg-gray-500 h-32 w-32 flex justify-center items-center rounded-full">
            <FontAwesome5 name="map-marked-alt" size={32} color="white" />
          </View>
          <Text className="font-bold text-white text-3xl">
            Payment Cancelled
          </Text>
          <Text className="text-gray-400 text-lg mx-10 text-center">
            This transaction was cancelled
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-3 px-5 py-7">
          <Text className="text-xl font-bold text-white">
            Transaction Details
          </Text>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-gray-400 text-lg">Amount</Text>
            <Text className="text-white text-xl font-bold">₦25,000.00</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-gray-400 text-lg">Recipient</Text>
            <Text className="text-white text-xl font-bold">
              Adebayo Electronics
            </Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-gray-400 text-lg">Date</Text>
            <Text className="text-white text-xl font-bold">May 15, 2023</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-gray-400 text-lg">Reference</Text>
            <Text className="text-white text-xl font-bold">TRX23051500784</Text>
          </View>
          <View className="flex flex-row items-center justify-between">
            <Text className="text-gray-400 text-lg">Amount</Text>
            <Text className="text-gray-500 text-xl font-bold">Cancelled</Text>
          </View>
        </View>

        <View className="flex flex-col gap-6">
          <TouchableOpacity className="bg-primary/50 p-4 rounded-full">
            <Text className="text-lg text-white text-center">
              Make New Payment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(app)/(tabs)")}
            className="border-primary/50 border-[1px] p-4 rounded-full"
          >
            <Text className="text-lg text-white text-center">
              Return to Dashboard
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentCancelled;
