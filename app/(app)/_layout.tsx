import "@/global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const queryClient = new QueryClient();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="CreateWallet" options={{ headerShown: false }} />
          <Stack.Screen
            name="AddWallet"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="ConvertScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="WalletCreatedSuccessfully"
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="CurrencyWallet"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FundCurrencyWallet"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QueryClientProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
