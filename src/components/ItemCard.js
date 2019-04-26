import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Card } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";
const { width, height } = Dimensions.get("window");

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  toggleOverlay() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <Card
        title={
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>{this.props.title}</Text>
            <Icon size={20} name="close" onPress={this.props.remove} />
          </View>
        }
      >
        <View style={styles.cardBody}>
          <Text>{this.props.text}</Text>
          {this.props.photoUri && (
            <View style={{ marginTop: 20, marginBottom: 10 }}>
              <TouchableOpacity
                style={{ width: 100 }}
                onPress={() => this.toggleOverlay()}
              >
                <Image
                  resizeMode="cover"
                  source={{ uri: this.props.photoUri }}
                  style={{ width: 100, height: 100 }}
                />
              </TouchableOpacity>
            </View>
          )}
          <Icon
            color="#2196f3"
            size={20}
            name={this.props.iconName}
            onPress={this.props.complete}
            style={styles.completeIcon}
          />
        </View>
        <Modal
          onBackdropPress={() => this.toggleOverlay()}
          isVisible={this.state.isVisible}
        >
          <View style={{ width: width, alignSelf: "center" }}>
            <ScrollView minimumZoomScale={0} maximumZoomScale={2}>
              <Image
                resizeMode="contain"
                source={{ uri: this.props.photoUri }}
                style={{ width: width, height: width }}
              />
            </ScrollView>
          </View>
        </Modal>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardBody: {
    width: width * 0.8,
    padding: 10
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#888888"
  },
  cardHeaderText: {
    fontWeight: "bold"
  },
  completeIcon: {
    alignSelf: "flex-end"
  }
});

export default ItemCard;
