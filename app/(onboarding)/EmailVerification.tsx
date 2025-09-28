import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

type FormData = {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
  six: string;
};

const EmailVerification = (props: Props) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const boxes: Array<keyof FormData> = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
  ];

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

  const refs = useRef<Array<TextInput | null>>([]);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1">
        <ScrollView className="p-5 flex-1">
          <View className="text-center flex-1 items-center flex-col gap-5">
            <View className="bg-[#1a1a1a] flex justify-center items-center rounded-full h-24 w-24">
              <Entypo name="mail" size={40} color="#2dc75b" />
            </View>
            <Text className="font-bold text-2xl text-white">
              Email Verification
            </Text>
            <Text className="text-gray-200 text-xl">
              We've sent a verification code to
            </Text>
            <Text className="font-semibold text-primary text-xl">
              james.wilson@gmail.com
            </Text>

            <Text className="text-center mt-10 text-gray-400 text-lg">
              Enter the 6-digit code below
            </Text>
            <View className="flex items-center  flex-row">
              {/* <OtpInput
                numberOfDigits={4}
                focusColor="#1A20EA"
                autoFocus={false}
                hideStick={true}
                placeholder=""
                blurOnFilled={true}
                disabled={false}
                type="numeric"
                secureTextEntry={false}
                focusStickBlinkingDuration={500}
                onFocus={() => console.log("Focused")}
                onBlur={() => console.log("Blurred")}
                onTextChange={(text) => setOtp(text)}
                onFilled={(text) => setOtp(text)}
                textInputProps={{
                  accessibilityLabel: "One-Time Password",
                }}
              /> */}
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
                      className="bg-[#1a1a1a] mt-2 text-gray-200 border-[1px] mr-3 w-14 border-primary/10 transition-all focus:border-secondary focus:border-[1px] focus:shadow-lg focus:shadow-secondary/50 duration-300 ease-in-out p-5  rounded-lg"
                    />
                  )}
                  name={x}
                  rules={{
                    required: true,
                  }}
                />
              ))}
            </View>
            <TouchableOpacity
              onPress={() => router.push("/PhoneVerification")}
              className="bg-primary mt-10 w-[90%] p-4"
            >
              <Text className="text-center">Verify</Text>
            </TouchableOpacity>
            <Text className="text-gray-500 mt-5 text-center">
              Didn't recieve the code?
            </Text>
            <TouchableOpacity className="border-primary mx-auto border-[1px] px-10 py-4">
              <Text className="text-primary">Resend Code</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => router.push("/PhoneVerification")}
          className="mb-10"
        >
          <Text className="text-gray-500 text-center">Phone Verification</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EmailVerification;
