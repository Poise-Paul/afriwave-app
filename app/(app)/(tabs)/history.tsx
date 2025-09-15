import LogoHeader02 from "@/components/LogoHeader02";
import { SafeAreaView, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="bg-black flex-1">
      <LogoHeader02 />
      <View className="flex-1 justify-center items-center">
        <Text className="text-center text-lg text-white">
          No Transaction History!
        </Text>
      </View>
    </SafeAreaView>
  );
}
