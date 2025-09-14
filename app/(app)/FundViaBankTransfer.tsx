import { FontAwesome6, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const FundViaBankTransfer = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 flex-col gap-10 p-5">
        <View className="flex justify-between flex-row">
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex gap-2 flex-row items-center"
          >
            <MaterialIcons name="arrow-back" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text className="text-2xl text-center font-bold text-white">
            Fund Via Bank Transfer
          </Text>
          <Text></Text>
        </View>
        <View className="bg-[#1A1A1A] p-5">
          <Text className="text-gray-400">You're funding</Text>
          <Text className="text-white text-3xl font-bold">₦1,000.00</Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
          <View className="flex flex-col">
            <Text className="text-white text-2xl font-bold">
              Transfer to this Account
            </Text>
            <Text className="text-gray-200 text-lg">
              Funds reflect instatly once payment is made
            </Text>
          </View>

          <View className="bg-black flex flex-row p-4 justify-between items-center">
            <Text className="text-white font-bold text-2xl">3020000154</Text>
            <TouchableOpacity className="bg-primary/70 px-4 py-1 rounded-full">
              <Text className="text-white">Copy</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-white text-lg">Bank Name:</Text>
            <Text className="text-lg text-white">78 Finance Limited</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-white text-lg">Account Name:</Text>
            <Text className="text-lg text-white">Asiru Shola</Text>
          </View>
          <View className="flex gap-2 flex-row items-center">
            <MaterialIcons name="check-circle" size={24} color="#2DC85B" />
            <Text className="text-white text-lg">Verified Account</Text>
          </View>
          <View className="flex gap-2 flex-row items-center">
            <MaterialCommunityIcons
              name="clock-time-four"
              size={24}
              color="#d1d5db"
            />
            <Text className="text-gray-200 text-lg">
              Typically reflects within 5 minutes
            </Text>
          </View>
        </View>

        <View className="bg-primary/70 gap-2 flex flex-row p-4">
          <FontAwesome6 name="circle-info" size={24} color="white" />
          <Text className="text-white">
            Only transfer from your verified bank account to avoid delays.
          </Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/WalletFundedSuccessfully")} className="bg-primary/70 mt-6 p-5">
            <Text className="text-white text-center text-lg">Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FundViaBankTransfer;
