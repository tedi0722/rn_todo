import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Modal from "react-native-modal";
import { addTodo } from "../store/actions/todoAction";
import { Overlay, Input } from "react-native-elements";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isVisible: false
    };
  }

  toggleOverlay() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <View>
        <Modal
          animationIn="fadeIn"
          animationOut="fadeOut"
          avoidKeyboard={true}
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.toggleOverlay()}
        >
          <View style={styles.modalView}>
            <Icon
              style={{ alignSelf: "flex-end" }}
              size={20}
              name="close"
              onPress={() => this.toggleOverlay()}
            />
            <View>
              <Input
                multiline={true}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                rightIcon={
                  <TouchableOpacity
                    onPress={() => {
                      this.props.addTodo(this.state.text);
                      this.setState({ text: "" });
                      this.toggleOverlay();
                    }}
                  >
                    <Text style={{ color: "#0080ff" }}>Add</Text>
                  </TouchableOpacity>
                }
              />
            </View>
          </View>
        </Modal>
        <Icon
          size={40}
          color="#333333"
          name="plus-circle-outline"
          onPress={() => this.toggleOverlay()}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text))
  };
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
