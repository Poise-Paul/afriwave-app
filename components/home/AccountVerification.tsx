import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const AccountVerification = ({ setActiveTab }: Props) => {
  const verifications = [
    {
      title: "Complete Profile Details",
      desc: "Fill in your personal information to complete your profile",
    },
    {
      title: "Phone Number Verification",
      desc: "Verify your phone number to secure your account",
    },
    {
      title: "Email Verification",
      desc: "Confirm your email address for account recovery",
    },
    {
      title: "Government ID Verification",
      desc: "Upload a valid government-issued ID to verify your identity",
    },
  ];
  return (
    <View className="mt-5">
      <Text className="text-3xl font-bold text-white">
        Account Verification
      </Text>
      <Text className="text-primary mt-3">
        You're almost there. Just a few more steps!
      </Text>
      <View className="flex mt-7 flex-col gap-2">
        <View className="flex flex-row justify-between">
          <Text className="text-[#A3A3A3]">0%</Text>
          <Text className="text-[#A3A3A3]">25%</Text>
          <Text className="text-[#A3A3A3]">50%</Text>
          <Text className="text-[#A3A3A3]">75%</Text>
          <Text className="text-[#A3A3A3]">100%</Text>
        </View>
        <View className="bg-[#1A1A1A] w-full h-4 rounded-full" />
      </View>
      <View className="flex my-5 flex-col gap-6">
        {verifications.map((x, key) => (
          <View key={key} className="bg-[#1A1A1A] flex flex-col gap-6 p-5">
            <View className="flex justify-between items-center flex-row">
              <Text className="font-bold text-white text-xl">{x.title}</Text>
              <Text className="text-[#E9B30B]">Pending</Text>
            </View>
            <Text className="text-gray-400">{x.desc}</Text>
            <TouchableOpacity onPress={() => setActiveTab(key + 1)}>
              <Text className="text-primary">Tap to start verification</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View className="bg-[#1A1A1A] items-center flex flex-row gap-5 p-5">
        <View className="bg-primary p-4 flex justify-center items-center rounded-full">
          <MaterialIcons name="security" size={24} color="#FFF" />
        </View>
        <View className="flex flex-col gap-2">
          <Text className="font-bold text-white">Secure Verification</Text>
          <Text className="text-gray-400 max-w-[90%]">
            Your data is encrypted and securely stored according to
            international standards
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AccountVerification;
