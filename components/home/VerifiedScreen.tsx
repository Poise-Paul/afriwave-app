import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, Text, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const VerifiedScreen = ({ setActiveTab }: Props) => {
  return (
    <View className="flex-1">
      <ImageBackground source={require("@/assets/images/verified-bg.png")}>
        <View className="flex justify-center flex-col gap-5 my-10 items-center">
          <View className="bg-[#1A1A1A] flex justify-center items-center rounded-full h-28 w-28">
            <MaterialIcons name="check-circle" size={70} color="#2DC85B" />
          </View>
          <Text className="text-white text-center text-3xl font-bold">
            You're Verified
          </Text>
          <Text className="text-white text-center">
            Enjoy full AfriWave access to all features and services.
          </Text>
        </View>
      </ImageBackground>
      <View className="p-6 flex flex-col gap-10">
        <View className="bg-[#1A1A1A] flex flex-col gap-5 p-5">
          <View className="flex flex-row items-center gap-5">
            <View className="bg-primary p-5 self-start rounded-full">
              <MaterialIcons name="security" size={30} color="white" />
            </View>
            <View>
              <Text className="font-bold text-white text-2xl">
                KYC Verification
              </Text>
              <Text className="text-gray-300">Completed successfully </Text>
            </View>
          </View>
          <View className="h-3 w-full rounded-full bg-primary" />
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-300">Progress</Text>
            <Text className="text-primary">100%</Text>
          </View>
        </View>
        <View className="bg-primary p-5">
          <Text className="text-center">Start Using Afriwave</Text>
        </View>
        <Text className="text-center text-white">View verification details</Text>
        <View className="bg-[#1A1A1A] flex flex-col gap-3 p-5">
          <Text className="font-bold text-xl text-white">What's next?</Text>
          <View className="flex flex-row gap-3 mt-2 items-center">
            <FontAwesome5 name="money-bill-wave" size={20} color="#2DC85B" />
            <Text className="text-gray-200">
              Send and receive money instantly
            </Text>
          </View>
          <View className="flex flex-row gap-3 items-center">
            <MaterialIcons name="arrow-back" size={24} color="#2DC85B" />
            <Text className="text-gray-200">
              Access higher transaction limits
            </Text>
          </View>
          <View className="flex flex-row gap-3 items-center">
            <FontAwesome name="unlock" size={24} color="#2DC85B" />
            <Text className="text-gray-200">Unlock premium features</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerifiedScreen;
