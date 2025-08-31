import React from "react";
import { Text, TextInput, View } from "react-native";

type Props = {
  title: string;
  placeholder: string;
  secureTextEntry?: boolean;
};

const InputText = ({ title, placeholder, secureTextEntry }: Props) => {
  return (
    <View className="flex flex-col gap-[6px]">
      <Text className="text-white font-bold">{title}</Text>
      <TextInput
        placeholderTextColor={"#94a3b8"}
        secureTextEntry={secureTextEntry}
        className="bg-[#1a1a1a] border-[1px] p-4 text-gray-500 border-[#525252]"
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputText;
