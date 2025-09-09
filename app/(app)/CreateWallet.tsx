import { updateWalletCreated } from "@/redux/slices/DashboardSlice";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";

type Props = {};

const CreateWallet = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="bg-[#1A1A1A] p-5 mt-20 justify-center items-center">
        <View className="flex flex-col gap-3 items-center">
          <Text className="text-white text-xl font-bold">Create Wallet</Text>
          <Text className="text-gray-500 text-lg text-center">
            Choose a currency to create a wallet and start transacting.
          </Text>
        </View>

        <View className="flex flex-col mt-10 mb-14 w-full gap-6">
          <TouchableOpacity
            onPress={() => {
              dispatch(updateWalletCreated(true));
              router.push("/(app)/(tabs)");
            }}
            className="bg-primary p-4 gap-3 justify-between flex flex-row items-center"
          >
            <View className="flex flex-row gap-3 items-center">
              <Image
                className="h-16 w-16 rounded-full"
                source={require("@/assets/images/us-flag.png")}
              />
              <Text className="text-white text-xl">US Dollar (USD)</Text>
            </View>
            <Octicons name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(updateWalletCreated(true));
              router.push("/(app)/(tabs)");
            }}
            className="bg-primary p-4 flex justify-between items-center flex-row"
          >
            <View className="flex flex-row items-center gap-3">
              <Image
                className="h-16 w-16 rounded-full"
                source={require("@/assets/images/cad-flag.png")}
              />
              <Text className="text-white text-xl">Canadian Dollar (CAD)</Text>
            </View>
            <Octicons name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              dispatch(updateWalletCreated(true));
              router.push("/(app)/(tabs)");
            }}
            className="bg-primary p-4 flex flex-row justify-between items-center"
          >
            <View className="flex flex-row items-center gap-3">
              <Image
                className="h-16 w-16 rounded-full"
                source={require("@/assets/images/nig-flag.png")}
              />
              <Text className="text-white text-xl">Nigerian Naira (NGN)</Text>
            </View>
            <Octicons name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateWallet;
