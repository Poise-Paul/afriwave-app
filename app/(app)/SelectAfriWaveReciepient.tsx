import LogoHeader02 from "@/components/LogoHeader02";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const SelectAfriWaveReciepient = (props: Props) => {
  const recentContacts = [
    {
      name: "Kwame Mensah",
      number: "+233 54",
    },
    {
      name: "Ama Owosu",
      number: "+233 55 987",
    },
  ];

  const allContacts = [
    {
      name: "Abeni Kofi",
      number: "+233 24 555",
    },
    {
      name: "Kofi Adu",
      number: "+233 20 111 2222",
    },
    {
      name: "Yaa Asantewaa",
      number: "+233 27",
    },
  ];
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 flex-col gap-7 p-5">
        <Text className="font-bold text-primary text-2xl">
          Select Recipient
        </Text>
        <View className="flex items-center flex-row gap-4">
          <FontAwesome name="search" size={24} color="#6b7280" />
          <TextInput
            className="bg-[#1a1a1a] w-[90%] border-[1px] text-white border-gray-500 p-4"
            placeholderTextColor="#9ca3af"
            placeholder="Search contacts..."
          />
        </View>
        <TouchableOpacity className="border-primary p-4 border-[1px]">
          <Text className="text-primary text-center">
            Send to a new reciepient
          </Text>
        </TouchableOpacity>

        <Text className="text-gray-500 font-semibold uppercase">
          Recent Contacts
        </Text>
        <View className="flex flex-col gap-4">
          {recentContacts.map((x,key) => (
            <View key={key} className="bg-[#1A1A1A] flex flex-row justify-between items-center p-5">
              <Text className="text-white">{x.name}</Text>
              <Text className="text-white">{x.number}</Text>
            </View>
          ))}
        </View>

        <Text className="text-gray-500 font-semibold uppercase">
          All Contacts
        </Text>
        <View className="flex flex-col gap-4">
          {allContacts.map((x, key) => (
            <View key={key} className="bg-[#1A1A1A] flex flex-row justify-between items-center p-5">
              <Text className="text-white">{x.name}</Text>
              <Text className="text-white">{x.number}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => router.push("/TransferPreviewReciept")}
          className="bg-primary mt-10 p-4"
        >
          <Text className="text-center">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectAfriWaveReciepient;
