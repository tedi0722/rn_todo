import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

class ItemCard extends Component {
  render() {
    return (
      <Card
        title={
          <View style={styles.cardHeader}>
            <Icon size={20} name="close" onPress={this.props.remove} />
          </View>
        }
      >
        <View style={styles.cardBody}>
          <Text>{this.props.text}</Text>
          <Icon
            size={20}
            name={this.props.iconName}
            onPress={this.props.complete}
            style={styles.completeIcon}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardBody: {
    width: width * 0.8
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 10
  },
  cardHeaderText: {
    fontWeight: "bold"
  },
  completeIcon: {
    alignSelf: "flex-end"
  }
});

export default ItemCard;
