import { Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const DocumentCaptureTwo = ({ setActiveTab }: Props) => {
  return (
    <View className="flex-1 flex-col gap-4">
      <View className="bg-[#1A1A1A] p-5 flex flex-col gap-1">
        <Text className="text-2xl text-white font-bold">Document Capture</Text>
        <View className="flex flex-row gap-2">
          <FontAwesome6 name="circle-info" size={24} color="#2DC85B" />
          <Text className="text-gray-400">
            Capture the front side first, then the back
          </Text>
        </View>
      </View>
      <View className="bg-[#1A1A1A] flex flex-col gap-4 px-10 py-7">
        <View className="border-[1px] border-gray-700 p-5 flex justify-center items-center">
          <Feather name="camera" size={100} color="black" />
        </View>
        <Text className="text-center text-white text-2xl font-bold">Front</Text>
      </View>
      <View className="bg-[#1A1A1A] flex flex-col gap-4 px-10 py-7">
        <View className="border-[1px] border-gray-700 p-5 flex justify-center items-center">
          <Feather name="camera" size={100} color="black" />
        </View>
        <Text className="text-center text-white text-2xl font-bold">Back</Text>
      </View>
      <View className="bg-red-500/20 p-5 mt-10 flex flex-row items-center gap-2">
        <Entypo name="warning" size={24} color="#ef4444" />
        <Text className="text-white">
          Avoid glare and ensure all edges are visible
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setActiveTab(9)}
        className="p-4 bg-primary mt-20"
      >
        <Text className="text-center">Continue to Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentCaptureTwo;
