import React from "react";
import { Image, Text, View } from "react-native";

type Props = {};

const LogoHeader = (props: Props) => {
  return (
    <View className="flex border-b-8 pb-4 gap-2 items-center border-[#262626] flex-row justify-center">
      <Image
        source={require("@/assets/images/afriwave-logo.png")}
        className="h-10 w-10"
      />
      <Text className="text-white font-bold text-2xl">AfriWave</Text>
    </View>
  );
};

export default LogoHeader;
