import InputText from "@/components/InputText";
import LogoHeader02 from "@/components/LogoHeader02";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {};

const CardDetails = (props: Props) => {
  const [saveCard, setSaveCard] = useState(false);
  return (
    <SafeAreaView className="flex-1 bg-black text-primary">
      <View className="flex-1 flex-col gap-5 p-5">
        <LogoHeader02 />
        <ScrollView
        showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          className="flex-1"
        >
          <View className="flex-col flex-1 gap-5">
            <Text className="text-2xl mt-3 font-bold text-white">
              CardDetails
            </Text>
            <Text className="text-gray-100">
              Enter your card information to continue{" "}
            </Text>
            <View className="bg-[#1A1A1A] flex flex-col gap-5 p-5">
              <View className="flex flex-row justify-between items-center">
                <View className="flex gap-2 flex-row items-center">
                  <FontAwesome
                    name="credit-card-alt"
                    size={24}
                    color="#2DC85B"
                  />
                  <Text className="text-white text-xl">Card Information</Text>
                </View>
                <View className="flex items-center flex-row">
                  <View className="flex gap-5 flex-row">
                    <View className="bg-[#222222]">
                      <Image
                        className="h-14 w-14"
                        source={require("@/assets/images/visa-image.png")}
                      />
                    </View>

                    <View className="bg-[#222222]">
                      <Image
                        className="h-14 w-14"
                        source={require("@/assets/images/mastercard-image.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <InputText
                placeholder="1234 5678 9012 3456"
                title="Card Number"
              />
              <View className="flex flex-row gap-5">
                <View className="w-[48%]">
                  <InputText placeholder="MM/YYYY" title="Expiry Date" />
                </View>
                <View className="w-[48%]">
                  <InputText
                    placeholder="1234 5678 9012 3456"
                    title="Expiry Date"
                  />
                </View>
              </View>
              <InputText placeholder="John Smith" title="Cardholder Name" />
              <View className="flex flex-row items-center gap-2">
                <TouchableOpacity onPress={() => setSaveCard(!saveCard)}>
                  <MaterialIcons
                    name={saveCard ? "check-box" : "check-box-outline-blank"}
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>

                <Text className="text-gray-100">
                  Save this card for future transactions
                </Text>
              </View>
            </View>
            <View className="bg-[#1A1A1A] flex flex-col gap-2 p-5">
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200">Transaction Amount</Text>
                <Text className="font-bold text-lg text-white">$250.00</Text>
              </View>
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200">Processing Fee</Text>
                <Text className="font-bold text-lg text-white">$10.00</Text>
              </View>
              <View className="bg-black mt-3 h-3" />
              <View className="flex items-center flex-row justify-between">
                <Text className="text-gray-200 text-xl font-bold">
                  Processing Fee
                </Text>
                <Text className="font-bold text-white text-2xl">$260.00</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => router.push("/WalletFundedSuccessfully")} className="bg-primary/50 p-4 rounded-full">
              <Text className="text-white text-center">
                Continue to Payment Preview
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row justify-center gap-2 items-center">
              <MaterialIcons name="security" size={20} color="#2DC85B" />
              <Text className="text-gray-300">
                Your payment information is secure and encrypted
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CardDetails;
