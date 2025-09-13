import LogoHeader02 from "@/components/LogoHeader02";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const FundCurrencyWallet = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <ScrollView>
        <View className="flex mt-10 flex-col gap-4">
          <Text className="text-3xl text-white font-bold">
            Fund Your Wallet
          </Text>
          <Text className="text-gray-300">
            Enter the amount you wish to add to your wallet
          </Text>
          <View className="bg-[#1A1A1A] gap-4 p-5">
            <View className="flex justify-between flex-row">
              <Text className="text-white">Amount</Text>
              <TouchableOpacity className="flex flex-row items-center">
                <Text className="text-gray-300 text-lg">USD</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>

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
          <View className="flex flex-row gap-3 bg-[#1A1A1A] p-4">
            <View className="bg-primary/50 justify-center items-center rounded-full h-16 w-16">
              <FontAwesome6 name="circle-info" size={24} color="white" />
            </View>
            <Text className="text-white max-w-96 text-lg">
              Minimum funding amount is $10. Transaction fees may apply based on
              your payment method.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-5">
        <TouchableOpacity
          onPress={() => router.push("/SelectPaymentMethod")}
          className="bg-primary/50 p-4 rounded-full"
        >
          <Text className="text-white text-xl text-center">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FundCurrencyWallet;
