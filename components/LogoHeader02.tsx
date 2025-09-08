import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

type Props = {};

const LogoHeader02 = (props: Props) => {
  return (
    <View className="flex border-b-8 pb-4 gap-2 items-center border-[#262626] flex-row justify-between">
      <MaterialCommunityIcons name="menu" size={24} color="white" />
      <View className="flex flex-row gap-2 items-center">
        <Image
          source={require("@/assets/images/afriwave-logo.png")}
          className="h-10 w-10"
        />
        <Text className="text-white font-bold text-2xl">AfriWave</Text>
      </View>
      <Image
        className="h-10 w-10 rounded-full"
        source={require("@/assets/images/user-profile.png")}
      />
    </View>
  );
};

export default LogoHeader02;
