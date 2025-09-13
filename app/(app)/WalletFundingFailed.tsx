import LogoHeader02 from "@/components/LogoHeader02";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const WalletFundingFailed = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 p-5 mt-5 flex-col gap-10">
        <View className="flex flex-col gap-3 justify-center items-center">
          <View className="bg-[#1A1A1A] h-32 w-32 flex justify-center items-center rounded-full">
            <View className="bg-[#FF4D4E] h-20 w-20 rounded-full" />
          </View>
          <Text className="font-bold text-white text-3xl">Funding Failed</Text>
          <Text className="text-gray-400 mx-10 text-center">
            Your transaction could not be completed.
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-2 px-5 py-7">
          <Text className="text-xl font-bold text-[#FF4D4E]">
            Error Details:
          </Text>
          <Text className="text-lg text-gray-200">
            • Insufficient balance in your account{" "}
          </Text>
          <Text className="text-lg text-gray-200">
            • Please check your payment method and try again{" "}
          </Text>
        </View>

        <View className="flex flex-col gap-5">
          <TouchableOpacity className="bg-primary/50 p-4 rounded-full">
            <Text className="text-lg text-white text-center">
              Download Reciept
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-primary/50 border-[1px] p-4 rounded-full">
            <Text className="text-lg text-white text-center">
              Return to Dashboard
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text className="text-gray-500 text-xl text-center">Change Amount</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WalletFundingFailed;
