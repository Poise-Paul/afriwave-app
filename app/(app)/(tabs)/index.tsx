import AccountVerification from "@/components/home/AccountVerification";
import DocumentCaptureOne from "@/components/home/DocumentCaptureOne";
import DocumentCaptureTwo from "@/components/home/DocumentCaptureTwo";
import DocumentSelection from "@/components/home/DocumentSelection";
import EmailVerification from "@/components/home/EmailVerification";
import IDVerification from "@/components/home/IDVerification";
import LivenessVerification from "@/components/home/LivenessVerification";
import PersonalDetailsUpdate from "@/components/home/PersonalDetailsUpdate";
import PhoneVerification from "@/components/home/PhoneVerification";
import RegionSelection from "@/components/home/RegionSelection";
import ReviewInformation from "@/components/home/ReviewInformation";
import VerificationFailed from "@/components/home/VerificationFailed";
import VerifiedScreen from "@/components/home/VerifiedScreen";
import LogoHeader from "@/components/LogoHeader";
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        className="flex-1"
      >
        <LogoHeader />
        {activeTab == 0 && <AccountVerification setActiveTab={setActiveTab} />}
        {activeTab == 1 && (
          <PersonalDetailsUpdate setActiveTab={setActiveTab} />
        )}
        {activeTab == 2 && <PhoneVerification setActiveTab={setActiveTab} />}
        {activeTab == 3 && <EmailVerification setActiveTab={setActiveTab} />}
        {activeTab == 4 && <IDVerification setActiveTab={setActiveTab} />}
        {activeTab == 5 && <RegionSelection setActiveTab={setActiveTab} />}
        {activeTab == 6 && <DocumentSelection setActiveTab={setActiveTab} />}
        {activeTab == 7 && <DocumentCaptureOne setActiveTab={setActiveTab} />}
        {activeTab == 8 && <DocumentCaptureTwo setActiveTab={setActiveTab} />}
        {activeTab == 9 && <LivenessVerification setActiveTab={setActiveTab} />}
        {activeTab == 10 && <ReviewInformation setActiveTab={setActiveTab} />}
        {activeTab == 11 && <VerifiedScreen setActiveTab={setActiveTab} />}
        {activeTab == 12 && <VerificationFailed setActiveTab={setActiveTab} />}
      </ScrollView>
    </SafeAreaView>
  );
}
