import React, { useEffect, useMemo, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ActivityIndicator,
  FlatList,
  Keyboard,
  Platform,
} from "react-native";
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome6,
} from "@expo/vector-icons";
import axios from "axios";
import { Country } from "@/types";

type CountrySelectionType = {
  showCountries: boolean;
  setShowCountries: (value: boolean) => void;
  searchCountry: string;
  setSearchCountry: (value: string) => void;
  countries: Country[];
  setSelCountry: (value: string) => void;
  setCountryFlag: (value: string) => void;
  setCode: (value: string) => void;
};

const CountryPickerModal = ({
  showCountries,
  setShowCountries,
  searchCountry,
  setSearchCountry,
  countries,
  setSelCountry,
  setCountryFlag,
  setCode,
}: CountrySelectionType) => {
  // Memoize filtered countries to optimize rendering
  const filteredCountries = useMemo(() => {
    const searchQuery = searchCountry.toLowerCase();

    // Step 1: Filter countries based on search query
    let filtered = countries.filter((country: Country) =>
      country.name.common.toLowerCase().includes(searchQuery)
    );

    // Step 2: Separate priority countries (Nigeria & Canada)
    const priorityCountries = filtered.filter(
      (country) =>
        country.name.common === "Nigeria" ||
        country.name.common === "United Kingdom"
    );

    // Step 3: Sort remaining countries alphabetically
    const nonPriorityCountries = filtered
      .filter(
        (country) =>
          country.name.common !== "Nigeria" &&
          country.name.common !== "United Kingdom"
      )
      .sort((a, b) => a.name.common.localeCompare(b.name.common));

    // Step 4: Combine priority countries first, followed by sorted countries
    return [...priorityCountries, ...nonPriorityCountries];
  }, [countries, searchCountry]);

  return (
    <Modal
      visible={showCountries}
      transparent
      animationType="slide"
      onRequestClose={() => setShowCountries(false)}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-end bg-primary/50">
          <View
            className={`bg-white rounded-t-3xl p-5 ${
              Platform.OS === "ios" ? "pb-10" : "pb-5"
            }`}
          >
            {/* Close Button */}
            <View className="flex justify-end flex-row">
              <TouchableOpacity
                onPress={() => setShowCountries(false)}
                className="flex flex-row gap-1 items-center"
              >
                <Text className="text-[#8B97A8]">Close</Text>
                <MaterialIcons name="cancel" size={24} color="#000" />
              </TouchableOpacity>
            </View>

            {/* Search Input */}
            <View className="bg-[#F1F3F5] my-5 rounded-lg p-4 flex flex-row justify-between items-center">
              <View className="flex gap-2 items-center flex-row">
                <Feather name="search" size={24} color="#8B97A8" />
                <TextInput
                  value={searchCountry}
                  onChangeText={setSearchCountry}
                  placeholder="Search Country"
                  style={{ fontSize: 18 }}
                  className="font-NeuePlakRegular w-[85%]  text-[#8B97A8]"
                />
              </View>
              {searchCountry.length > 0 && (
                <TouchableOpacity onPress={() => setSearchCountry("")}>
                  <MaterialIcons name="cancel" size={24} color="#000" />
                </TouchableOpacity>
              )}
            </View>

            {/* Country List */}
            <View className="h-[40rem]">
              {countries.length === 0 ? (
                <ActivityIndicator color="#1A20EA" />
              ) : (
                <FlatList
                  data={filteredCountries}
                  keyExtractor={(item) => item.name.common}
                  renderItem={({ item: country }) => (
                    <TouchableOpacity
                      onPress={() => {
                        const selectedCountry = country.name.common;
                        setSearchCountry(selectedCountry);
                        setSelCountry(selectedCountry);
                        setCountryFlag(country.flags.png);
                        setCode(
                          `${country?.idd.root + country?.idd.suffixes[0]}`
                        );
                        // setSearchCountry("");
                        // setShowCountries(false);
                      }}
                      className="border-b-[1px] justify-between flex flex-row py-5 border-[#75869A]/30"
                    >
                      <View className="flex flex-row items-center gap-2">
                        <Text
                          className={`font-NeuePlakRegular ${
                            searchCountry === country.name.common &&
                            "text-primary"
                          }`}
                        >
                          {country.name.common}
                        </Text>
                        {country?.idd.root && (
                          <Text
                            className={`${
                              searchCountry === country.name.common &&
                              "text-primary"
                            }`}
                          >
                            ({country?.idd.root}
                            {country?.idd.suffixes[0]})
                          </Text>
                        )}
                      </View>

                      {searchCountry === country.name.common && (
                        <FontAwesome6 name="check" size={24} color="#000" />
                      )}
                    </TouchableOpacity>
                  )}
                />
              )}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CountryPickerModal;
