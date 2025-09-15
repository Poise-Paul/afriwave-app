import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import LogoHeader02 from "@/components/LogoHeader02";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="bg-black flex-1">
      <LogoHeader02 />
      <View className="flex-1 flex-col gap-10 mt-5 p-5  items-center">
        <Image
          className="h-40 w-40 rounded-full"
          source={require("@/assets/images/shola.jpeg")}
        />
        <View className="bg-[#1A1A1A] w-full flex flex-col p-4 gap-3">
          <View className="flex items-center justify-between gap-5 flex-row">
            <Text className="text-center text-lg text-gray-400">Name:</Text>
            <Text className="font-bold text-xl text-white">Shola Ashiru</Text>
          </View>
          <View className="flex items-center justify-between flex-row">
            <Text className="text-center text-lg text-gray-400">Email:</Text>
            <Text className="font-bold text-xl text-white">
              sholaashiru@gmail.com
            </Text>
          </View>
          <View className="flex items-center justify-between flex-row">
            <Text className="text-center text-lg text-gray-400">
              Phone Number:
            </Text>
            <Text className="font-bold text-white text-xl">
              +234 704 049 5968
            </Text>
          </View>
          <View className="flex items-center justify-between flex-row">
            <Text className="text-center text-lg text-gray-400">Name:</Text>
            <Text className="font-bold text-white text-xl">Shola Ashiru</Text>
          </View>
        </View>
        <TouchableOpacity className="border-[1px] border-primary w-full p-4">
          <Text className="text-primary text-lg text-center">Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
