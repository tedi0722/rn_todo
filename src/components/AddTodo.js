import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { addTodo } from "../store/actions/todoAction";
import { Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ImagePicker from "react-native-image-picker";

const { width, height } = Dimensions.get("window");

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      isVisible: false,
      photoName: undefined,
      photoUri: undefined,
      completed: false
    };
  }

  toggleOverlay() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  handleChoosePhoto() {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log("reponse", response);
      if (response.uri) {
        this.setState({ photoName: response.fileName, photoUri: response.uri });
      }
    });
  }

  clearState() {
    this.setState({
      title: "",
      text: "",
      photoName: undefined,
      photoUri: undefined
    });
  }

  render() {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Icon
            size={24}
            color="#20B2AA"
            name="plus"
            onPress={() => this.toggleOverlay()}
          />
        </View>
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
              color="#dddddd"
              name="close"
              onPress={() => this.toggleOverlay()}
            />
            <View>
              <Input
                containerStyle={{ marginBottom: 10 }}
                inputStyle={{ color: "#dddddd" }}
                labelStyle={{ color: "#dddddd" }}
                placeholder="Title"
                placeholderTextColor="#555555"
                value={this.state.title}
                onChangeText={title => this.setState({ title })}
              />
              <Input
                containerStyle={{ marginBottom: 10 }}
                inputStyle={{ color: "#dddddd" }}
                labelStyle={{ color: "#dddddd" }}
                placeholder="Description"
                placeholderTextColor="#555555"
                multiline={true}
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />
            </View>
            {this.state.photoName && (
              <View
                style={{
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon name="paperclip" />
                <Text style={{ color: "#dddddd" }}>{this.state.photoName}</Text>
              </View>
            )}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 10
              }}
            >
              <View style={{ padding: 2 }}>
                <Button
                  buttonStyle={{
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    backgroundColor: "#20B2AA"
                  }}
                  icon={<Icon color="white" size={26} name="image" />}
                  onPress={() => this.handleChoosePhoto()}
                />
              </View>
              <View style={{ padding: 2 }}>
                <Button
                  buttonStyle={{
                    paddingTop: 2,
                    paddingRight: 10,
                    paddingBottom: 2,
                    paddingLeft: 10,
                    backgroundColor: "#20B2AA"
                  }}
                  title="Add"
                  onPress={() => {
                    this.props.addTodo(this.state);
                    this.setState(this.clearState());
                    this.toggleOverlay();
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: item => dispatch(addTodo(item))
  };
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#333333",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  input: {
    marginBottom: 10
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
