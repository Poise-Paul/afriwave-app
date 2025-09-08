import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const LivenessVerification = ({ setActiveTab }: Props) => {
  const infos = [
    "Center your face in the circle",
    "Remove hats, glasses and face coverings",
    "Ensure good lighting on your face",
  ];
  return (
    <View className="flex-1 flex-col gap-7">
      <View className="flex my-3 flex-col gap-1">
        <Text className="font-bold text-center text-white text-3xl">
          Liveness Verification
        </Text>
        <Text className="text-gray-400 text-center">
          Position your face in the frame
        </Text>
        <Text className="text-white text-center">Live Camera</Text>
      </View>

      <View className="flex flex-row justify-center">
        <Image
          className="h-60 w-60 rounded-full"
          source={require("@/assets/images/face-validation.png")}
        />
      </View>

      <View className="bg-[#1A1A1A] p-5">
        <View className="flex flex-row gap-2 items-center">
          <FontAwesome6 name="circle-info" size={24} color="#2DC85B" />
          <Text className="text-white text-lg font-bold">Instructions</Text>
        </View>
        <View className="flex mt-3 flex-col gap-2">
          {infos.map((x, key) => (
            <View key={key} className="flex flex-row gap-2">
              <MaterialIcons name="check-circle" size={24} color="#2DC85B" />
              <Text className="text-white">{x}</Text>
            </View>
          ))}
        </View>
      </View>
      <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row gap-2">
            <MaterialIcons name="cloud-download" size={24} color="#2DC85B" />
            <Text className="text-white font-bold text-lg">Current Action</Text>
          </View>
          <Text className="text-primary">In Progress</Text>
        </View>
        <Text className="font-bold text-2xl text-white">
          Turn your head slowly to the right
        </Text>
        <View className="relative">
          <View className="bg-[#313131]/50 h-3 rounded-full" />
          <View className="bg-primary h-3 absolute rounded-full w-40" />
        </View>
      </View>
      <View className="flex flex-col gap-3">
        <TouchableOpacity onPress={() => setActiveTab(10)} className="bg-primary p-4">
          <Text className="text-center">Complete Verification</Text>
        </TouchableOpacity>
        <Text className="text-gray-400 text-center">
          Follow all instructions to complete verification
        </Text>
      </View>
    </View>
  );
};

export default LivenessVerification;
