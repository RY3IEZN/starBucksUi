/** @format */

import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";

import data from "../assets/data";

const { width } = Dimensions.get("window");

function Details(props) {
  const Slider = ({ item }) => {
    return (
      <View style={{ width }}>
        <View style={styles.slider}>
          <View>
            <Text style={styles.slidertext}>{item.name}</Text>
          </View>

          <View>
            <View style={styles.rating}>
              <Octicons name="star" size={15} style={styles.star} />
              <Octicons name="star" size={15} style={styles.star} />
              <Octicons name="star" size={15} style={styles.star} />
              <Octicons name="star" size={15} style={styles.star} />
              <Octicons name="star" size={15} style={styles.star} />
            </View>
          </View>

          <Image style={styles.sliderimage} source={item.image} />
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.topwrapper}>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>
        <View style={styles.cart}>
          <Ionicons style={styles.cart} name="cart-outline" size={24} />
          <View style={styles.badge}>
            <Text style={styles.badgetext}>3</Text>
          </View>
        </View>
      </View>

      <View>
        <FlatList
          data={data}
          keyExtractor={(data) => data.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={Slider}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topwrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  backButton: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f7",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowRadius: 2,
    shadowOpacity: 0.08,
  },
  cart: {
    flexDirection: "row",
    color: "#036637",
  },
  badgetext: {
    color: "white",
    fontSize: 10,
  },
  badge: {
    width: 18,
    height: 18,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#036637",
    marginTop: -8,
    marginLeft: -10,
  },
  slider: {
    alignItems: "center",
  },
  slidertext: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "#556",
    textAlign: "center",
  },
  rating: {
    flexDirection: "row",
  },
  star: {
    color: "gold",
    marginRight: 2,
  },
  sliderimage: {
    width: "100%",
    height: width / 1.5,
    resizeMode: "contain",
    marginVertical: 50,
  },
});

export default Details;
