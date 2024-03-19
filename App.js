import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppFormPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return (
    <Screen>
      <MessagesScreen />
    </Screen>
  );
}
