import { RootState } from "@/redux/store/store";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AccountBalance from "./AccountBalance";
import { updateSelWallet } from "@/redux/slices/WalletSlice";

type Props = {
  setActiveTab: (value: number) => void;
};

const Home = ({ setActiveTab }: Props) => {
  const { walletCreated } = useSelector((state: RootState) => state.dashboard);
  const [accountVerified, setAccountVerified] = useState(false);
  const wallets = [
    { sym: "$", amount: "$8,245.50", cur: "USD", name: "United States Dollar" },
    { sym: "$", amount: "$2,105.82", cur: "CAD", name: "Canadian Dollar" },
    {
      sym: "₦",
      amount: "₦845,320",
      cur: "NGN",
      name: "Nigerian Naira",
    },
    {
      sym: "£",
      amount: "£1,107.00",
      cur: "GBP",
      name: "British Pound",
    },
  ];

  const transactions = [
    {
      name: "Netflix Subscription",
      date: "May 12, 2023",
      amount: "-$14.99",
      type: "debit",
      icon: (
        <MaterialCommunityIcons name="arrow-down" size={24} color="#FF4D4E" />
      ),
    },
    {
      name: "Netflix Subscription",
      date: "May 12, 2023",
      amount: "+$3,250.00",
      type: "credit",
      icon: (
        <MaterialCommunityIcons name="arrow-up" size={24} color="#2DC85B" />
      ),
    },
    {
      name: "Netflix Subscription",
      date: "May 12, 2023",
      amount: "$200.00",
      type: "normal",
      icon: <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />,
    },
  ];

  const dispatch = useDispatch();
  return (
    <View className="flex-1 flex-col p-3 gap-5">
      <View className="mt-5">
        <Text className="font-bold text-3xl text-white">Welcome, Michael</Text>
        <Text className="text-gray-200">
          Your financial overview at a glance
        </Text>
      </View>

      <AccountBalance />

      {walletCreated && !accountVerified && (
        <View className="bg-[#F59E0B]/20 p-5">
          <View className="flex items-start flex-row gap-3">
            <MaterialIcons name="security" size={24} color="#F59E0B" />
            <View>
              <Text className="font-bold text-xl text-white">
                Your account isn't verified
              </Text>
              <Text className="text-gray-400 max-w-80 text-lg">
                Verify your identity to unlock transfers, higher limits, and
                full access.
              </Text>
              <View className="my-5 flex flex-col gap-3">
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-gray-300">Email</Text>
                  <View className="rounded-full bg-primary/20 px-4 py-2">
                    <Text className="text-primary">Verified</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-gray-300">Phone</Text>
                  <View className="rounded-full bg-primary/20 px-4 py-2">
                    <Text className="text-primary">Verified</Text>
                  </View>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <Text className="text-gray-300">ID & Selfie</Text>
                  <View className="rounded-full bg-[#F59E0B]/20 px-4 py-2">
                    <Text className="text-[#F59E0B]">Required</Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <TouchableOpacity
                  onPress={() => setAccountVerified(true)}
                  className="bg-[#F59E0B] self-start px-5 py-3"
                >
                  <Text className="text-[#1A1A1A]">Verify now</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="text-[#F59E0B]">Later</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-gray-200 my-3">It takes 2-3 minutes</Text>
            </View>
          </View>
        </View>
      )}

      <View className="flex flex-col gap-3">
        <View className="flex flex-row justify-between items-center">
          <Text className="font-bold text-white text-2xl">Your Wallets</Text>
          <TouchableOpacity onPress={() => router.push("/(app)/AddWallet")}>
            <Text className="text-primary text-lg">Add Wallet</Text>
          </TouchableOpacity>
        </View>

        {walletCreated ? (
          <View className="flex flex-row gap-4 flex-wrap">
            {wallets.map((wallet, key) => (
              <TouchableOpacity
                onPress={() => {
                  dispatch(updateSelWallet(wallet.cur));
                  router.push("/CurrencyWallet");
                }}
                key={key}
                className="bg-[#1A1A1A] flex flex-col gap-3 w-[48.3%] p-5"
              >
                <View className="flex flex-row items-center justify-between">
                  <View className="bg-primary self-start h-10 w-10 justify-center items-center rounded-full">
                    <Text className="text-white font-semibold">
                      {wallet.sym}
                    </Text>
                  </View>
                  <Text className="text-gray-200">{wallet.cur}</Text>
                </View>

                <Text className="text-white mt-2 font-bold text-3xl">
                  {wallet.amount}
                </Text>
                <Text className="text-primary">{wallet.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View className="bg-[#1A1A1A] flex gap-4 flex-col items-center justify-center p-14">
            <TouchableOpacity
              onPress={() => router.push("/CreateWallet")}
              className="bg-primary mx-auto self-start p-5 rounded-full"
            >
              <FontAwesome5 name="wallet" size={30} color="white" />
            </TouchableOpacity>
            <Text className="text-2xl font-bold text-white">
              Create Your Wallet
            </Text>
          </View>
        )}
      </View>
      {!walletCreated && (
        <View className="flex gap-2 flex-row items-center">
          <View className="bg-[#F59E0B] w-5 h-40" />
          <View className="flex flex-row gap-3">
            <FontAwesome5 name="info-circle" size={24} color="#F59E0B" />
            <View className="flex flex-col gap-4">
              <Text className="font-semibold text-white">
                Complete your profile
              </Text>
              <Text className="text-white max-w-96">
                Verify your identity to unlock all features and higher
                transaction limits.
              </Text>

              <TouchableOpacity>
                <Text className="text-primary font-semibold">Verify Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {walletCreated ? (
        <View className="flex flex-col gap-2">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-bold text-white text-xl">
              Recent Transactions
            </Text>
            <TouchableOpacity>
              <Text className="text-primary">See All</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-col gap-3">
            {transactions.map((x, key) => (
              <View
                key={key}
                className="bg-[#1A1A1A] flex flex-row items-center justify-between p-5"
              >
                <View className="flex flex-row gap-3 items-center">
                  <View
                    className={`h-16 w-16 justify-center items-center ${
                      x.type == "debit" && "bg-[#FF4D4E]/20"
                    } ${x.type == "credit" && "bg-[#047429]/20"} ${
                      x.type == "normal" && "bg-[#313131]/50"
                    } rounded-full `}
                  >
                    {x.icon}
                  </View>
                  <View className="flex flex-col gap-2">
                    <Text className="font-bold text-lg text-white">
                      {x.name}
                    </Text>
                    <Text className="text-gray-300">{x.date}</Text>
                  </View>
                </View>
                <Text
                  className={`${x.type == "debit" && "text-[#FF4D4E]"} ${
                    x.type == "credit" && "text-[#2DC85B]"
                  } ${x.type == "normal" && "text-white"} font-bold text-lg`}
                >
                  {x.amount}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
        <View className="flex flex-col gap-5">
          <Text className="font-bold text-white text-xl">
            Recent Transactions
          </Text>
          <View className="bg-[#1A1A1A] p-5">
            <View className="flex flex-row items-center gap-3">
              <View className="bg-[#313131]/50 px-4">
                <Image
                  className="h-32 w-32"
                  source={require("@/assets/images/transaction-img.png")}
                />
              </View>
              <View className="flex flex-col gap-3">
                <Text className="text-white font-bold text-lg">
                  No transactions yet{" "}
                </Text>
                <Text className="text-gray-200 max-w-64">
                  Your transaction history will appear here{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
      <View className="flex flex-col gap-5">
        <Text className="font-bold text-white text-xl">Exchange Rates</Text>
        <View className="bg-[#1A1A1A] flex flex-row flex-wrap p-5">
          <View className="w-[50%]">
            <Text className="text-gray-200">USD/NGN</Text>
            <Text className="font-bold text-white text-lg">₦1,230.45</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-upward" size={20} color="#2DC85B" />
              <Text className="text-primary">1.2%</Text>
            </View>
          </View>
          <View className="w-[50%]">
            <Text className="text-gray-200">USD/CAD</Text>
            <Text className="font-bold text-white text-lg">$1.35</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-downward" size={24} color="#FF4D4E" />
              <Text className="text-[#FF4D4E]">0.5%</Text>
            </View>
          </View>
          <View className="w-[50%] mt-3">
            <Text className="text-gray-200">USD/GBP</Text>
            <Text className="font-bold text-white text-lg">₦1,230.45</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-upward" size={20} color="#2DC85B" />
              <Text className="text-primary">0.3%</Text>
            </View>
          </View>
          <View className="w-[50%] mt-3">
            <Text className="text-gray-200">GBP/NGN</Text>
            <Text className="font-bold text-white text-lg">₦1,580.25</Text>
            <View className="flex flex-row items-center gap-2">
              <MaterialIcons name="arrow-downward" size={24} color="#FF4D4E" />
              <Text className="text-[#FF4D4E]">0.8%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
