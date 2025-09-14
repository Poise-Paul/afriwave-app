import InputText from "@/components/InputText";
import LogoHeader02 from "@/components/LogoHeader02";
import { RootState } from "@/redux/store/store";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
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
import { useSelector } from "react-redux";

type Props = {};

const SendMoneyPageSecond = (props: Props) => {
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);
  const { selWallet } = useSelector((state: RootState) => state.wallet);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1  p-5">
        <ScrollView>
          <View className="flex flex-col gap-7">
            <Text className="font-semibold text-white text-center text-lg">
              2/4
            </Text>
            {selWallet == "NGN" ? (
              <Text className="text-2xl text-center font-bold text-white">
                How Much Are You Sending?
              </Text>
            ) : (
              <Text className="text-2xl text-center font-bold text-white">
                Recipient's {selWallet == "CAD" ? "Intarac" : "Zelle"}{" "}
                Information
              </Text>
            )}

            <InputText placeholder="Enter full name" title="Recipient's Name" />
            <InputText
              placeholder="Enter email or phone"
              title="Intarac Email or Phone Number"
            />
            <View className="flex flex-col gap-2">
              <Text className="text-white">Note (Optional)</Text>
              <TextInput
                className="border-[1px] p-4 bg-[#1a1a1a] border-white/30 bg"
                placeholder="Add a note"
                placeholderTextColor={"#94a3b8"}
                multiline
                numberOfLines={4}
              />
            </View>
            <View className="bg-[#1A1A1A] flex flex-row gap-4 p-4">
              <FontAwesome5 name="info-circle" size={24} color="#9ca3af" />
              <Text className="text-gray-400 max-w-[90%]">
                Only send to trusted recipients. AfriWave cannot recover funds
                sent to incorrect or fraudulent accounts.
              </Text>
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

        <TouchableOpacity
          onPress={() => router.push("/ReviewScreen")}
          className="bg-primary/60 p-4 rounded-full"
        >
          <Text className="text-white text-xl text-center">
            Review Transfer
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SendMoneyPageSecond;
