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
          <Stack.Screen name="CardDetails" options={{ headerShown: false }} />
          <Stack.Screen
            name="WalletFundedSuccessfully"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WalletFundingFailed"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FundWithInterac"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FundingPendingScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FundViaBankTransfer"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentCancelled"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ReviewScreen" options={{ headerShown: false }} />
          <Stack.Screen
            name="PaymentSuccessful"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProcessingPayment"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SendMoneyPage" options={{ headerShown: false }} />
          <Stack.Screen
            name="SendMoneyPageSecond"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NGNBankDetails"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TransferPreview"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AfriwaveTransferPreview"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectAfriWaveReciepient"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TransferPreviewReciept"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EnterPinScreen"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SuccessfulWithReciept"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProcessingWithReciept"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SendAfriwaveUser"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectPaymentMethod"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </QueryClientProvider>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
