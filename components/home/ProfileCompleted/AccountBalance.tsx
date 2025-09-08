import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

type Props = {};

const AccountBalance = (props: Props) => {
  return (
    <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
      <View className="flex flex-row text-center justify-between">
        <Text className="font-bold text-primary">Total Balance</Text>
        <Text className="text-primary">View All</Text>
      </View>
      <Text className="font-bold text-4xl text-white">$0.00</Text>
      <View className="flex flex-row gap-10 items-center">
        <View className="flex flex-row items-center gap-2">
          <MaterialIcons name="arrow-upward" size={24} color="#2DC85B" />
          <Text className="text-primary">0%</Text>
        </View>
        <Text className="text-gray-200">This week</Text>
      </View>
    </View>
  );
};

export default AccountBalance;
