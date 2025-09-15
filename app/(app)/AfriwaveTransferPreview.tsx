import LogoHeader02 from "@/components/LogoHeader02";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
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

const AfriwaveTransferPreview = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 p-5">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex flex-col gap-8">
            <Text className="text-white text-2xl text-center font-bold">
              Preview Transfer
            </Text>
            <View className="bg-primary/70 p-5">
              <View className="flex flex-row gap-4 items-center">
                <View className="bg-[#1A1A1A] rounded-full flex justify-center items-center h-14 w-14">
                  <FontAwesome5 name="user-alt" size={18} color="white" />
                </View>
                <View className="flex flex-col">
                  <Text className="text-2xl font-bold text-white">
                    Shola Ashiru
                  </Text>
                  <Text className="text-gray-200">sholaasiru@gmail.com</Text>
                </View>
              </View>
            </View>

            <View className="bg-[#1A1A1A] flex flex-col gap-5 p-7">
              <Text className="text-2xl text-white font-bold">
                Transfer Details
              </Text>
              <View className="flex justify-between items-center flex-row">
                <Text className="text-gray-400 text-lg">Amount Sending</Text>
                <Text className="font-bold text-white text-xl">
                  $250.00 USD
                </Text>
              </View>
              <View className="h-2 bg-black" />
              <View className="flex justify-between items-center flex-row">
                <Text className="text-gray-400 text-lg">Recipient Gets</Text>
                <Text className="font-bold text-yellow-500 text-xl">
                  $250.00 USD
                </Text>
              </View>
              <View className="h-2 bg-black" />
              <View className="flex justify-between items-center flex-row">
                <Text className="text-gray-400 text-lg">Fees</Text>
                <Text className="text-white text-xl">$00.00 USD</Text>
              </View>
              <View className="h-2 bg-black" />
              <View className="flex justify-between items-center flex-row">
                <Text className="text-gray-400 text-lg">
                  Estimated Delivery
                </Text>
                <Text className="text-white text-xl">Instant</Text>
              </View>
            </View>

            <View className="bg-[#1A1A1A] flex flex-row p-5 gap-3">
              <MaterialIcons name="security" size={24} color="#2DC85B" />
              <Text className="text-gray-400 w-96">
                Your transaction is protected by our secure payment system{" "}
              </Text>
            </View>
          </View>
        </ScrollView>
 
        <TouchableOpacity
          onPress={() => router.push("/PaymentSuccessful")}
          className="bg-primary/70 p-4 rounded-full"
        >
          <Text className="text-center text-white text-lg">Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AfriwaveTransferPreview;
