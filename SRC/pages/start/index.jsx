import React from "react";
import {View, ScrollView, Text, Image} from "react-native";
export default function Start(){

    return (
        <View>
            <ScrollView ShowsVerticalScrollIndicator={false}>
                <View>
                    <Image 
                        source={require("../../assets/icons/logo3.png")}
                    />
                    <Text>
                        Vamos transformar sua vida {"\n"} AGORA! Buscando sempre o {" "} melhor nível
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}