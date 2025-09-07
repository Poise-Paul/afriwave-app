import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const IDVerification = ({ setActiveTab }: Props) => {
  const rules = [
    "Use original documents, no photocopies",
    "Ensure all details are clearly visible",
    "Make sure there's good lighting",
    "Remove any covers or cases from your ID",
  ];
  return (
    <View className="flex-1 flex-col mt-5 gap-8">
      <View className="flex flex-col gap-4">
        <Text className="text-3xl font-bold text-white">ID Verification</Text>
        <Text className="text-gray-400">
          Complete the verification process by following these guidelines to
          ensure a smooth experience.
        </Text>
      </View>

      <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
        <Text className="font-bold text-white text-2xl">Before you start</Text>
        <View className="flex gap-2 items-start flex-row">
          <View className="bg-primary h-7 flex justify-center items-center w-7 rounded-full">
            <Text className="text-white font-semibold">1</Text>
          </View>
          <View className="flex flex-col gap-4">
            <Text className="text-white max-w-80">
              Take a clear photo of your government-issued ID{" "}
            </Text>
            <View className="bg-[#313131]/50 self-start">
              <Image
                className="h-28 w-60"
                resizeMode="cover"
                source={require("@/assets/images/issued-id.png")}
              />
            </View>
          </View>
        </View>
        <View className="flex gap-2 items-start flex-row">
          <View className="bg-primary h-7 flex justify-center items-center w-7 rounded-full">
            <Text className="text-white font-semibold">2</Text>
          </View>
          <View className="flex flex-col gap-4">
            <Text className="text-white">Take a selfie photo of your face</Text>
            <View className="bg-[#313131]/50 self-start">
              <Image
                className="h-28 w-60"
                resizeMode="cover"
                source={require("@/assets/images/selfie.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="bg-[#1A1A1A] flex flex-col gap-2 p-5">
        <Text className="font-bold text-2xl text-white">Important rules</Text>
        <View className="my-3 flex flex-col gap-2">
          {rules.map((x, key) => (
            <View key={key} className="flex items-center flex-row gap-3">
              <FontAwesome name={"check-circle"} size={24} color={"#2DC85B"} />
              <Text className="text-white text-lg">{x}</Text>
            </View>
          ))}
        </View>
        <View className="bg-[#313131]/50 p-5">
          <Text className="font-semibold text-white">Accepted documents: </Text>
          <View className="flex flex-row flex-wrap">
            <View className="flex mt-4 w-[50%] flex-row items-center gap-2">
              <FontAwesome5 name="passport" size={20} color="#2DC85B" />
              <Text className="text-white">Passport</Text>
            </View>
            <View className="flex w-[50%] mt-4 flex-row items-center gap-2">
              <FontAwesome name="id-card" size={24} color="#2DC85B" />
              <Text className="text-white">ID Card</Text>
            </View>
            <View className="flex w-[50%] mt-4 flex-row items-center gap-2">
              <FontAwesome name="drivers-license" size={24} color="#2DC85B" />
              <Text className="text-white">Driver's License</Text>
            </View>
            <View className="flex w-[50%] mt-4 flex-row items-center gap-2">
              <FontAwesome name="file" size={24} color="#2DC85B" />
              <Text className="text-white">Residence Permit</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setActiveTab(6)}
        className="bg-primary p-4"
      >
        <Text className="text-center">Verify with your ID</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IDVerification;
