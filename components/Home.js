/** @format */

import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Octicons from "react-native-vector-icons/Octicons";
import data from "../assets/data";

const { height, width } = Dimensions.get("window");

function Home({ navigation }) {
  const Popular = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details")}
        style={[styles.item, { marginLeft: item.id === "1" ? 20 : 0 }]}
      >
        <Image source={item.image} style={styles.image} />
        <Text style={styles.itemname}>{item.name}</Text>
        <View style={styles.action}>
          <View style={styles.rating}>
            <Octicons name="star" size={15} style={styles.star} />
            <Octicons name="star" size={15} style={styles.star} />
            <Octicons name="star" size={15} style={styles.star} />
            <Octicons name="star" size={15} style={styles.star} />
            <Octicons name="star" size={15} style={styles.star} />
          </View>
          <View style={styles.button}>
            <Feather name="chevron-right" size={15} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Featured = ({ item }) => {
    return (
      <View
        style={[styles.featured, { marginLeft: item.id === "4" ? 20 : 10 }]}
      >
        <Image source={item.image} style={styles.featuredimage} />
        <Text style={styles.featureditemname}>{item.name}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Good Morning</Text>
        <Feather name="grid" size={24} />
      </View>
      <View style={styles.subheader}>
        <View>
          <Text style={styles.subtitle}>Uneku </Text>
        </View>
        <Feather styles={styles.coffee} name="coffee" size={24} />
      </View>
      <View style={styles.searchbox}>
        <Feather name="search" size={20} />
        <TextInput placeholder="Search" placeholderTextColor="black" />
      </View>
      <Text style={[styles.subtitle, styles.subheader]}>Popular</Text>
      <View>
        <FlatList
          data={data}
          keyExtractor={(data) => data.id}
          horizontal
          showsHorizontalScrollIndicator={true}
          renderItem={Popular}
        />
      </View>
      <View style={styles.featureheader}>
        <Text style={styles.subtitle}>Featured Items</Text>
        <Text style={styles.subtitle2}>See all</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        horizontal
        showsHorizontalScrollIndicator={true}
        renderItem={Featured}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  subheader: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#247652",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    color: "#565656",
    fontWeight: "bold",
  },
  subtitle2: {
    fontSize: 15,
    color: "#565656",
    fontWeight: "bold",
  },
  searchbox: {
    marginHorizontal: 20,
    marginVertical: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f3f3",
    borderRadius: 40,
    height: 50,
    paddingHorizontal: 10,
  },
  item: {
    marginTop: 50,
    paddingLeft: 10,
    paddingRight: 20,
    marginRight: 60,
    backgroundColor: "#f8f8f7",
    height: height / 4,
    width: height / 5.5,
    borderRadius: 20,
    paddingBottom: 20,
    justifyContent: "flex-end",
    shadowColor: "blue",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.08,
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    position: "absolute",
    top: -60,
    right: -70,
    shadowColor: "blue",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 0.08,
  },
  itemname: {
    color: "#606060",
    fontWeight: "700",
    fontSize: 18,
  },
  rating: {
    flexDirection: "row",
  },
  star: {
    color: "gold",
    marginRight: 2,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  featureheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  featured: {
    backgroundColor: "#f8f8f7",
    marginLeft: 20,
    width: width / 3 - 25,
    height: width / 3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 20,
    shadowColor: "blue",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  featuredimage: {
    width: 60,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    top: -25,
  },
  featureditemname: {
    color: "#606060",
    fontWeight: "700",
    fontSize: 12,
    textAlign: "center",
  },
});

export default Home;
