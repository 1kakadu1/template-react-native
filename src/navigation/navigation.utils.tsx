import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";
import { RootParamList } from "./navigation.model";

export const navigationRef = createRef<NavigationContainerRef<RootParamList>>()