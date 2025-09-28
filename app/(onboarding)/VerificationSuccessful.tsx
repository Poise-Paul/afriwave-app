import LogoHeader from "@/components/LogoHeader";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const VerificationSuccessful = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader />
      <ScrollView className="flex-1">
        <View className="flex-1 mt-40 flex-col gap-7 my-auto justify-center items-center">
          <Octicons name="check-circle-fill" size={100} color="#2DC85B" />
          <Text className="text-white text-2xl font-bold">
            Verification Successful
          </Text>
          <Text className="text-gray-300 mx-14 text-center text-lg">
            Your identity has been successfully verified. You can now continue
            using AfriWave services.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/About")}
            className="bg-primary w-[90%] p-4"
          >
            <Text className="text-center">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="p-5 items-center">
        <View className="flex flex-row gap-2 items-center mb-2">
          <Image
            source={require("@/assets/images/afriwave-logo.png")}
            className="h-10 w-10"
          />
          <Text className="font-semibold text-2xl text-primary">AfriWave</Text>
        </View>

        <Text className="text-gray-300 text-center">
          Secure. Fast. Reliable
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerificationSuccessful;
