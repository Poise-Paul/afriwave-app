import { fetchCountries } from "@/api/onboarding/inde";
import InputText from "@/components/InputText";
import LogoHeader from "@/components/LogoHeader";
import CountryPickerModal from "@/components/onboarding/CountryPickerModal";
import { Country } from "@/types";
import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const index = (props: Props) => {
  const [countryCode, setCountryCode] = useState("+233");
  const [countryFlag, setCountryFlag] = useState(
    "https://flagcdn.com/w320/gh.png"
  );
  const [showCountries, setShowCountries] = useState(false);
  const [searchCountry, setSearchCountry] = useState("Ghana");
  const [countries, setCountries] = useState<Country[]>([]);
  const [selCountry, setSelCountry] = useState("Nigeria");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const passwordEnteries = [
    "8+ Characters",
    // "Uppercase",
    // "Lowercase",
    // "Number",
    // "Special character",
  ];

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
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView>
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
            <View className="flex gap-2 flex-col">
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
                  placeholderTextColor={"#94a3b8"}
                  className="bg-[#1a1a1a] border-[1px] w-[70%] p-3 text-gray-500 border-[#525252]"
                  placeholder="Enter phone number"
                />
              </View>
              <View className="flex justify-between items-center flex-row">
                <Text className="text-green-500">Have a referral code?</Text>
                <Text className="text-green-500">Privacy Policy</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setAgreeTerms(!agreeTerms)}
              className="flex flex-row gap-2 items-center"
            >
              <TouchableOpacity onPress={() => setAgreeTerms(!agreeTerms)}>
                <MaterialCommunityIcons
                  name={
                    agreeTerms ? "checkbox-marked" : "checkbox-blank-outline"
                  }
                  size={24}
                  color="#525252"
                />
              </TouchableOpacity>

              <Text className="text-white">
                I agree to the
                <Text className="text-green-500">Terms of Service</Text> and
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Work Screen */}
      <TouchableOpacity
      className="mx-auto"
        onPress={() => router.push("/(app)/(tabs)")}
      >
        <Text className="text-white">Go to work screen</Text>
      </TouchableOpacity>
      {/* End Work Screen */}
      <View className="m-5 flex flex-col gap-4 mb-20">
        <TouchableOpacity
          onPress={() => router.push("/EmailVerification")}
          className="bg-[#2dc75b] p-5"
        >
          <Text className="text-center">Proceed</Text>
        </TouchableOpacity>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[#94a3b8]">Already have an account</Text>
          <TouchableOpacity>
            <Text className="text-[#94a3b8]">Sign In</Text>
          </TouchableOpacity>
        </View>
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
    </SafeAreaView>
  );
};

export default index;
