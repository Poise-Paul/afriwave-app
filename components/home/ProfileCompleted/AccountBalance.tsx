import { RootState } from "@/redux/store/store";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

type Props = {};

const AccountBalance = (props: Props) => {
  const { walletCreated } = useSelector((state: RootState) => state.dashboard);
  const [showBalance, setShowBalance] = useState(false);
  return (
    <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
      <View className="flex flex-row text-center justify-between">
        <Text className="font-bold text-primary">Total Balance</Text>
        <Text className="text-primary">View All</Text>
      </View>
      <View className="flex justify-between items-center flex-row">
        {showBalance ? (
          <Text className="font-bold text-4xl text-white">****</Text>
        ) : (
          <Text className="font-bold text-4xl text-white">
            {walletCreated ? "$12,458.32" : "$0.00"}
          </Text>
        )}
        <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
          <FontAwesome5
            name={showBalance ? "eye-slash" : "eye"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View className="flex flex-row gap-10 items-center">
        <View className="flex flex-row items-center gap-2">
          <MaterialIcons name="arrow-upward" size={24} color="#2DC85B" />
          <Text className="text-primary">{walletCreated ? "2.4%" : "0%"}</Text>
        </View>
        <Text className="text-gray-200">This week</Text>
      </View>
    </View>
  );
};

export default AccountBalance;
