import LogoHeader02 from "@/components/LogoHeader02";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const FundWithInterac = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 flex-col gap-7 p-5">
        <Text className="text-white mt-4 text-center text-3xl font-bold">
          Fund With Interac
        </Text>
        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
          <Text className="text-gray-300 text-xl">You're Paying</Text>
          <Text className="text-4xl font-bold text-white">C$20.00</Text>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-2xl text-white font-bold">
            Automatic Deposit
          </Text>
          <Text className="text-gray-200 text-lg">
            Fund your CAD automatically by sending money via Interac to:
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-3 p-5">
          <Text className="text-white text-xl font-bold">
            payments@afriwave.com
          </Text>
          <Text className="text-gray-200">AfriWave Interac</Text>
          <TouchableOpacity className="border-primary/50 self-start p-3 border-[1px]">
            <Text className="text-white">Copy Interac</Text>
          </TouchableOpacity>
        </View>

        <View className="flex justify-between flex-row">
          <View className="w-[65%] flex flex-col gap-2">
            <Text className="text-white">
              Deposit should be made from your verified email(s):
            </Text>
            <Text className="text-white font-semibold">shola@afriwave.com</Text>
          </View>

          <TouchableOpacity className="border-2 self-start border-primary/50 p-4">
            <Text className="text-white">Add Email</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/WalletFundedSuccessfully")}
          className="bg-primary/50 p-4"
        >
          <Text className="text-center text-white font-medium">
            Payment Made
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FundWithInterac;
