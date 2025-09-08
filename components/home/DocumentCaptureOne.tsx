import { Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const DocumentCaptureOne = ({ setActiveTab }: Props) => {
  return (
    <View className="flex-1 flex-col gap-4">
      <View className="bg-[#1A1A1A] p-5 flex flex-col gap-1">
        <Text className="text-2xl text-white font-bold">Document Capture</Text>
        <Text className="text-gray-400">Capture the data page</Text>
      </View>
      <View className="bg-[#1A1A1A] p-10">
        <View className="border-[1px] border-gray-700 p-28 flex justify-center items-center">
          <Feather name="camera" size={100} color="black" />
        </View>
      </View>
      <View className="bg-red-500/20 p-5 mt-10 flex flex-row items-center gap-2">
        <Entypo name="warning" size={24} color="#ef4444" />
        <Text className="text-white">Avoid glare and ensure all edges are visible</Text>
      </View>
      <TouchableOpacity onPress={() => setActiveTab(8)} className="p-4 bg-primary mt-20">
        <Text className="text-center">Continue to Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentCaptureOne;
