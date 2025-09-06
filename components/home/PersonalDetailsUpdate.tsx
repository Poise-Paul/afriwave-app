import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import InputText from "../InputText";

type Props = {};

const PersonalDetailsUpdate = (props: Props) => {
  const genders = ["Male", "Female", "Other"];
  return (
    <View className="flex-1 mt-5">
      <Text className="text-3xl font-bold text-white">Profile Details</Text>
      <Text className="text-gray-400">
        Please fill in your personal information to complete your KYC
        verification.
      </Text>
      <View className="flex mt-5 flex-col gap-7">
        <View className="flex flex-row gap-5 justify-between">
          <View className="w-[48%]">
            <InputText title="First Name" placeholder="Enter your first name" />
          </View>
          <View className="w-[48%]">
            <InputText title="Last Name" placeholder="Enter your last name" />
          </View>
        </View>
        <InputText title="Phone Number" placeholder="Enter Phone number" />
        <View className="flex items-center flex-row gap-2">
          <View className="w-[90%]">
            <InputText title="Email" placeholder="Enter Email Address" />
          </View>
          <Octicons name="check-circle-fill" size={20} color="#2DC85B" />
        </View>
        <InputText
          title="Building/House Number"
          placeholder="Enter street/house number"
        />
        <InputText
          title="Street/Road Name"
          placeholder="Enter street/road name"
        />
        <View className="flex flex-row gap-5">
          <View className="w-[47%]">
            <InputText title="City/Town" placeholder="Enter street/road name" />
          </View>
          <View className="w-[47%]">
            <InputText
              title="State/Province"
              placeholder="Enter street/road name"
            />
          </View>
        </View>
        <View className="flex flex-row gap-5">
          <View className="w-[47%]">
            <InputText title="Country" placeholder="Enter city/town" />
          </View>
          <View className="w-[47%]">
            <InputText
              title="Postal/Zip Code"
              placeholder="Enter postal/zip code"
            />
          </View>
        </View>
        <View className="flex flex-col gap-2">
          <Text>Gender</Text>
          <View className="flex gap-4 flex-row">
            {genders.map((x, key) => (
              <TouchableOpacity
                key={key}
                className="flex gap-1 flex-row items-center"
              >
                <MaterialCommunityIcons
                  name="checkbox-blank-circle"
                  size={24}
                  color="white"
                />
                <Text className="text-white">{x}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-white">Date of Birth</Text>
          <View className="flex justify-between items-center flex-row">
           <TextInput placeholder="DD/MM/YYYY" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalDetailsUpdate;
