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

const SuccessfulWithReciept = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        <LogoHeader02 />
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <View className="flex-1 flex-col gap-10 p-5">
            <View className="flex mt-3 justify-center flex-row">
              <View className="bg-[#1A1A1A] h-32 flex justify-center items-center rounded-full w-32">
                <MaterialIcons name="check-circle" size={80} color="#2DC85B" />
              </View>
            </View>
            <View className="justify-center my-4 flex items-center flex-col gap-2">
              <Text className="text-white text-4xl font-bold">
                Payment Successful
              </Text>
              <Text className="text-gray-400 text-lg">
                $245.75 has been sent to James Okonkwo via Intarac.
              </Text>
            </View>
            <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
              <Text className="text-xl font-bold text-primary">
                Transaction Summary
              </Text>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-400 text-lg">Amount Sent</Text>
                <Text className="font-bold text-lg text-white">$1,250.00</Text>
              </View>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-400 text-lg">Recipient</Text>
                <Text className="font-bold text-lg text-white">
                  James Okonkwo
                </Text>
              </View>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-400 text-lg">Transfer Method</Text>
                <Text className="font-bold text-lg text-white">
                  Bank Transfer
                </Text>
              </View>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-400 text-lg">Fee</Text>
                <Text className="font-bold text-lg text-white">$12.50</Text>
              </View>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-400 text-lg">Date & Time</Text>
                <Text className="font-bold text-lg text-white">
                  May 15, 2023 • 14:32
                </Text>
              </View>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-400 text-lg">Transaction ID</Text>
                <Text className="font-bold text-lg text-white">
                  AFW29384756
                </Text>
              </View>
            </View>
            <Text className="text-center text-xl text-white">
              How was your experience?
            </Text>
            <View className="flex flex-row gap-5">
              <TouchableOpacity className="bg-primary w-[45%] p-4">
                <Text className="text-lg text-center">I'm Happy</Text>
              </TouchableOpacity>
              <TouchableOpacity className="border-white w-[45%] border-[1px] p-4">
                <Text className="text-lg text-center text-white">
                  Not Satisfied
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-col gap-4">
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)/transfer")}
              >
                <Text className="text-primary text-lg text-center font-semibold">
                  Make Another Transfer
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/(app)/(tabs)")}>
                <Text className="text-gray-400 text-lg text-center">
                  Back to Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SuccessfulWithReciept;
