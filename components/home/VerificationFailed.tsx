import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const VerificationFailed = ({ setActiveTab }: Props) => {
  const tips = [
    "Ensure good lighting conditions",
    "Place document on a dark, non-reflective surface",
    "Make sure all text is clearly visible",
    "Hold your phone steady when taking the photo",
  ];
  return (
    <View className="flex-1">
      <View className="p-5 flex-col gap-8 flex">
        <View className="flex flex-col gap-3 justify-center items-center">
          <View className="bg-[#1A1A1A] h-20 w-20 flex justify-center items-center rounded-full">
            <View className="bg-[#FF4D4E] h-10 w-10 rounded-full" />
          </View>
          <Text className="font-bold text-white text-3xl">
            Verification Failed
          </Text>
          <Text className="text-gray-400 mx-10 text-center">
            We couldn't verify your document due to the following issues:
          </Text>
        </View>

        <View className="bg-[#1A1A1A] flex flex-col gap-8 py-10 px-6">
          <View className="flex gap-5 flex-row items-center">
            <View className="bg-[#FF4D4E]/20 rounded-full p-3">
              <FontAwesome name="warning" size={24} color="#FF4D4E" />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-[#FF4D4E] font-bold text-2xl">
                Document edges not visible
              </Text>
              <Text className="text-gray-400 max-w-80">
                All four corners of your document must be clearly visible in the
                frame.
              </Text>
            </View>
          </View>
          <View className="flex gap-5 flex-row items-center">
            <View className="bg-[#FF4D4E]/20 rounded-full p-3">
              <FontAwesome6 name="eye-low-vision" size={24} color="#FF4D4E" />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-[#FF4D4E] font-bold text-2xl">
                Poor image quality
              </Text>
              <Text className="text-gray-400 max-w-80">
                The image is too blurry or has poor lighting conditions.
              </Text>
            </View>
          </View>
          <View className="flex gap-5 flex-row items-center">
            <View className="bg-[#FF4D4E]/20 rounded-full p-3">
              <FontAwesome6 name="fingerprint" size={24} color="#FF4D4E" />
            </View>
            <View className="flex flex-col gap-2">
              <Text className="text-[#FF4D4E] font-bold text-2xl">
                Information not readable
              </Text>
              <Text className="text-gray-400 max-w-80">
                Personal details on the document must be clearly readable.
              </Text>
            </View>
          </View>
        </View>
        <View className="bg-[#1A1A1A] p-5">
          <Text className="text-white font-bold text-xl">
            Tips for successful verification:
          </Text>
          <View className="my-4 flex flex-col gap-2">
            {tips.map((x) => (
              <View className="flex flex-row gap-2">
                <MaterialIcons name="check-circle" size={24} color="#2DC85B" />
                <Text className="text-white">{x}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity onPress={() => setActiveTab(0)} className="bg-primary p-5">
            <Text className="text-center">Try Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationFailed;
