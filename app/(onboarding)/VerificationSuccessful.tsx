import LogoHeader from "@/components/LogoHeader";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
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
      <ScrollView>
        <View className="flex-1 mt-10 flex-col gap-10 justify-center items-center">
          <Octicons name="check-circle-fill" size={100} color="#2DC85B" />
          <Text className="text-white text-4xl font-bold">
            Verification Successful
          </Text>
          <Text className="text-gray-300 text-center text-lg">
            Your identity has been successfully verified. You can now continue
            using AfriWave services.
          </Text>
          <TouchableOpacity onPress={() => router.push("/About")} className="bg-primary w-[90%] p-4">
            <Text className="text-center">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="p-5">
        <Text className="text-gray-300 text-center">Secure. Fast. Reliable</Text>
      </View>
    </SafeAreaView>
  );
};

export default VerificationSuccessful;
