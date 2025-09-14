import { RootState } from "@/redux/store/store";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";

type Props = {};

const SendMoneyPage = (props: Props) => {
  const { selWallet } = useSelector((state: RootState) => state.wallet);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-5 flex flex-col gap-10">
        <View className="flex flex-row justify-end">
          <View className="bg-primary/70 rounded-full px-4 py-1">
            <Text className="text-white font-semibold">1/4</Text>
          </View>
        </View>

        <Text className="text-2xl font-bold text-white">
          How Much Are You Sending?
        </Text>
        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
          <View className="flex flex-row gap-2">
            <View className="flex gap-2 flex-row items-center">
              <Image
                className="h-10 w-10"
                source={require("@/assets/images/us-flag.png")}
              />
              <Text className="text-2xl text-white">{selWallet}</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#9ca3af"
              />
            </View>

            <TextInput
              placeholderTextColor="#d1d5db"
              keyboardType="numeric"
              placeholder="0.00"
              className="text-2xl text-gray-300"
            />
          </View>

          <Text className="text-gray-400 text-lg">
            Available balance: $2,450.75{" "}
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
          <Text className="text-gray-400">Transfer Method</Text>
          <TouchableOpacity className="flex justify-between items-center flex-row">
            <View className="flex items-center flex-row gap-4">
              <View className="bg-[#2d2d2d] p-1">
                <Image
                  className="h-10 w-10"
                  source={require("@/assets/images/zelle.png")}
                />
              </View>
              <Text className="text-2xl text-white font-bold">
                {selWallet == "CAD" && "Interac"}
                {selWallet == "USD" || selWallet == "GBP" ? "Zelle" : ""}
                {selWallet == "NGN" && "Bank Transfer"}
              </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#9ca3af"
            />
          </TouchableOpacity>
        </View>

        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-400 text-xl">Fee</Text>
            <Text className="text-xl text-white">$0.00</Text>
          </View>
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-400 text-xl">AfriWave Fee</Text>
            <Text className="text-xl text-white">$4.99</Text>
          </View>
          <View className="h-3 bg-black" />
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-400 text-xl">AfriWave Fee</Text>
            <Text className="text-xl text-white">$4.99</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (selWallet == "NGN") {
              router.push("/NGNBankDetails");
            } else {
              router.push("/SendMoneyPageSecond");
            }
          }}
          className="bg-primary/70 rounded-full p-4"
        >
          <Text className="text-center text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SendMoneyPage;
