import { fetchCountries } from "@/api/onboarding/inde";
import InputText from "@/components/InputText";
import LogoHeader from "@/components/LogoHeader";
import { Fontisto } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";


type Props = {};

const index = (props: Props) => {
      const [countryCode, setCountryCode] = useState("+233");
       const [countryFlag, setCountryFlag] = useState(
    "https://flagcdn.com/w320/gh.png"
  );
  const passwordEnteries = [
    "8+ Characters",
    "Uppercase",
    "Lowercase",
    "Number",
    "Special character",
  ];

  const {
    data: countriesData,
    error: countriesError,
    isLoading: countriesLoader,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View>
        <LogoHeader />
        <View className="justify-center p-5 items-center">
          <Text className="text-2xl text-white font-bold">
            Create Your Account
          </Text>
          <Text className="text-gray-200 text-xl">
            Join AfriWave and start your journey
          </Text>

          <View className="flex mt-5 flex-col gap-4">
            <InputText title="Email Address" placeholder="Enter your email" />
            <View className="flex flex-col gap-2">
              <InputText title="Password" placeholder="Create a password" />
              <View className="flex flex-wrap items-center gap-5 flex-row">
                {passwordEnteries.map((entry, index) => (
                  <Text key={index} className="text-green-500">
                    {entry}
                  </Text>
                ))}
              </View>
            </View>
            <InputText
              secureTextEntry
              title="Confirm Password"
              placeholder="password"
            />
            <View></View>
            <TouchableOpacity className="flex bg-[#1a1a1a] items-center flex-row gap-2">
                  <Image
                  className="w-10 rounded-full h-10"
                  source={{ uri: countryFlag }}
                />
               
                <Text className="text-white">{countryCode}</Text>
 <Fontisto name="angle-down" size={12} color="#94a3b8" />
              </TouchableOpacity>
              <View>
              </View>
            </View>
          </View>
        </View>
     
    </SafeAreaView>
  );
};

export default index;
