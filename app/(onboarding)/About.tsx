import InputText from "@/components/InputText";
import LogoHeader from "@/components/LogoHeader";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

type Props = {};

const About = (props: Props) => {
  const [showReasons, setShowReasons] = useState(false);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const reasons = [
    "Search Engine (Google, Bing, etc.)",
    "Social Media",
    "Radio",
    "Television",
    "Newspaper/Online Newspaper",
    "Billboard",
    "Word of Mouth",
    "Referral",
    "Other",
  ];
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader />
      <ScrollView className="flex-1 p-5">
        <View className="flex-1 flex-col gap-5">
          <Text className="text-3xl text-center font-bold text-white">
            Tell Us About Yourself
          </Text>
          <Text className="text-gray-400 text-lg text-center">
            Please provide your personal information to continue{" "}
          </Text>
          <View className="mt-10 flex flex-col gap-10">
            <InputText
              title="First Legal Name"
              placeholder="Enter your first name"
            />
            <InputText
              title="Last Legal Name"
              placeholder="Enter your last name"
            />
            <View className="flex gap-2 flex-col">
              <Text className="text-white font-semibold">
                How did you hear about us
              </Text>
              <TouchableOpacity
                onPress={() => setShowReasons(true)}
                className="bg-[#1a1a1a] px-4 py-3 items-center flex flex-row justify-between border-[1px] border-[#525252]"
              >
                <Text className="text-white">Select an option</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/AfriwaveUse")}
            className="bg-primary mt-10 p-4"
          >
            <Text className="text-center">Proceed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View className="flex flex-col gap-10">
        <View className="flex justify-center flex-row gap-2">
          <View className="h-3 w-3 bg-primary rounded-full" />
          <View className="h-3 w-10 bg-primary rounded-full" />
          <View className="h-3 w-3 bg-gray-700 rounded-full" />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/(onboarding)")}
          className="flex flex-row justify-center gap-1 items-center"
        >
          <MaterialIcons name="arrow-back" size={24} color="#9ca3af" />
          <Text className="text-gray-400">Back to Create Account</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Control Here */}
      <Modal
        visible={showReasons}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowReasons(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowReasons(false)}>
          <View className="flex-1 justify-end bg-[#1E1E1E]/50">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="bg-white rounded-t-2xl max-h-[90%]"
              >
                <View className="bg-white p-5 mb-10 rounded-t-3xl">
                  <View className="flex flex-row justify-end">
                    <TouchableOpacity
                      onPress={() => setShowReasons(false)}
                      className="rounded-full flex justify-center items-center h-10 w-10 bg-[#000]/10"
                    >
                      <FontAwesome6 name="xmark" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>
                  <View className="flex text-center flex-col gap-4">
                    <Text className="text-2xl font-semibold">
                      How did you hear about us?
                    </Text>
                    <View className="flex gap-3 my-4 flex-col">
                      {reasons.map((x, key) => (
                        <TouchableOpacity
                          key={key}
                          onPress={() => setSelectedReason(x)}
                          className="flex justify-between flex-row"
                        >
                          <Text>{x}</Text>
                          <MaterialCommunityIcons
                            name={
                              x == selectedReason
                                ? "checkbox-marked-circle"
                                : "checkbox-blank-circle-outline"
                            }
                            size={24}
                            color="black"
                          />
                        </TouchableOpacity>
                      ))}
                    </View>

                    <TouchableOpacity
                      onPress={() => setShowReasons(false)}
                      className="bg-primary p-4"
                    >
                      <Text className="font-NeuePlakSemibold text-center text-lg text-white">
                        Continue
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default About;
