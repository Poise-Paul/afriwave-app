import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  setActiveTab: (value: number) => void;
};

const DocumentSelection = ({ setActiveTab }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const documents = [
    {
      name: "Passport",
      icon: (
        <FontAwesome5
          name="passport"
          size={20}
          color={selectedId == "Passport" ? "#FFF" : "#2DC85B"}
        />
      ),
    },
    {
      name: "ID Card",
      icon: (
        <FontAwesome
          name="id-card"
          size={24}
          color={selectedId == "ID Card" ? "#FFF" : "#2DC85B"}
        />
      ),
    },
    {
      name: "Drivers License",
      icon: (
        <FontAwesome
          name="drivers-license"
          size={24}
          color={selectedId == "Drivers License" ? "#FFF" : "#2DC85B"}
        />
      ),
    },
    {
      name: "Residence Permit",
      icon: (
        <FontAwesome
          name="file"
          size={24}
          color={selectedId == "Residence Permit" ? "#FFF" : "#2DC85B"}
        />
      ),
    },
  ];
  return (
    <View className="flex-1 flex-col gap-8 mt-5">
      <View className="flex flex-col gap-4">
        <Text className="text-3xl font-bold text-white">
          Select Document Details
        </Text>
        <Text className="text-gray-400">
          Please select the country of issuance and document type to continue
          with your verification
        </Text>
      </View>
      <View className="flex my-4 flex-col gap-3">
        <Text className="font-bold text-white text-lg">
          Country of Document Issuance
        </Text>
        <View className="p-4 bg-[#1a1a1a] border-[1px] border-[#525252]">
          <Text className="font-bold text-white text-center">Ghana</Text>
        </View>
      </View>
      <View className="flex flex-col gap-5">
        <Text className="font-bold text-white text-lg">Document Type</Text>
        <View className="flex flex-row gap-5 flex-wrap">
          {documents.map((x, key) => (
            <TouchableOpacity
              onPress={() => setSelectedId(x.name)}
              key={key}
              className={`${
                selectedId == x.name ? "bg-[#D0FEE3]" : "bg-[#1A1A1A]"
              } flex flex-col gap-4 p-5 items-center w-[47%]`}
            >
              <View
                className={` ${
                  selectedId == x.name ? "bg-primary" : "bg-[#313131]/50"
                } p-5 rounded-full mx-auto max-w-fit`}
              >
                {x.icon}
              </View>
              <Text
                className={`font-bold ${
                  selectedId == x.name ? "" : "text-white "
                } text-lg`}
              >
                {x.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        onPress={() => setActiveTab(7)}
        className="bg-primary p-4"
      >
        <Text className="text-center">Continue to Document Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentSelection;
