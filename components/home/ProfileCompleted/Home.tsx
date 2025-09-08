import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TextComponent, TouchableOpacity, View } from "react-native";
import AccountBalance from "./AccountBalance";

type Props = {
  setActiveTab: (value: number) => void;
};

const Home = ({ setActiveTab }: Props) => {
  return (
    <View className="flex-1 flex-col gap-4">
      <View className="mt-5">
        <Text className="font-bold text-3xl text-white">Welcome, Michael</Text>
        <Text className="text-gray-200">
          Your financial overview at a glance
        </Text>
      </View>

      <AccountBalance />
      <View className="flex flex-col gap-3">
        <Text className="font-bold text-white text-2xl">Your Wallets</Text>
        <View className="bg-[#1A1A1A] flex gap-4 flex-col items-center justify-center p-14">
          <View className="bg-primary mx-auto self-start p-5 rounded-full">
            <FontAwesome5 name="wallet" size={30} color="white" />
          </View>
          <Text className="text-2xl font-bold text-white">
            Create Your Wallet
          </Text>
        </View>
      </View>
      <View className="flex gap-2 flex-row items-center">
        <View className="bg-[#F59E0B] w-5 h-40" />
        <View className="flex flex-row gap-3">
          <FontAwesome5 name="info-circle" size={24} color="#F59E0B" />
          <View className="flex flex-col gap-4">
            <Text className="font-semibold text-white">
              Complete your profile
            </Text>
            <Text className="text-white max-w-96">
              Verify your identity to unlock all features and higher transaction
              limits.
            </Text>

            <TouchableOpacity>
              <Text className="text-primary font-semibold">Verify Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex flex-col gap-5">
        <Text className="font-bold text-white text-xl">
          Recent Transactions
        </Text>
        <View className="bg-[#1A1A1A] p-5">
          <View className="flex flex-row items-center gap-3">
            <View className="bg-[#313131]/50 px-4">
              <Image
                className="h-32 w-32"
                source={require("@/assets/images/transaction-img.png")}
              />
            </View>
            <View className="flex flex-col gap-3">
              <Text className="text-white font-bold text-lg">
                No transactions yet{" "}
              </Text>
              <Text className="text-gray-200 max-w-64">
                Your transaction history will appear here{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex flex-col gap-5">
        <Text className="font-bold text-white text-xl">Exchange Rates</Text>
        <View className="bg-[#1A1A1A] flex flex-row flex-wrap p-5">
          <View className="w-[50%]">
            <Text className="text-gray-200">USD/NGN</Text>
            <Text className="font-bold text-white text-lg">₦1,230.45</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-upward" size={20} color="#2DC85B" />
              <Text className="text-primary">1.2%</Text>
            </View>
          </View>
          <View className="w-[50%]">
            <Text className="text-gray-200">USD/CAD</Text>
            <Text className="font-bold text-white text-lg">$1.35</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-downward" size={24} color="#FF4D4E" />
              <Text className="text-[#FF4D4E]">0.5%</Text>
            </View>
          </View>
          <View className="w-[50%] mt-3">
            <Text className="text-gray-200">USD/GBP</Text>
            <Text className="font-bold text-white text-lg">₦1,230.45</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-upward" size={20} color="#2DC85B" />
              <Text className="text-primary">0.3%</Text>
            </View>
          </View>
          <View className="w-[50%] mt-3">
            <Text className="text-gray-200">GBP/NGN</Text>
            <Text className="font-bold text-white text-lg">₦1,580.25</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-downward" size={24} color="#FF4D4E" />
              <Text className="text-[#FF4D4E]">0.8%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
