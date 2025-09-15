import { RootState } from "@/redux/store/store";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSelector } from "react-redux";

type Props = {};

const SendMoneyPage = (props: Props) => {
  const { selWallet } = useSelector((state: RootState) => state.wallet);

  const [methodModal, showMethodModal] = useState(false);

  const [selMethod, setSelMethod] = useState("");

  useEffect(() => {
    if (selWallet == "USD" || selWallet == "GBP") {
      setSelMethod("Zelle");
    } else if (selWallet == "CAD") {
      setSelMethod("Interac");
    } else if (selWallet == "NGN") {
      setSelMethod("Bank Transfer");
    }
  }, [selWallet]);

  const methods = ["Zelle", "Interac", "Bank Transfer", "Afriwave User"];
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="p-5 flex flex-col gap-10">
        <View className="flex flex-row justify-end">
          <View className="bg-primary/70 rounded-full px-4 py-1">
            <Text className="text-white font-semibold">1/4</Text>
          </View>
        </View>

        <Text className="text-2xl font-bold text-white">
          How Much Are You Sending?
        </Text>
        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
          <View className="flex flex-row gap-2">
            <View className="flex gap-2 flex-row items-center">
              <Image
                className="h-10 w-10"
                source={require("@/assets/images/us-flag.png")}
              />
              <Text className="text-2xl text-white">{selWallet}</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#9ca3af"
              />
            </View>

            <TextInput
              placeholderTextColor="#d1d5db"
              keyboardType="numeric"
              placeholder="0.00"
              className="text-2xl text-gray-300"
            />
          </View>

          <Text className="text-gray-400 text-lg">
            Available balance: $2,450.75{" "}
          </Text>
        </View>
        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
          <Text className="text-gray-400">Transfer Method</Text>
          <TouchableOpacity
            onPress={() => showMethodModal(true)}
            className="flex justify-between items-center flex-row"
          >
            <View className="flex items-center flex-row gap-4">
              <View className="bg-[#2d2d2d] p-1">
                <Image
                  className="h-10 w-10"
                  source={require("@/assets/images/zelle.png")}
                />
              </View>
              <Text className="text-2xl text-white font-bold">{selMethod}</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#9ca3af"
            />
          </TouchableOpacity>
        </View>

        <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-400 text-xl">Fee</Text>
            <Text className="text-xl text-white">$0.00</Text>
          </View>
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-400 text-xl">AfriWave Fee</Text>
            <Text className="text-xl text-white">$4.99</Text>
          </View>
          <View className="h-3 bg-black" />
          <View className="flex justify-between items-center flex-row">
            <Text className="text-gray-400 text-xl">AfriWave Fee</Text>
            <Text className="text-xl text-white">$4.99</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (selMethod == "Bank Transfer") {
              router.push("/NGNBankDetails");
            } else if (selMethod == "Zelle" || selMethod == "Interac") {
              router.push("/SendMoneyPageSecond");
            }else if (selMethod == "Afriwave User") {
                router.push("/SendAfriwaveUser")
            }
          }}
          className="bg-primary/70 rounded-full p-4"
        >
          <Text className="text-center text-white">Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Select Payment Source */}
      <Modal
        visible={methodModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => showMethodModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => showMethodModal(false)}>
          <View className="flex-1 justify-end bg-[#1E1E1E]/50">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="bg-black rounded-t-2xl max-h-[90%]"
              >
                <View className="bg-black p-5 mb-10 rounded-t-3xl">
                  <View className="flex flex-row justify-end">
                    <TouchableOpacity
                      onPress={() => showMethodModal(false)}
                      className="rounded-full flex justify-center items-center h-10 w-10 bg-[#000]/10"
                    >
                      <FontAwesome6 name="xmark" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>
                  <View className="flex text-center flex-col gap-4">
                    <Text className="text-2xl text-white font-semibold">
                      Choose Wallet
                    </Text>
                    <View className="flex gap-3 my-4 flex-col">
                      {methods.map((x, key) => (
                        <TouchableOpacity
                          key={key}
                          onPress={() => setSelMethod(x)}
                          className="flex justify-between flex-row"
                        >
                          <Text className="text-white">{x}</Text>
                          <MaterialCommunityIcons
                            name={
                              x == selMethod
                                ? "checkbox-marked-circle"
                                : "checkbox-blank-circle-outline"
                            }
                            size={24}
                            color="white"
                          />
                        </TouchableOpacity>
                      ))}
                    </View>

                    <TouchableOpacity
                      onPress={() => showMethodModal(false)}
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

export default SendMoneyPage;
