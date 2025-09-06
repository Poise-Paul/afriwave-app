import AccountVerification from "@/components/home/AccountVerification";
import PersonalDetailsUpdate from "@/components/home/PersonalDetailsUpdate";
import LogoHeader from "@/components/LogoHeader";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        className="flex-1 p-5"
      >
        <LogoHeader />
        {activeTab == 0 && <AccountVerification setActiveTab={setActiveTab} />}
        {activeTab == 1 && <PersonalDetailsUpdate />}
      </ScrollView>
    </SafeAreaView>
  );
}
