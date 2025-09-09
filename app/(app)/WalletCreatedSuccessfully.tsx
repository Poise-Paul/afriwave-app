import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const WalletCreatedSuccessfully = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-5 flex flex-col gap-5 mt-10 justify-center items-center">
        <View className="bg-primary/10 flex justify-center items-center h-40 rounded-full w-40">
          <View className="bg-primary/20 h-32 flex justify-center items-center rounded-full w-32">
            <MaterialIcons name="check-circle" size={100} color="#2DC85B" />
          </View>
        </View>
        <Text className="text-4xl font-bold text-white">
          Your USD wallet is ready!
        </Text>
        <Text className="text-gray-300 text-center text-xl">
          You can now send, receive, and store funds in your USD wallet.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(app)/(tabs)")}
          className="bg-[#047429] my-14 w-full p-4 rounded-full"
        >
          <Text className="text-white text-lg text-center">Go to Wallet</Text>
        </TouchableOpacity>
        <View className="flex w-full items-center flex-col gap-5">
          <View className="bg-[#1A1A1A] w-full mx-auto max-w-[70%]">
            <Image
              resizeMode="contain"
              className="h-40 w-full"
              source={require("@/assets/images/wallet-created.png")}
            />
          </View>
          <Text className="text-gray-300">
            Your funds are secure and ready for transactions{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WalletCreatedSuccessfully;
