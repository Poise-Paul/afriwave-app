import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const RegionSelection = ({ setActiveTab }: Props) => {
  const [selected, setSelected] = useState(0);
  return (
    <View className="flex-1 mt-5 flex-col gap-3">
      <Text className="font-bold text-white text-3xl">Region Selection</Text>
      <Text className="text-gray-300 text-lg">
        Please select your region to continue with the verification process.
      </Text>
      <View className="my-4 flex flex-col gap-5">
        <Text className="font-bold text-white text-2xl">
          I'm a resident of or live in:
        </Text>
        <TouchableOpacity
          onPress={() => setSelected(0)}
          className="bg-[#1A1A1A] px-7 py-5 flex flex-row gap-4 items-center"
        >
          <View className="bg-[#313131]/50 p-2">
            <Image
              className="h-20 w-20"
              source={require("@/assets/images/countries.png")}
            />
          </View>

          <View className="max-w-[60%]">
            <Text className="text-white text-xl font-bold">All Countries</Text>
            <Text className="text-gray-400">
              International verification process
            </Text>
          </View>

          <FontAwesome
            name={selected == 0 ? "check-circle" : "circle-thin"}
            size={30}
            color={selected == 0 ? "#2DC85B" : "#374151"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected(1)}
          className="bg-[#1A1A1A] px-7 py-5 flex flex-row gap-4 items-center"
        >
          <View className="bg-[#313131]/50 p-2">
            <Image
              className="h-20 w-20"
              source={require("@/assets/images/us-flag-02.png")}
            />
          </View>

          <View className="max-w-[60%]">
            <Text className="text-white text-xl font-bold">
              United States of America
            </Text>
            <Text className="text-gray-400">
              US-specific verification requirements
            </Text>
          </View>

          <FontAwesome
            name={selected == 1 ? "check-circle" : "circle-thin"}
            size={30}
            color={selected == 1 ? "#2DC85B" : "#374151"}
          />
        </TouchableOpacity>

        <Text className="text-gray-400">
          Your region selection determines the verification requirements and
          documents needed for KYC compliance.
        </Text>

        <TouchableOpacity
          onPress={() => setActiveTab(0)}
          className="bg-primary p-4"
        >
          <Text className="text-center">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegionSelection;
