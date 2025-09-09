import LogoHeader02 from "@/components/LogoHeader02";
import { Entypo, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {};

const ConvertScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="p-5 flex flex-col gap-5">
        <Text className="text-3xl text-white font-bold">Convert</Text>
        <Text className="text-gray-300">
          Enter the amount you wish to convert
        </Text>
        <View className="bg-[#1A1A1A] gap-4 p-5">
          <Text className="text-gray-300 text-lg">USD</Text>
          <View className="border-2 border-primary p-4">
            <TextInput
              placeholderTextColor="#9ca3af"
              className="text-4xl text-gray-300"
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
          <View className="flex justify-end flex-row items-center gap-1">
            <MaterialCommunityIcons
              name="approximately-equal"
              size={24}
              color="#d1d5db"
            />
            <Text className="text-gray-300 text-xl">25.00 USD</Text>
          </View>
        </View>
        <View className="flex justify-center gap-5 flex-row items-center">
          <Text className="text-4xl text-white">TO</Text>
          <TouchableOpacity className="flex flex-row items-center">
            <Text className="text-primary text-xl">USD</Text>
            <Entypo name="chevron-small-down" size={24} color="#2DC85B" />
          </TouchableOpacity>
        </View>

        <View className="bg-[#1A1A1A] gap-4 p-5">
          <Text className="text-gray-300 text-lg">USD</Text>
          <View className="border-2 border-primary p-4">
            <TextInput
              placeholderTextColor="#9ca3af"
              className="text-4xl text-gray-300"
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
          <View className="flex justify-end flex-row items-center gap-1">
            <MaterialCommunityIcons
              name="approximately-equal"
              size={24}
              color="#d1d5db"
            />
            <Text className="text-gray-300 text-xl">25.00 USD</Text>
          </View>
        </View>
        <View className="bg-[#1A1A1A] flex flex-row gap-4 p-5">
          <View className="bg-primary/20 h-16 justify-center items-center w-16 rounded-full">
            <FontAwesome6 name="circle-info" size={24} color="#2DC85B" />
          </View>
          <Text className="text-white max-w-80 text-lg">
            Minimum funding amount is $10. Transaction fees may apply based on
            your payment method.
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/(app)/(tabs)")} className="bg-[#047429] p-5 rounded-full">
          <Text className="text-center text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ConvertScreen;
