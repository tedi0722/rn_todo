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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Accordion from "react-native-collapsible/Accordion";
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "../store/actions/todoAction";

const { width } = Dimensions.get("window");

class AccordionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      activeSections: []
    };
  }

  toggleOverlay() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Accordion
            expandMultiple={false}
            easing="easeOut"
            duration={200}
            touchableComponent={TouchableOpacity}
            sections={this.props.sections}
            renderHeader={section => {
              return (
                <View style={styles.sectionHeader}>
                  <Icon
                    color="#20B2AA"
                    size={20}
                    name={
                      section.completed
                        ? "checkbox-marked-circle"
                        : "checkbox-blank-circle-outline"
                    }
                    onPress={() => this.props.completeTodo(section.id)}
                  />
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                  <View>
                    <Icon
                      size={20}
                      color="#ffffff"
                      name="close"
                      onPress={() => this.props.removeTodo(section.id)}
                    />
                  </View>
                </View>
              );
            }}
            activeSections={this.state.activeSections}
            renderContent={section => {
              return (
                <View style={styles.sectionContent}>
                  <View style={{ padding: 10 }}>
                    <Text style={styles.sectionContentText}>
                      {section.text}
                    </Text>
                  </View>
                  {section.photoUri && (
                    <View>
                      <TouchableOpacity onPress={() => this.toggleOverlay()}>
                        <Image
                          resizeMode="cover"
                          source={{ uri: section.photoUri }}
                          style={{
                            width: 100,
                            height: 100
                            // borderRadius: 50,
                          }}
                        />
                      </TouchableOpacity>
                      {/* <Modal
                      onBackdropPress={() => this.toggleOverlay()}
                      isVisible={this.state.isVisible}
                    >
                      <View style={{ width: width, alignSelf: "center" }}>
                        <ScrollView minimumZoomScale={0} maximumZoomScale={2}>
                          <Image
                            resizeMode="contain"
                            source={{ uri: section.photoUri }}
                            style={{ width: width, height: width }}
                          />
                        </ScrollView>
                      </View>
                    </Modal> */}
                    </View>
                  )}
                </View>
              );
            }}
            onChange={activeSections => {
              this.setState({ activeSections });
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id)),
    completeTodo: id => dispatch(completeTodo(id))
  };
};

const styles = StyleSheet.create({
  sectionHeader: {
    padding: 10,
    width: width * 0.9,
    backgroundColor: "#505050",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 3,
    borderColor: "#333333"
  },
  sectionHeaderText: {
    fontWeight: "bold",
    color: "#dddddd"
  },
  sectionContent: {
    width: width * 0.9,
    backgroundColor: "#505050",
    opacity: 0.7,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sectionContentText: {
    color: "#dddddd"
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AccordionView);
