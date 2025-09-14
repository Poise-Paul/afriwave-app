import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const TransferPreview = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 flex flex-col gap-10 p-5">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-white text-3xl font-bold">
            Preview Transfer
          </Text>
          <Text className="font-semibold text-white">4/5</Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-2 p-5">
          <Text className="text-2xl font-bold text-white">John Doe</Text>
          <Text className="text-gray-400">Zenith Bank • 2039485761</Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-10 p-5">
          <View>
            <Text className="text-gray-400">You Send</Text>
            <Text className="text-white text-2xl font-bold">N500,000.00</Text>
          </View>
          <View>
            <Text className="text-gray-400">Recipient Gets</Text>
            <Text className="text-white text-2xl font-bold">
              ₦500,000.00 NGN
            </Text>
          </View>
          <View className="h-2 bg-black" />
          <View className="flex gap-3 flex-col">
            <View className="flex items-center justify-between flex-row">
              <View className="flex flex-row gap-2 items-center">
                <FontAwesome5
                  name="money-bill-wave"
                  size={18}
                  color="#2DC85B"
                />
                <Text className="text-white text-lg">Transaction Fee</Text>
              </View>
              <Text className="text-white text-lg">$2.50</Text>
            </View>
            <View className="flex items-center justify-between flex-row">
              <View className="flex flex-row gap-2 items-center">
                <FontAwesome5
                  name="calculator"
                  size={18}
                  color="#2DC85B"
                />
                <Text className="text-white text-lg">Total Fee</Text>
              </View>
              <Text className="text-white text-lg">$7.49</Text>
            </View>

          </View>
        </View>
        <TouchableOpacity className="bg-primary p-4">
        <Text className="text-center">Make Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransferPreview;
