/** @format */

import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Animated,
  FlatList,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import Taller from "../assets/icons/Taller";
import data from "../assets/data";

const { width } = Dimensions.get("window");

function Details(props) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const Slider = ({ item, index, scrollX }) => {
    const translateX = scrollX.interpolate({
      inputRange: [(index - 1) * width, index * width, (index + 1) * width],
      outputRange: [-width / 2, 0, width / 2],
    });
    const scale = scrollX.interpolate({
      inputRange: [(index - 1) * width, index * width, (index + 1) * width],
      outputRange: [0.8, 1.5, 0.8],
    });
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

          <Animated.Image
            style={[
              styles.sliderimage,
              {
                transform: [
                  {
                    translateX,
                  },
                  {
                    scale,
                  },
                ],
              },
            ]}
            source={item.image}
          />
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
        <Animated.FlatList
          data={data}
          keyExtractor={(data) => data.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToInterval={width}
          scrollEventThrottle={16}
          decelerationRate={0}
          contentContainerStyle={{
            alignItems: "center",
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: true,
            }
          )}
          renderItem={({ item, index }) => (
            <Slider item={item} index={index} scrollX={scrollX} />
          )}
        />
        <View style={styles.cupshadow}></View>
      </View>
      <View style={styles.textbottom}>
        <Text style={styles.available}>Available Sizes</Text>
      </View>
      <View style={styles.cupsize}>
        <View style={[styles.textbottom, styles.selectedmenu]}>
          <Taller width={50} height={50} />
          <Text style={styles.available}>Tall</Text>
          <Text style={styles.available}>354ml</Text>
        </View>

        <View style={[styles.textbottom, styles.selectedmenu2]}>
          <Taller width={50} height={50} />
          <Text style={styles.available}>Grande</Text>
          <Text style={styles.available}>475ml</Text>
        </View>

        <View style={[styles.textbottom, styles.selectedmenu2]}>
          <Taller width={50} height={50} />
          <Text style={styles.available}>Venti</Text>
          <Text style={styles.available}>588ml</Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.actionbuttonwrapper}>
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

          <TouchableOpacity style={styles.addtocart}>
            <Text>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addtocart: {
    backgroundColor: "#1d724d",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "#d2d2d1",
    borderWidth: 1,
    borderRadius: 10,
  },
  qtywrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  actionbuttonwrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
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
  selectedmenu2: {
    backgroundColor: "#f8f8f7",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 40,
    borderColor: "#e2e2e3",
    borderWidth: 1,
  },
  selectedmenu: {
    backgroundColor: "#1d724d",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 40,
    borderColor: "#e2e2e2",
    borderWidth: 1,
  },
  available: {
    fontWeight: "bold",
    textAlign: "center",
  },
  cupsize: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  textbottom: {
    alignItems: "center",
    textAlign: "center",
  },
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
    width: width / 2,
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
  cupshadow: {
    marginTop: -50,
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: "grey",
    alignSelf: "center",
    transform: [{ rotateX: "75deg" }],
  },
});

export default Details;
