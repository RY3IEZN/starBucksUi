/** @format */

import React from "react";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
  Image,
} from "react-native";
import data from "../assets/data";
import Swipeable from "react-native-gesture-handler/Swipeable";

const { width } = Dimensions.get("window");

function Cart({ navigation }) {
  const RenderRight = ({ dragX, progress }) => {
    console.log(progress, "fwws");
    return (
      <TouchableOpacity>
        <Animated.View style={styles.renderRightaction}>
          <Feather name="trash-2" size={30} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const item = ({ item }) => {
    return (
      <Swipeable
        renderRightActions={({ dragX, progress }) => (
          <RenderRight progress={progress} />
        )}
      >
        <TouchableOpacity>
          <View style={styles.itemwrapper}>
            <View style={styles.item}>
              <View>
                <Image source={item.image} style={styles.image} />
              </View>
              <View style={{ alignitems: "flex-start", width: width / 2 }}>
                <Text style={styles.itemtxt}>{item.name}</Text>

                <View style={styles.qtywrapper}>
                  <View style={styles.qtybtn}>
                    <Feather name="minus" size={18} />
                  </View>
                  <Text style={styles.qtytxt}>1</Text>
                  <View style={styles.qtybtn}>
                    <Feather name="plus" size={18} />
                  </View>
                  <View></View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  return (
    <>
      <View style={styles.topwrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.backButton}
        >
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Cart Items</Text>
        </View>
        <View style={{ width: 30 }}></View>
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(data) => data.id}
          showsVerticalScrollIndicator={false}
          renderItem={item}
        />
      </View>
      <View>
        <View>
          <Text>Total Price</Text>
          <Text>$19.5</Text>
          <TouchableOpacity>
            <Text>Order Now</Text>
          </TouchableOpacity>
        </View>
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
  itemwrapper: {
    marginTop: 20,
    backgroundColor: "#f8f8f7",
    borderRadius: 20,
    marginHorizontal: 20,
  },
  image: {
    height: 120,
    width: 80,
    resizeMode: "contain",
  },
  itemtxt: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtywrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    width: 30,
    height: 30,
  },
  qtybtn: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#d2d2d1",
    backgroundColor: "#f8f8f7",
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  qtytxt: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "black",
  },
  renderRightaction: {
    backgroundColor: "#509473",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
    width: 60,
  },
});

export default Cart;
