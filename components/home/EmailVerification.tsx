import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

type FormData = {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
};

const EmailVerification = ({ setActiveTab }: Props) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const handleChange = (text: string, index: number) => {
    if (!refs.current) return; // Ensure refs exist

    const nextIndex = index + 1;
    const prevIndex = index - 1;

    if (text && nextIndex < refs.current.length) {
      refs.current[nextIndex]?.focus();
    } else if (!text && prevIndex >= 0) {
      refs.current[prevIndex]?.focus();
    }
  };

  const boxes: Array<keyof FormData> = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
  ];

  const refs = useRef<Array<TextInput | null>>([]);

  return (
    <View className="flex-1 flex-col gap-3 mt-5">
      <Text className="text-3xl font-bold text-white">Email Verification</Text>
      <Text className="text-gray-400">
        We'll send a verification code to your email address to confirm it
        belongs to you.
      </Text>

      <View className="bg-[#1a1a1a] flex flex-col gap-3 p-5">
        <View className="flex mt-5 flex-col">
          <Text className="text-gray-300">Email Address</Text>
          <TextInput
            className="border-[#525252] text-white mt-3 p-4 border-[1px]"
            placeholderTextColor="#FFF"
            placeholder="Enter email address"
          />
        </View>
        <TouchableOpacity onPress={() => setActiveTab(4)} className="bg-primary my-2 p-4">
          <Text className="text-center text-white">Send Verification Code</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-[#1a1a1a] mt-5 p-5">
        <View className="flex flex-row justify-between">
            
          <Text className="text-white text-xl">Verification Code</Text>

          <TouchableOpacity>
            <Text className="text-primary text-lg">Resend Code</Text>
          </TouchableOpacity>
        </View>

        <View className="flex mt-5 flex-col gap-5">
          <View className="flex items-center justify-between flex-row">
            {boxes.map((x, index) => (
              <Controller
                key={index}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    ref={(ref) => {
                      refs.current[index] = ref;
                    }}
                    // ref={(ref) => (refs.current[index] = ref)}
                    keyboardType="numeric"
                    maxLength={1}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === "Backspace" && value === "") {
                        refs.current[index - 1]?.focus();
                      }
                    }}
                    onChangeText={(text) => {
                      handleChange(text, index);
                      onChange(text);
                    }}
                    value={value}
                    className="bg-[#323232]  mt-2 text-gray-200 border-[1px] mr-3 w-14 border-[#525252] transition-all focus:border-secondary focus:border-[1px] focus:shadow-lg focus:shadow-secondary/50 duration-300 ease-in-out p-5"
                  />
                )}
                name={x}
                rules={{
                  required: true,
                }}
              />
            ))}
          </View>
          <View className="flex justify-between flex-row gap-2">
            <Text className="font-semibold text-lg text-gray-300">
              Code expires in
            </Text>
            <Text className="text-gray-300 text-lg">(04:32)</Text>
          </View>
        </View>
      </View>

      <View className="bg-primary my-3 gap-3 flex flex-row p-5">
        <MaterialCommunityIcons
          name="checkbox-marked-circle"
          size={24}
          color="white"
        />
        <Text className="font-bold text-lg text-white">Email verified</Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => setActiveTab(0)}
          className="py-4 px-6 border-[#525252] border-[1px]"
        >
          <Text className="text-white">Back</Text>
        </TouchableOpacity>

        <View className="flex justify-center flex-row gap-2">
          <View className="h-3 w-3 bg-primary rounded-full" />
          <View className="h-3 w-3 bg-primary rounded-full" />
          <View className="h-3 w-10 bg-primary rounded-full" />
          <View className="h-3 w-3 bg-gray-700 rounded-full" />
        </View>
      </View>
    </View>
  );
};

export default EmailVerification;
