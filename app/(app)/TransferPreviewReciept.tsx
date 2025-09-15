import LogoHeader02 from "@/components/LogoHeader02";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const TransferPreviewReciept = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-1 flex flex-col gap-5 p-5">
          <Text className="text-white text-2xl font-bold text-center">
            Transfer Preview
          </Text>

          <View className="bg-[#1A1A1A] flex flex-col gap-5 p-5">
            <Text className="text-2xl font-bold text-white">
              Transaction Details
            </Text>
            <View className="flex justify-between items-center flex-row">
              <Text className="text-lg text-gray-400">Amount to Send</Text>
              <Text className="font-bold text-primary text-2xl">$250.00</Text>
            </View>
            <View className="bg-black h-2" />
            <View className="flex justify-between items-center flex-row">
              <Text className="text-lg text-gray-400">Reciepient</Text>
              <Text className="font-semibold text-white text-lg">
                Kwame Nkrumah
              </Text>
            </View>
            <View className="bg-black h-2" />
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Exchange Rate</Text>
              <Text className="text-white text-lg">1 USD = 12.35 GHS</Text>
            </View>
            <View className="bg-black h-2" />
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Transfer Fee</Text>
              <Text className="text-white text-lg">$4.99</Text>
            </View>
            <View className="bg-black h-2" />
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Recipient Gets</Text>
              <Text className="text-white text-lg">$4.99</Text>
            </View>
            <View className="bg-black h-2" />
            <View className="flex justify-between items-center flex-row">
              <Text className="text-gray-400 text-lg">Estimated Arrival</Text>
              <Text className="text-white text-xl">Within 10 minutes</Text>
            </View>
          </View>

          <View className="bg-[#1A1A1A] flex flex-row gap-3 p-6">
            <FontAwesome5 name="info-circle" size={24} color="#2DC85B" />
            <Text className="text-gray-300 w-[95%]">
              Your recipient will be notified once the transfer is complete. You
              can track the status in your transaction history.{" "}
            </Text>
          </View>

          <View className="flex items-center flex-row justify-between">
            <Text className="text-white text-lg">Total to Pay</Text>
            <Text className="text-primary text-xl font-bold">$259.99</Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/EnterPinScreen")}
            className="bg-primary/70 mt-3 p-4"
          >
            <Text className="text-center text-lg">Make Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransferPreviewReciept;
