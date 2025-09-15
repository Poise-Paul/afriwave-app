import LogoHeader02 from "@/components/LogoHeader02";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

type FormData = {
  one: number;
  two: number;
  three: number;
  four: number;
};

const EnterPinScreen = (props: Props) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const boxes: Array<keyof FormData> = ["one", "two", "three", "four"];
  const [inputValue, setInputValue] = useState(Array(boxes.length).fill(""));

  const refs = useRef<(TextInput | null)[]>([]);

  //   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];

  const keypad = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "." },
    { label: "0" },
    {
      label: "backspace",
      icon: <Feather name="delete" size={24} color="white" />,
    },
  ];

  const handleChange = (text: string, index: number) => {
    if (text.length === 1 && index < refs.current.length - 1) {
      // Move focus to the next input if text is entered
      refs.current[index + 1]?.focus();
    } else if (text.length === 0 && index > 0) {
      // Move focus to the previous input if deleting text
      refs.current[index - 1]?.focus();
    }
  };

  const handleNumberPress = (num: string | number) => {
    if (num == "backspace") {
      const filledIndex = inputValue.findIndex((val) => val === "");
      const indexToRemove =
        filledIndex === -1 ? inputValue.length - 1 : filledIndex - 1;
      if (indexToRemove >= 0) {
        const newValue = [...inputValue];
        newValue[indexToRemove] = "";
        setInputValue(newValue);
        refs.current[indexToRemove]?.focus();
      }
    } else {
      let newValue = [...inputValue];
      const emptyIndex = inputValue.indexOf("");
      if (emptyIndex !== -1) {
        newValue[emptyIndex] = num.toString();
        setInputValue(newValue);
        refs.current[emptyIndex]?.focus();
      }
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <View className="flex-1 flex flex-col gap-4 p-5">
        <View className="justify-center flex flex-col gap-1  items-center">
          <View className="bg-[#1A1A1A] h-20 w-20 justify-center items-center rounded-full">
            <MaterialIcons name="security" size={40} color="#2DC85B" />
          </View>

          <Text className="text-white font-bold mt-4 text-2xl">
            Payment Authorization
          </Text>
          <Text className="text-gray-500 text-lg">
            Please enter your PIN to authorize this transaction
          </Text>
        </View>

        <View className="flex flex-row gap-1 justify-center items-center">
          {boxes.map((x, index) => (
            <Controller
              key={index}
              control={control}
              disabled={false}
              render={({ field: { onChange } }) => (
                <TextInput
                  key={index}
                  ref={(ref) => {
                    refs.current[index] = ref;
                  }}
                  keyboardType="numeric"
                  secureTextEntry={true}
                  editable={false}
                  maxLength={1}
                  value={inputValue[index]}
                  onChangeText={(value) => {
                    handleChange(value, index);
                    onChange(value);
                  }}
                  className={`text-3xl h-20  px-6 text-center py-5 w-[65px] mt-2 font-extrabold text-primary mr-3 transition-all border-primary/50 focus:border-secondary border-[1px] focus:shadow-secondary/10 duration-300 ease-in-out`}
                />
              )}
              name={x}
              rules={{ required: true }}
            />
          ))}
        </View>

        <View>
          <View className="flex flex-row justify-center flex-wrap -mx-2 -my-2 rounded-2xl p-5">
            {keypad.map((item, index) => (
              <View key={index} className="w-1/3 px-2 py-2">
                <TouchableOpacity
                  onPress={() => handleNumberPress(item.label)}
                  className="bg-[#1A1A1A] items-center justify-center p-5"
                >
                  {item.icon ? (
                    item.icon
                  ) : (
                    <Text className="font-NeuePlakSemibold text-white text-3xl">
                      {item.label}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/ProcessingWithReciept")}
          className="bg-primary p-4"
        >
          <Text className="text-center text-lg">Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-primary text-lg text-center">Forgot PIN?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EnterPinScreen;
