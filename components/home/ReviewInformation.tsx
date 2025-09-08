import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const ReviewInformation = ({ setActiveTab }: Props) => {
  return (
    <View className="flex-1 flex mt-7 flex-col gap-10">
      <View className="flex flex-col justify-center items-center gap-5">
        <View className="bg-[#D0FEE3] mx-auto p-5 rounded-full self-start">
          <FontAwesome name="file" size={24} color={"#2DC85B"} />
        </View>
        <Text className="font-bold text-[#D0FEE3] text-2xl">
          We're reviewing your information
        </Text>
        <Text className="text-gray-300">
          This usually takes 5-10 minutes to complete. We'll notify you once the
          review is done.
        </Text>
        <View className="flex gap-3 mt-5 justify-center flex-row items-center">
          <View className="bg-primary h-3 w-3 rounded-full" />
          <View className="bg-primary h-3 w-3 rounded-full" />
          <View className="bg-primary h-3 w-3 rounded-full" />
        </View>
      </View>
      <View className="flex flex-col mt-10 gap-5">
        <View className="bg-[#1A1A1A] flex p-5 flex-col gap-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="check-circle" size={24} color="#2DC85B" />
              <Text className="font-bold text-white">Document Submitted</Text>
            </View>
            <Text className="text-gray-300">Today</Text>
          </View>
          <Text className="text-gray-400">
            Your ID document has been received and is being verified.{" "}
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex p-5 flex-col gap-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="check-circle" size={24} color="#2DC85B" />
              <Text className="font-bold text-white">Selfie Verification</Text>
            </View>
            <Text className="text-gray-300">Today</Text>
          </View>
          <Text className="text-gray-400">
            Your selfie has been submitted successfully.
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex p-5 flex-col gap-4">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-2">
              <MaterialCommunityIcons name="clock" size={24} color="#FEC008" />
              <Text className="font-bold text-white">Final Review</Text>
            </View>
            <Text className="text-gray-300">In Progress</Text>
          </View>
          <Text className="text-gray-400">
            Our team is reviewing your information.
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => setActiveTab(11)} className="bg-primary p-4">
        <Text className="text-center">In Progress</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewInformation;
