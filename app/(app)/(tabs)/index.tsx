import AccountVerification from "@/components/home/AccountVerification";
import EmailVerification from "@/components/home/EmailVerification";
import PersonalDetailsUpdate from "@/components/home/PersonalDetailsUpdate";
import PhoneVerification from "@/components/home/PhoneVerification";
import RegionSelection from "@/components/home/RegionSelection";
import LogoHeader from "@/components/LogoHeader";
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(4);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        className="flex-1 p-5"
      >
        <LogoHeader />
        {activeTab == 0 && <AccountVerification setActiveTab={setActiveTab} />}
        {activeTab == 1 && (
          <PersonalDetailsUpdate setActiveTab={setActiveTab} />
        )}
        {activeTab == 2 && <PhoneVerification setActiveTab={setActiveTab} />}
        {activeTab == 3 && <EmailVerification setActiveTab={setActiveTab} />}
        {activeTab == 4 && <RegionSelection setActiveTab={setActiveTab} />}
      </ScrollView>
    </SafeAreaView>
  );
}
