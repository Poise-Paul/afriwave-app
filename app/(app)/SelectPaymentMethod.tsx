import LogoHeader02 from "@/components/LogoHeader02";
import { RootState } from "@/redux/store/store";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

type Props = {};

const SelectPaymentMethod = (props: Props) => {
  const { selWallet } = useSelector((state: RootState) => state.wallet);
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 flex-col gap-5">
        <LogoHeader02 />
        <View className="p-5 flex-1 flex-col gap-5">
          <Text className="text-3xl font-bold text-white">
            Select Payment Method
          </Text>
          <Text className="text-gray-300 text-lg">
            Choose how you want to fund your wallet{" "}
          </Text>
          {selWallet == "USD" && (
            <TouchableOpacity
              onPress={() => router.push("/CardDetails")}
              className="bg-[#1A1A1A] items-center justify-between flex flex-row p-5"
            >
              <View className="flex items-center flex-row gap-3">
                <View className="bg-[#0e0d0d] h-20 flex justify-center items-center w-20 rounded-full">
                  <FontAwesome
                    name="credit-card-alt"
                    size={24}
                    color="#2DC85B"
                  />
                </View>
                <View className="flex flex-col gap-1">
                  <Text className="text-2xl text-white font-bold">
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

          {selWallet == "CAD" && (
            <TouchableOpacity
              onPress={() => router.push("/FundWithInterac")}
              className="bg-[#1A1A1A] items-center justify-between flex flex-row p-5"
            >
              <View className="flex items-center flex-row gap-3">
                <View className="bg-[#0e0d0d] h-20 flex justify-center items-center w-20 rounded-full">
                  <FontAwesome
                    name="credit-card-alt"
                    size={24}
                    color="#2DC85B"
                  />
                </View>
                <View className="flex flex-col gap-1">
                  <Text className="text-2xl text-white font-bold">Interac</Text>
                  <Text className="text-gray-100">Pay using interac</Text>
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
                  <View className="bg-[#0e0d0d] h-20 flex justify-center items-center w-20 rounded-full">
                    <FontAwesome
                      name="credit-card-alt"
                      size={24}
                      color="#2DC85B"
                    />
                  </View>
                  <View className="flex flex-col gap-1">
                    <Text className="text-2xl text-white font-bold">
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
                  <View className="bg-[#0e0d0d] h-20 flex justify-center items-center w-20 rounded-full">
                    <FontAwesome
                      name="credit-card-alt"
                      size={24}
                      color="#2DC85B"
                    />
                  </View>
                  <View className="flex flex-col gap-1">
                    <Text className="text-2xl text-white font-bold">
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
            onPress={() => {
              if (selWallet == "USD") {
                router.push("/CardDetails");
              } else if (selWallet == "CAD") {
                router.push("/FundWithInterac");
              } else if (selWallet == "GBP") {
                router.push("/CardDetails");
              } else if (selWallet == "NGN") {
                router.push("/FundViaBankTransfer");
              }
            }}
            className="bg-primary/50 mt-16 p-4 rounded-full"
          >
            <Text className="text-white text-center text-lg">Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(app)/(tabs)")}>
            <Text className="text-xl text-center text-white font-bold">
              Back to Wallet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectPaymentMethod;
