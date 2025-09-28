import LogoHeader02 from "@/components/LogoHeader02";
import { updateSelWallet } from "@/redux/slices/WalletSlice";
import { RootState } from "@/redux/store/store";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const CurrencyWallet = (props: Props) => {
  const { selWallet } = useSelector((state: RootState) => state.wallet);
  const infos = [
    {
      name: "Total Deposits",
      amount: "32,450.00",
      icon: <MaterialIcons name="arrow-downward" size={24} color="#2DC85B" />,
    },
    {
      name: "Total Withdrawals",
      amount: `7,863.50`,
      icon: <MaterialIcons name="arrow-upward" size={24} color="#FF4D4E" />,
    },
    {
      name: "Pending",
      amount: `1,250.00`,
      icon: (
        <MaterialCommunityIcons
          name="clock-time-four"
          size={24}
          color="#E9B305"
        />
      ),
    },
    {
      name: "Wave Points",
      amount: "100",
      icon: <FontAwesome5 name="coins" size={24} color="#2DC85B" />,
    },
  ];

  const transactions = [
    {
      name: "Deposit from Bank",
      date: "May 15, 2023",
      amount: `+${selWallet == "USD" ? "$" : ""}${
        selWallet == "CAD" ? "C$" : ""
      }${selWallet == "NGN" ? "₦" : ""}${
        selWallet == "GBP" ? "£" : ""
      }5,000.00`,
      type: "credit",
      icon: (
        <MaterialCommunityIcons name="arrow-down" size={24} color="#2DC85B" />
      ),
    },
    {
      name: "Transfer to James",
      date: "May 12, 2023",
      amount: `-${selWallet == "USD" ? "$" : ""}${
        selWallet == "CAD" ? "C$" : ""
      }${selWallet == "NGN" ? "₦" : ""}${selWallet == "GBP" ? "£" : ""}750.00`,
      type: "debit",
      icon: (
        <MaterialCommunityIcons name="arrow-up" size={24} color="#FF4D4E" />
      ),
    },
    {
      name: "Converted to NGN",
      date: "May 10, 2023",
      amount: `-${selWallet == "USD" ? "$" : ""}${
        selWallet == "CAD" ? "C$" : ""
      }${selWallet == "NGN" ? "₦" : ""}${
        selWallet == "GBP" ? "£" : ""
      }1,200.00`,
      type: "debit",
      icon: (
        <MaterialCommunityIcons name="arrow-left" size={24} color="#3b82f6" />
      ),
    },
    {
      name: "Payment from Sarah",
      date: "May 8, 2023",
      amount: `+${selWallet == "USD" ? "$" : ""}${
        selWallet == "CAD" ? "C$" : ""
      }${selWallet == "NGN" ? "₦" : ""}${selWallet == "GBP" ? "£" : ""}325.50`,
      type: "credit",
      icon: (
        <MaterialCommunityIcons name="arrow-down" size={24} color="#2DC85B" />
      ),
    },
  ];

  const allWallets = [
    { code: "USD", label: "USD Wallet" },
    { code: "GBP", label: "GBP Wallet" },
    { code: "NGN", label: "Naira Wallet" },
    { code: "CAD", label: "CAD Wallet" },
  ];

  const filteredWallets = allWallets.filter(
    (wallet) => wallet.code !== selWallet
  );

  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <LogoHeader02 />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <View className="flex-1 flex-col p-3 gap-4 mt-4">
          <Text className="font-bold text-3xl text-white">
            {selWallet} Wallet
          </Text>
          <View className="bg-[#1A1A1A] flex flex-col gap-4 p-5">
            <View className="flex justify-between items-center flex-row w-full">
              <Text className="text-gray-300 text-xl">Available Balance</Text>
              <Text className="text-white">Active</Text>
            </View>
            <View className="flex flex-row items-center gap-2">
              <View className="bg-[#047429] h-12 w-12 flex justify-center items-center rounded-full">
                <Text className="text-3xl text-white font-bold">
                  {selWallet == "USD" && "$"}
                  {selWallet == "CAD" && "C$"}
                  {selWallet == "NGN" && "₦"}
                  {selWallet == "GBP" && "£"}
                </Text>
              </View>
              <Text className="text-3xl font-bold text-white">
                {selWallet == "USD" && "8,245.50"}
                {selWallet == "CAD" && "2,105.82"}
                {selWallet == "NGN" && "845,320"}
                {selWallet == "GBP" && "1,107.00"}
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <View>
                <Text className="text-gray-300">Account Number</Text>
                <Text className="text-white text-lg">*******5873</Text>
              </View>
              <View>
                <Text className="text-gray-300">Currency</Text>
                <Text className="text-white text-lg">{selWallet}</Text>
              </View>
            </View>
            <View className="flex flex-row gap-3">
              <TouchableOpacity
                onPress={() => router.push("/FundCurrencyWallet")}
                className="bg-primary p-4"
              >
                <Text className="text-white">Fund Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/SendMoneyPage")}
                className="bg-primary p-4"
              >
                <Text className="text-white">Send</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-primary p-4">
                <Text className="text-white">Statement</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex flex-wrap justify-between flex-row">
            {infos.map((x, key) => (
              <View
                key={key}
                className="w-[48%] mb-4 flex flex-col gap-3 bg-[#1A1A1A] p-3"
              >
                <View className="flex gap-2 items-center flex-row">
                  {x.icon}
                  <Text className="text-gray-400 text-lg">{x.name}</Text>
                </View>
                <Text className="font-bold text-white text-3xl">
                  {selWallet == "USD" && "$"}
                  {selWallet == "CAD" && "C$"}
                  {selWallet == "NGN" && "₦"}
                  {selWallet == "GBP" && "£"}
                  {x.amount}
                </Text>
              </View>
            ))}
          </View>

          <View className="bg-[#1A1A1A] p-5">
            <View className="flex flex-row justify-between items-center">
              <Text className="font-bold text-xl text-white">Activity</Text>
              <Text className="text-white text-lg">Last 30 days</Text>
            </View>
            <Image
              className="w-full h-40"
              source={require("@/assets/images/transaction-chart.png")}
            />
          </View>

          <View className="flex flex-col my-4 gap-4">
            <View className="flex flex-row items-center justify-between w-full">
              <Text className="text-white text-xl font-bold">
                Recent Transactions
              </Text>
              <Text className="text-white">See All</Text>
            </View>
            {transactions.map((x, key) => (
              <View key={key} className="bg-[#1F2937] p-4">
                <View className="flex justify-between flex-row gap-3">
                  <View className="flex flex-row gap-3">
                    <View className="bg-[#0D1C3B] flex justify-center items-center h-14 w-14 rounded-full">
                      {x.icon}
                    </View>
                    <View>
                      <Text className="font-bold text-white text-lg">
                        {x.name}
                      </Text>
                      <Text className="text-gray-300 text-sm">May 15, 2023</Text>
                    </View>
                  </View>

                  <Text
                    className={`font-bold text-xl ${
                      x.type == "credit" ? "text-primary" : "text-[#FF4D4E]"
                    }`}
                  >
                    {x.amount}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View className="flex flex-row mt-10 items-center gap-4">
            {filteredWallets.map((wallet) => (
              <TouchableOpacity
                onPress={() => dispatch(updateSelWallet(wallet.code))}
                key={wallet.code}
                className="bg-primary/50 px-5 py-3 rounded-full"
              >
                <Text className="text-white">{wallet.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurrencyWallet;
