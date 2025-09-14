import LogoHeader02 from "@/components/LogoHeader02";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

const ReviewScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-1 flex flex-col gap-5 p-5">
          <View className="bg-primary/70 justify-center items-center mx-auto rounded-full px-4 py-1">
            <Text className="text-white font-semibold">Step 3/4</Text>
          </View>
          <Text className="text-white text-2xl font-bold text-center">
            Review & Confirm
          </Text>

          <View className="bg-[#1A1A1A] flex flex-col gap-5 p-5">
            <Text className="text-2xl font-bold text-white">
              Transaction Details
            </Text>
            <View className="flex justify-between items-center flex-row">
              <Text className="text-lg text-gray-400">Amount to Send</Text>
              <Text className="font-semibold text-white text-lg">$250.00</Text>
            </View>
            <View className="flex justify-between items-center flex-row">
              <Text className="text-lg text-gray-400">Transfer Method</Text>
              <View className="flex flex-row gap-1 items-center">
                <MaterialCommunityIcons
                  name="lightning-bolt"
                  size={24}
                  color="#2DC85B"
                />
                <Text className="font-semibold text-white text-lg">
                  Interac
                </Text>
              </View>
            </View>
            <View className="bg-black h-2" />
            <Text className="font-bold text-white text-xl">Recipient</Text>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Name</Text>
              <Text className="text-white text-lg">Sarah Johnson</Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Email</Text>
              <Text className="text-white text-lg">sarah.j@example.com</Text>
            </View>
            <View className="bg-black h-2" />
            <Text className="font-bold text-white text-xl">Fee Breakdown</Text>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Transfer Fee</Text>
              <Text className="text-white text-lg">$4.99</Text>
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-gray-400 text-lg">Processing Fee</Text>
              <Text className="text-white text-lg">$1.50</Text>
            </View>
            <View className="bg-black h-2" />
            <View className="flex justify-between items-center flex-row">
              <Text className="font-bold text-white text-xl">Total</Text>
              <Text className="font-bold text-white text-2xl">$256.49</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/ProcessingPayment")}
            className="bg-primary/70 rounded-full p-4"
          >
            <Text className="text-center text-white">Send Now</Text>
          </TouchableOpacity>

          <TouchableOpacity className="border-[1px] border-gray-400 rounded-full p-4">
            <Text className="text-center text-white">Cancel</Text>
          </TouchableOpacity>

          <Text className="text-gray-400 text-center">
            By confirming this transaction, you agree to our Terms & Conditions
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewScreen;
