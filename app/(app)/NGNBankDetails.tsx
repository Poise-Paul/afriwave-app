import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const NGNBankDetails = (props: Props) => {
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 p-5">
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          className="flex-1"
        >
          <View className="flex-col gap-7">
            <Text className="text-center text-white font-semibold text-lg justify-center">
              3/5
            </Text>
            <Text className="text-white text-2xl font-bold">
              Enter Recipient's Details
            </Text>
            <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
              <Text className="text-xl text-white">Account Name</Text>
              <View className="flex flex-row gap-5 items-center">
                <FontAwesome name="user" size={24} color="#2DC85B" />
                <TextInput
                  placeholder="Enter account name"
                  placeholderTextColor="#9ca3af"
                  style={{ fontSize: 18 }}
                  className="border-primary text-white w-[90%] p-4 border-[1px]"
                />
              </View>
            </View>
            <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
              <Text className="text-xl text-white">Bank Name</Text>
              <View className="flex flex-row gap-5 items-center">
                <FontAwesome name="bank" size={24} color="#2DC85B" />
                <TouchableOpacity className="flex flex-row w-[87%] border-primary border-[1px] p-4 justify-between">
                  <Text className="text-white text-2xl">Select Bank</Text>
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={26}
                    color="white"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
              <Text className="text-xl text-white">Account Number</Text>
              <View className="flex flex-row gap-5 items-center">
                <FontAwesome5 name="hashtag" size={24} color="#2DC85B" />
                <TextInput
                  placeholder="Enter account number"
                  placeholderTextColor="#9ca3af"
                  keyboardType="numeric"
                  style={{ fontSize: 18 }}
                  className="border-primary w-[90%] text-white p-4 border-[1px]"
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setSaveBeneficiary(!saveBeneficiary)}
              className="flex gap-2 flex-row items-center"
            >
              <MaterialIcons
                name={saveBeneficiary ? "check-box-outline-blank" : "check-box"}
                size={24}
                color="white"
              />
              <Text className="text-white font-semibold">Save Beneficiary</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => router.push("/TransferPreview")} className="bg-primary/70 p-4">
          <Text className="text-white text-center text-lg">
            Preview Transfer
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NGNBankDetails;
