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
import Swipeout from "react-native-swipeout";

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
            // expandMultiple={true}
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
                    style={styles.completeIcon}
                  />
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                  <View>
                    <Icon
                      size={20}
                      color="#dddddd"
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

      // <Card
      //   title={
      //     <View style={styles.cardHeader}>
      //       <Text style={styles.cardHeaderText}>{this.props.title}</Text>
      //       <Icon size={20} name="close" onPress={this.props.remove} />
      //     </View>
      //   }
      // >
      //   <View style={styles.cardBody}>
      //     {this.props.photoUri && (
      //       <View style={{ marginTop: 10, marginBottom: 20 }}>
      //         <TouchableOpacity
      //           style={{
      //             width: width * 0.8,
      //             alignSelf: "center",
      //             alignItems: "center"
      //           }}
      //           onPress={() => this.toggleOverlay()}
      //         >
      //           <Image
      //             resizeMode="cover"
      //             source={{ uri: this.props.photoUri }}
      //             style={{ width: width * 0.8, height: 100 }}
      //           />
      //         </TouchableOpacity>
      //       </View>
      //     )}
      //     <Text>{this.props.text}</Text>
      //     <Icon
      //       color="#2196f3"
      //       size={20}
      //       name={this.props.iconName}
      //       onPress={this.props.complete}
      //       style={styles.completeIcon}
      //     />
      //   </View>
      //   <Modal
      //     onBackdropPress={() => this.toggleOverlay()}
      //     isVisible={this.state.isVisible}
      //   >
      //     <View style={{ width: width, alignSelf: "center" }}>
      //       <ScrollView minimumZoomScale={0} maximumZoomScale={2}>
      //         <Image
      //           resizeMode="contain"
      //           source={{ uri: this.props.photoUri }}
      //           style={{ width: width, height: width }}
      //         />
      //       </ScrollView>
      //     </View>
      //   </Modal>
      // </Card>
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
  cardBody: {
    width: width * 0.8,
    padding: 10
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: "#888888"
  },
  cardHeaderText: {
    fontWeight: "bold"
  },
  completeIcon: {
    alignSelf: "flex-end"
  },
  sectionHeader: {
    // marginTop: 10,
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
    // padding: 20,
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
