import InputText from "@/components/InputText";
import LogoHeader from "@/components/LogoHeader";
import { MaterialIcons } from "@expo/vector-icons";
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

const login = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 p-5">
        <LogoHeader />
        <ScrollView>
          <View className="my-10 flex p-3 flex-col gap-5">
            <Text className="text-2xl text-center font-bold text-white">
              Welcome Back
            </Text>
            <Text className="text-gray-400 text-center">
              Sign in to continue to your account
            </Text>
            <View className="flex flex-col my-5 gap-7">
              <InputText title="Username" placeholder="Enter your username" />
              <View className="flex flex-col gap-2">
                <InputText title="Password" placeholder="Enter your password" />
                <View className="justify-end items-end">
                  <TouchableOpacity>
                    <Text className="text-primary text-sm">Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex justify-center items-center flex-col gap-3">
                <TouchableOpacity>
                  <Image
                    className="h-24 w-24"
                    source={require("@/assets/images/FaceId.png")}
                  />
                </TouchableOpacity>

                <Text className="text-primary text-lg">Face ID Unlock</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/(app)/(tabs)")}
                className="bg-primary p-4"
              >
                <Text className="text-center">Sign In</Text>
              </TouchableOpacity>
              <View className="flex flex-row mt-5 justify-center gap-2 items-center">
                <Text className="text-gray-200">Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push("/(onboarding)")}>
                  <Text className="text-primary">Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="flex justify-center flex-row gap-2 items-center">
          <MaterialIcons name="security" size={24} color="#2DC85B" />
          <Text className="text-gray-300 text-sm">
            Secured with end-to-end encryption
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
