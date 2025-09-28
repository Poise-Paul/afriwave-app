import LogoHeader02 from "@/components/LogoHeader02";
import { updateSelWallet } from "@/redux/slices/WalletSlice";
import { RootState } from "@/redux/store/store";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
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

export default function TabTwoScreen() {
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

  const [walletModal, showWalletModal] = useState(false);

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
      <View className="flex-1 p-5">
        <ScrollView className="" showsVerticalScrollIndicator={false}>
          <View className="flex-col gap-10">
            <Text className="text-2xl text-center font-bold text-white">
              How Much Are You Sending?
            </Text>
            <View className="bg-[#1A1A1A] flex flex-col gap-4 p-4">
              <View className="flex flex-col gap-2">
                <View className="flex justify-between gap-2 flex-row items-center">
                  <View>
                    <Text className="text-gray-400">Amount</Text>
                    <Text></Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => showWalletModal(true)}
                    className="flex flex-row items-center"
                  >
                    <Text className="text-lg text-primary">{selWallet}</Text>
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={24}
                      color="#2DC85B"
                    />
                  </TouchableOpacity>
                </View>
                <View className="flex justify-center items-center flex-row">
                  <Text className="text-4xl text-white font-bold">
                    {selWallet == "NGN" && "₦"} {selWallet == "GBP" && "£"}{" "}
                    {selWallet == "USD" || selWallet == "CAD" ? "$" : ""}
                  </Text>
                  <TextInput
                    placeholderTextColor="#d1d5db"
                    keyboardType="numeric"
                    placeholder="0.00"
                    className="text-4xl text-gray-300"
                  />
                </View>
              </View>
              <View className="h-2 bg-black" />
              <View className="flex justify-between flex-row">
                <Text className="text-gray-400">Fee</Text>
                <Text className="text-white">$2.99</Text>
              </View>
              <View className="flex justify-between flex-row">
                <Text className="text-gray-400">Total</Text>
                <Text className="text-white font-bold">$0.00</Text>
              </View>
            </View>

            <Text className="text-white font-bold text-xl">
              Select Transfer Method
            </Text>
            <View className="flex flex-col gap-4">
              {selWallet == "CAD" && (
                <TouchableOpacity
                  onPress={() => router.push("/SelectAfriWaveReciepient")}
                  className="flex bg-[#1A1A1A] p-5 items-center justify-between flex-row gap-4"
                >
                  <View className="flex flex-row items-center gap-4">
                    <View className="bg-primary w-12 flex justify-center items-center h-12 rounded-full">
                      <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="black"
                      />
                    </View>
                    <View className="flex flex-col">
                      <Text className="font-bold text-white text-lg">
                        Interac
                      </Text>
                      <Text className="text-gray-400">
                        Send via email or phone number{" "}
                      </Text>
                    </View>
                  </View>

                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={24}
                    color="#2DC85B"
                  />
                </TouchableOpacity>
              )}

              {selWallet == "USD" && (
                <TouchableOpacity
                  onPress={() => router.push("/CardDetails")}
                  className="bg-[#1A1A1A] items-center justify-between flex flex-row p-5"
                >
                  <View className="flex items-center flex-row gap-3">
                    <View className="bg-[#0e0d0d] h-14 flex justify-center items-center w-14 rounded-full">
                      <FontAwesome
                        name="credit-card-alt"
                        size={18}
                        color="#2DC85B"
                      />
                    </View>
                    <View className="flex flex-col">
                      <Text className="text-lg text-white font-bold">
                        Card Payment
                      </Text>
                      <Text className="text-gray-100">
                        Pay with debit or credit card
                      </Text>
                    </View>
                  </View>

                  <Entypo name="chevron-right" size={24} color="#2DC85B" />
                </TouchableOpacity>
              )}

              {selWallet == "NGN" && (
                <>
                  <TouchableOpacity
                    onPress={() => router.push("/CardDetails")}
                    className="bg-[#1A1A1A] items-center justify-between flex flex-row p-5"
                  >
                    <View className="flex items-center flex-row gap-3">
                      <View className="bg-[#0e0d0d] h-14 flex justify-center items-center w-14 rounded-full">
                        <FontAwesome
                          name="credit-card-alt"
                          size={18}
                          color="#2DC85B"
                        />
                      </View>
                      <View className="flex flex-col">
                        <Text className="text-lg text-white font-bold">
                          Fund With Card
                        </Text>
                        <Text className="text-gray-100">
                          Pay with debit or credit card
                        </Text>
                      </View>
                    </View>

                    <Entypo name="chevron-right" size={24} color="#2DC85B" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => router.push("/FundViaBankTransfer")}
                    className="bg-[#1A1A1A] items-center justify-between flex flex-row p-5"
                  >
                    <View className="flex items-center flex-row gap-3">
                      <View className="bg-[#0e0d0d] h-14 flex justify-center items-center w-14 rounded-full">
                        <FontAwesome
                          name="credit-card-alt"
                          size={18}
                          color="#2DC85B"
                        />
                      </View>
                      <View className="flex flex-col">
                        <Text className="text-lg text-white font-bold">
                          Fund Via Bank Transfer
                        </Text>
                        <Text className="text-gray-100">
                          Pay with debit or credit card
                        </Text>
                      </View>
                    </View>

                    <Entypo name="chevron-right" size={24} color="#2DC85B" />
                  </TouchableOpacity>
                </>
              )}
              <TouchableOpacity
                onPress={() => router.push("/SelectAfriWaveReciepient")}
                className="flex bg-[#1A1A1A] p-5 items-center justify-between flex-row gap-4"
              >
                <View className="flex flex-row items-center gap-4">
                  <View className="bg-primary w-12 flex justify-center items-center h-12 rounded-full">
                    <FontAwesome5 name="user-alt" size={18} color="black" />
                  </View>
                  <View className="flex flex-col">
                    <Text className="font-bold text-white text-lg">
                      AfriWave User
                    </Text>
                    <Text className="text-gray-400">
                      Send to another AfriWave User
                    </Text>
                  </View>
                </View>

                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="#2DC85B"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                if (selMethod == "Bank Transfer") {
                  router.push("/NGNBankDetails");
                } else if (selMethod == "Zelle" || selMethod == "Interac") {
                  router.push("/SendMoneyPageSecond");
                } else if (selMethod == "Afriwave User") {
                  router.push("/SendAfriwaveUser");
                }
              }}
              className="bg-primary/70 mt-28 p-4"
            >
              <Text className="text-center text-white">Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/* Select Payment Source */}
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
}
