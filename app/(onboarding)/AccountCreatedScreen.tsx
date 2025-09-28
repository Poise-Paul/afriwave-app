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

const AccountCreatedScreen = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader />
      <ScrollView className="flex-1">
        <View className="flex-1 my-52 flex-col gap-5 justify-center items-center">
          <Octicons name="check-circle-fill" size={100} color="#2DC85B" />
          <Text className="text-white text-center text-2xl font-bold">
            Account Created Successfully
          </Text>
          <Text className="text-gray-300 text-center text-lg">
            You're all set! Welcome aboard.
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="bg-primary w-[90%] p-4"
          >
            <Text className="text-center">Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="p-5">
        <Text className="text-gray-300 text-center">
          Secure. Fast. Reliable
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AccountCreatedScreen;
