import LogoHeader from "@/components/LogoHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const AddWallet = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader />
      <View className="bg-[#1A1A1A] mt-5 p-5">
        <View className="flex items-start flex-row gap-3">
          <MaterialIcons name="security" size={24} color="#F59E0B" />
          <View>
            <Text className="font-bold text-xl text-white">
              Your account isn't verified
            </Text>
            <Text className="text-gray-400 max-w-96 text-lg">
              Verify your identity to unlock wallet creation, higher limits, and
              transfers.
            </Text>
            <View className="my-5 flex flex-col gap-3">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-gray-300">Email</Text>
                <View className="rounded-full bg-primary/20 px-4 py-2">
                  <Text className="text-primary">Verified</Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="text-gray-300">Phone</Text>
                <View className="rounded-full bg-primary/20 px-4 py-2">
                  <Text className="text-primary">Verified</Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="text-gray-300">ID & Selfie</Text>
                <View className="rounded-full bg-[#F59E0B]/20 px-4 py-2">
                  <Text className="text-[#F59E0B]">Required</Text>
                </View>
              </View>
            </View>
            <View className="flex flex-row pb-4 items-center justify-between">
              <TouchableOpacity
                onPress={() => router.push("/WalletCreatedSuccessfully")}
                className="bg-primary self-start px-5 py-3"
              >
                <Text className="text-white">Verify Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddWallet;
