import LogoHeader02 from "@/components/LogoHeader02";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const ProcessingWithReciept = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 flex-col p-5 gap-10">
        <View className="flex flex-col justify-center items-center gap-20">
          <View className="bg-[#2DC85B] w-40 h-2" />
          <MaterialIcons name="arrow-back" size={50} color="#2DC85B" />
          <View className="flex flex-col gap-2">
            <Text className="font-bold text-white text-center text-2xl">
              Processing Transaction
            </Text>
            <Text className="text-gray-300 text-lg text-center">
              Hang on! We're initiating your transaction. This should take about
              60 seconds.
            </Text>
          </View>
        </View>

        <View>
          <View className="bg-[#1A1A1A] rounded-full h-3 w-full" />
          <View className="bg-primary absolute h-3 rounded-full w-[60%]" />
        </View>

        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-7">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-gray-400 text-lg">Transaction ID</Text>
            <Text className="text-white text-lg font-bold">TRX-29384756</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-gray-400 text-lg">Amount</Text>
            <Text className="text-white text-lg font-bold">$250.00</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-gray-400 text-lg">Recipient</Text>
            <Text className="text-white text-lg font-bold">Sarah Johnson</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/SuccessfulWithReciept")}
          className="border-[1px] p-4 border-primary/70"
        >
          <Text className="text-white text-center text-xl">View Details</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProcessingWithReciept;
