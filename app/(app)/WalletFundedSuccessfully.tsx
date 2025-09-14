import LogoHeader02 from "@/components/LogoHeader02";
import { MaterialIcons } from "@expo/vector-icons";
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

const WalletFundedSuccessfully = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        <LogoHeader02 />
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="flex-1 flex-col gap-3 p-5">
            <View className="flex mt-3 justify-center flex-row">
              <View className="bg-[#1A1A1A] h-28 flex justify-center items-center rounded-full w-28">
                <MaterialIcons name="check-circle" size={60} color="#2DC85B" />
              </View>
              <View className="bg-gray-900 rounded-full h-7 w-7" />
            </View>
            <View className="justify-center my-4 flex items-center flex-col gap-2">
              <Text className="text-white text-4xl font-bold">Successful</Text>
              <Text className="text-gray-200 text-lg">
                Your transaction has been completed
              </Text>
              <Text className="text-2xl font-bold text-white">C$250.00</Text>
            </View>
            <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200">Transaction ID</Text>
                <Text className="font-bold text-lg text-white">
                  TRX-29384756
                </Text>
              </View>
              <View className="bg-black mt-3 h-3" />
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200">Date & Time</Text>
                <Text className="font-bold text-lg text-white">
                  May 15, 2025 • 14:32
                </Text>
              </View>
              <View className="bg-black mt-3 h-3" />
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200">Payment Method</Text>
                <Text className="font-bold text-lg text-white">Interac</Text>
              </View>
              <View className="bg-black mt-3 h-3" />
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200">Status</Text>
                <Text className="font-bold text-lg text-white">Completed</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-primary/50 p-4 rounded-full">
              <Text className="text-lg text-white text-center">
                Download Reciept
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
            <View className="flex flex-row mt-5 items-center justify-between">
              <Text className="text-white">View pending payments</Text>
              <View className="flex flex-row gap-2 items-center">
                <MaterialIcons name="support-agent" size={24} color="#2DC85B" />
                <Text className="text-white">Need Help?</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WalletFundedSuccessfully;
