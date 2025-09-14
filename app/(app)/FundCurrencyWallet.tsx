import LogoHeader02 from "@/components/LogoHeader02";
import { updateSelWallet } from "@/redux/slices/WalletSlice";
import { RootState } from "@/redux/store/store";
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
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const FundCurrencyWallet = (props: Props) => {
  const [walletModal, showWalletModal] = useState(false);
  const { selWallet } = useSelector((state: RootState) => state.wallet);

  const wallets = [
    { code: "USD", name: "USD Wallet" },
    { code: "CAD", name: "CAD Wallet" },
    { code: "NGN", name: "NGN Wallet" },
    { code: "GBP", name: "GBP Wallet" },
  ];

  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <ScrollView>
        <View className="flex mt-10 flex-col gap-4">
          <Text className="text-3xl text-white font-bold">
            Fund Your Wallet
          </Text>
          <Text className="text-gray-300">
            Enter the amount you wish to add to your wallet
          </Text>
          <View className="bg-[#1A1A1A] gap-4 p-5">
            <View className="flex justify-between flex-row">
              <Text className="text-white">Amount</Text>
              <TouchableOpacity onPress={() => showWalletModal(true)} className="flex flex-row items-center">
                <Text className="text-gray-300 text-lg">{selWallet}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>

            <View className="border-2 border-primary p-4">
              <TextInput
                placeholderTextColor="#9ca3af"
                className="text-4xl text-gray-300"
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
            <View className="flex justify-end flex-row items-center gap-1">
              <MaterialCommunityIcons
                name="approximately-equal"
                size={24}
                color="#d1d5db"
              />
              <Text className="text-gray-300 text-xl">25.00 {selWallet}</Text>
            </View>
          </View>
          <View className="flex flex-row gap-3 bg-[#1A1A1A] p-4">
            <View className="bg-primary/50 justify-center items-center rounded-full h-16 w-16">
              <FontAwesome6 name="circle-info" size={24} color="white" />
            </View>
            <Text className="text-white max-w-96 text-lg">
              Minimum funding amount is $10. Transaction fees may apply based on
              your payment method.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="p-5">
        <TouchableOpacity
          onPress={() => router.push("/SelectPaymentMethod")}
          className="bg-primary/50 p-4 rounded-full"
        >
          <Text className="text-white text-xl text-center">Continue</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Control Here */}
      <Modal
        visible={walletModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => showWalletModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => showWalletModal(false)}>
          <View className="flex-1 justify-end bg-[#1E1E1E]/50">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                className="bg-black rounded-t-2xl max-h-[90%]"
              >
                <View className="bg-black p-5 mb-10 rounded-t-3xl">
                  <View className="flex flex-row justify-end">
                    <TouchableOpacity
                      onPress={() => showWalletModal(false)}
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
                      {wallets.map((x, key) => (
                        <TouchableOpacity
                          key={key}
                          onPress={() => dispatch(updateSelWallet(x.code))}
                          className="flex justify-between flex-row"
                        >
                          <Text className="text-white">{x.name}</Text>
                          <MaterialCommunityIcons
                            name={
                              x.code == selWallet
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
                      onPress={() => showWalletModal(false)}
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

export default FundCurrencyWallet;
