import React from "react";
import { Image, Text, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const RegionSelection = ({ setActiveTab }: Props) => {
  return (
    <View className="flex-1">
      <Text className="font-bold text-white text-3xl">Region Selection</Text>
      <Text className="text-gray-300 text-lg">
        Please select your region to continue with the verification process.
      </Text>
      <View className="my-4">
        <Text className="font-bold text-2xl">
          I'm a resident of or live in:
        </Text>
        <View className="bg-[#1A1A1A]">
          <Image
            className="h-24 w-24"
            source={require("@/assets/images/countries.png")}
          />
          <Text>All Countries</Text>
        </View>
      </View>
    </View>
  );
};

export default RegionSelection;
