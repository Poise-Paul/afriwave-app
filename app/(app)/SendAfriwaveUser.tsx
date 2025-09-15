import LogoHeader02 from "@/components/LogoHeader02";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const SendAfriwaveUser = (props: Props) => {
  const [selPayer, setSelPayer] = useState("");
  const [error, showError] = useState(false);
  const verifiedNames = ["Kofi Mensah", "Ama Owusu", "Kwame Asante"];

  const validateUsers = () => {
    if (verifiedNames.includes(selPayer)) {
      showError(false);
      router.push("/AfriwaveTransferPreview");
    } else {
      showError(true);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="p-5 flex flex-col gap-8">
          <View className="flex flex-col gap-2">
            <Text className="text-white text-3xl font-bold">
              Send to AfriWave User
            </Text>
            <Text className="text-gray-400">
              Enter the username or email of the recipient.
            </Text>
          </View>
          {error && (
            <View className="bg-[#FF4D4E] p-4">
              <Text className="font-bold text-white text-center">
                The username or email is invalid.{" "}
              </Text>
            </View>
          )}
          <View className="flex flex-col gap-1">
            <TextInput
              placeholder="Username or Email"
              value={selPayer}
              onChangeText={setSelPayer}
              placeholderTextColor="#94a3b8"
              className="border-primary p-4 text-gray-400 bg-[#1a1a1a] rounded-full border-[1px]"
            />
            {selPayer && (
              <Text className="text-white text-right">{selPayer}</Text>
            )}
          </View>

          {error && (
            <>
              <Text className="text-gray-400">
                Please check the username or email and try again. Make sure
                there are no typos or extra spaces.{" "}
              </Text>
              <View className="bg-[#1A1A1A] flex flex-col gap-2 p-5">
                <Text className="text-white text-lg font-bold">
                  Tips for finding users
                </Text>
                <Text className="text-gray-400">
                  • Use complete email address (example@mail.com)
                </Text>
                <Text className="text-gray-400">
                  • Try the exact username without spaces
                </Text>
                <Text className="text-gray-400">
                  • Check for correct spelling
                </Text>
              </View>
            </>
          )}
          <TouchableOpacity
            disabled={selPayer == ""}
            onPress={validateUsers}
            className={`bg-primary/70 p-4 ${
              selPayer == "" && "opacity-30"
            } rounded-full`}
          >
            <Text className="text-center text-white">Validate User</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-center text-white">Can't find user</Text>
          </TouchableOpacity>

          <View className="bg-[#1A1A1A] flex flex-col gap-5 p-5">
            <Text className="text-2xl font-bold text-white">
              Recent Recipients
            </Text>
            <TouchableOpacity
              onPress={() => setSelPayer("Kofi Mensah")}
              className="flex flex-row gap-3 items-center"
            >
              <View className="bg-blue-500 rounded-full flex justify-center items-center h-14 w-14">
                <FontAwesome5 name="user-alt" size={18} color="white" />
              </View>
              <View>
                <Text className="text-white text-lg font-bold">
                  Kofi Mensah
                </Text>
                <Text className="text-gray-400">kofi.mensah@mail.com </Text>
              </View>
            </TouchableOpacity>
            <View className="h-2 bg-black" />
            <TouchableOpacity
              onPress={() => setSelPayer("Ama Owusu")}
              className="flex flex-row gap-3 items-center"
            >
              <View className="bg-yellow-500 rounded-full flex justify-center items-center h-14 w-14">
                <FontAwesome5 name="user-alt" size={18} color="black" />
              </View>
              <View>
                <Text className="text-white text-lg font-bold">Ama Owusu</Text>
                <Text className="text-gray-400">amaowusu@mail.com</Text>
              </View>
            </TouchableOpacity>
            <View className="h-2 bg-black" />
            <TouchableOpacity
              onPress={() => setSelPayer("Kwame Asante")}
              className="flex flex-row gap-3 items-center"
            >
              <View className="bg-blue-500 rounded-full flex justify-center items-center h-14 w-14">
                <FontAwesome5 name="user-alt" size={18} color="white" />
              </View>
              <View>
                <Text className="text-white text-lg font-bold">
                  Kwame Asante
                </Text>
                <Text className="text-gray-400">k.asante@mail.com</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendAfriwaveUser;
