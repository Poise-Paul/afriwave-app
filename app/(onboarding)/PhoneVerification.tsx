import LogoHeader from "@/components/LogoHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SafeAreaView,
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
};

const PhoneVerification = (props: Props) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const handleWatch = watch();

  const { one, two, three, four } = handleWatch;

  const boxes: Array<keyof FormData> = ["one", "two", "three", "four"];
  const refs = useRef<Array<TextInput | null>>([]);

  const values = useMemo(
    () => [one, two, three, four],
    [one, two, three, four]
  );

  useEffect(() => {
    const allFilled = values.every(Boolean);
    setHoldBtn(!allFilled);
  }, [values]);

  const [holdbtn, setHoldBtn] = useState(true);

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

  return (
    <SafeAreaView className="flex-1 bg-black p-5">
      <LogoHeader />
      <View className="flex-1 items-center flex flex-col gap-10 mt-10">
        <View className="bg-[#1a1a1a] h-24 w-20 flex justify-center items-center rounded-full">
          <MaterialIcons name="phone-iphone" size={35} color="#2dc75b" />
        </View>
        <Text className="text-3xl font-bold text-white">
          Phone Verification
        </Text>
        <View className="bg-[#1a1a1a] flex flex-col gap-4 py-10 px-7">
          <Text className="text-gray-400 text-center">
            We've sent a verification code to your phone number
          </Text>
          <Text className="font-bold text-center mt-5 text-xl text-primary">
            +234 801 234 5678
          </Text>
          <Text className="text-gray-400">Enter Verification code</Text>
          <View className="flex items-center justify-between  flex-row">
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
                    className="bg-[#323232]  mt-2 text-gray-200 border-[1px] mr-3 w-14 border-primary/10 transition-all focus:border-secondary focus:border-[1px] focus:shadow-lg focus:shadow-secondary/50 duration-300 ease-in-out p-5  rounded-lg"
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
          onPress={() => router.push("/VerificationSuccessful")}
            disabled={holdbtn}
            className={`bg-primary ${holdbtn && "opacity-30"} p-4`}
          >
            <Text className="text-center">Verify</Text>
          </TouchableOpacity>
          <Text className="font-bold text-center text-primary">
            Resend Code
          </Text>
        </View>
        <View className="flex flex-col gap-4">
          <Text className="text-gray-300">
            Need to verify your email instead?
          </Text>
          <Text className="font-semibold text-primary text-2xl">
            Go to Email Verification
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhoneVerification;
