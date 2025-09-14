import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const ProcessingPayment = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 justify-center flex-col p-5 gap-10">
        <View className="flex flex-col gap-3">
          <Text className="font-bold text-white text-center text-2xl">
            Processing Your Payment
          </Text>
          <Text className="text-gray-300 text-lg text-center">
            Do not close the app until this is complete.
          </Text>
        </View>

        <View>
          <View className="bg-[#1A1A1A] rounded-full h-3 w-full" />
          <View className="bg-primary absolute h-3 rounded-full w-[60%]" />
        </View>
        <TouchableOpacity className="border-[1px] p-4 rounded-full border-primary/70">
          <Text className="text-white text-center text-xl">
            Cancel Transaction
          </Text>
        </TouchableOpacity>
        <View className="flex flex-row gap-3 items-center justify-between">
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-gray-400 text-lg">Failed</Text>
            <View className="bg-[#1A1A1A] h-3 w-36" />
          </View>

          <View className="bg-primary/70 h-4 w-4 rounded-full" />
          <View className="flex flex-row gap-2 items-center">
            <View className="bg-[#1A1A1A] h-3 w-36" />
            <Text className="text-gray-400 text-lg">Success</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProcessingPayment;
