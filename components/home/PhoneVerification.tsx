import { fetchCountries } from "@/api/onboarding/inde";
import { Country } from "@/types";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CountryPickerModal from "../onboarding/CountryPickerModal";

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

const PhoneVerification = ({ setActiveTab }: Props) => {
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

  const refs = useRef<Array<TextInput | null>>([]);

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

  const [countryCode, setCountryCode] = useState("+233");
  const [countryFlag, setCountryFlag] = useState(
    "https://flagcdn.com/w320/gh.png"
  );
  const [showCountries, setShowCountries] = useState(false);
  const [searchCountry, setSearchCountry] = useState("Ghana");
  const [countries, setCountries] = useState<Country[]>([]);

  const [selCountry, setSelCountry] = useState("Nigeria");

  const {
    data: countriesData,
    error: countriesError,
    isLoading: countriesLoader,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  useEffect(() => {
    if (!countriesData) return;
    setCountries(countriesData);
  }, [countriesData]);

  return (
    <View className="flex-1 flex-col gap-3 mt-5">
      <Text className="text-3xl font-bold text-white">Phone Verification</Text>
      <Text className="text-gray-400">
        We've sent a verification code to your phone number
      </Text>

      <View className="flex mt-5 flex-col">
        <Text>Phone Number</Text>
        <View className="flex w-full flex-row gap-3">
          <View className="border-[#525252] border-[1px]">
            <TouchableOpacity
              onPress={() => setShowCountries(true)}
              className="flex bg-[#1a1a1a] items-center p-3 flex-row gap-2"
            >
              <Image
                className="w-8 rounded-full h-8"
                source={{ uri: countryFlag }}
              />

              <Text className="text-white">{countryCode}</Text>
              <Fontisto name="angle-down" size={12} color="#94a3b8" />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholderTextColor={"#d1d5db"}
            keyboardType="numeric"
            className="bg-[#1a1a1a] border-[1px] w-[70%] p-3 text-gray-300 border-[#525252]"
            placeholder="Enter phone number"
          />
        </View>
      </View>
      <TouchableOpacity className="bg-primary my-2 p-4">
        <Text className="text-center">Send Code</Text>
      </TouchableOpacity>

      <View className="bg-[#1a1a1a] mt-5 p-5">
        <Text className="font-bold text-white text-xl">
          Email Verification Code
        </Text>
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
          <View className="flex justify-center flex-row gap-2">
            <Text className="font-semibold text-lg text-primary">
              Resend Code
            </Text>
            <Text className="text-gray-300 text-lg">(1:30)</Text>
          </View>
        </View>
      </View>

      <View className="bg-primary my-3 gap-3 flex flex-row p-5">
        <MaterialCommunityIcons
          name="checkbox-marked-circle"
          size={24}
          color="white"
        />
        <Text className="font-bold text-lg text-white">
          Phone number verified
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity className="py-4 px-6 border-[#525252] border-[1px]">
          <Text className="text-white">Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab(0)}
          className="bg-primary px-6 py-4"
        >
          <Text className="">Next</Text>
        </TouchableOpacity>
      </View>

      <CountryPickerModal
        showCountries={showCountries}
        setShowCountries={setShowCountries}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        countries={countries}
        setSelCountry={setSelCountry}
        setCountryFlag={setCountryFlag}
        setCode={setCountryCode}
      />
    </View>
  );
};

export default PhoneVerification;
