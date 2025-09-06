import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="EmailVerification"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationSuccessful"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" options={{ headerShown: false }} />
        <Stack.Screen name="AfriwaveUse" options={{ headerShown: false }} />
        <Stack.Screen
          name="AccountCreatedScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountVerification"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen
          name="PhoneVerification"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
