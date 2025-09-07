import {
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import InputText from "../InputText";

type Props = {
  setActiveTab: (value: number) => void;
};

const PersonalDetailsUpdate = ({ setActiveTab }: Props) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const genders = ["Male", "Female", "Other"];

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

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
                onPress={() => setSelectedGender(x)}
                key={key}
                className="flex gap-1 flex-row items-center"
              >
                <MaterialCommunityIcons
                  name={
                    selectedGender == x
                      ? "checkbox-marked-circle"
                      : "checkbox-blank-circle"
                  }
                  size={24}
                  color={selectedGender == x ? "#2DC85B" : "white"}
                />
                <Text className="text-white">{x}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View className="flex flex-col gap-2">
          <Text className="text-white">Date of Birth</Text>
          <View className="flex border-[#525252] border-[1px] justify-between p-4 bg-[#1a1a1a] items-center flex-row">
            <TextInput
              className="text-gray-300"
              placeholder="DD/MM/YYYY"
              value={date ? date.toDateString() : ""}
            />
            <FontAwesome5 name="calendar-day" size={24} color="#d1d5db" />
          </View>

          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            themeVariant="dark"
          />
        </View>
        <TouchableOpacity
          onPress={() => setActiveTab(0)}
          className="bg-primary p-4"
        >
          <Text className="text-center">Save Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PersonalDetailsUpdate;
