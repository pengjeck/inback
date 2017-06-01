/**
 * Created by pj on 17-5-31.
 */

import {
    StyleSheet,
    Text, Image, View, Button
} from 'react-native'
import React, {Component} from 'react'

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText}
            });
            // this.state.showText = !this.state.showText // 这样做没有用
        }, 1000)
    }

    render() {
        let color = this.state.showText ? styles.red : null;
        // let text = this.state.showText ? this.props.text: '';
        return (
            <Text style={color}> {this.props.text} </Text>
            // <Text> {text} </Text>
        )
    }
}

class RowFlex extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        )
    }
}

class EventButton extends Component {
    constructor(props) {
        super(props);
        this.state = {text: true}
    }

    rootButtonPressed() {
        console.log('clicked!');

        this.setState((prevState) => {
            return {text: !prevState.text}
        });
    }

    render() {
        let text = this.state.text ? this.props.text : '';

        return (
            <View>
                <Text> { text } </Text>
                <Button title='button' onPress={this.rootButtonPressed.bind(this)}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    red: {
        color: 'red',
        fontWeight: 'bold'
        // fontSize: 32
    }
});

class BasicTest extends Component {
    render() {
        return (
            <EventButton text="this is a sample text"/>
        )
    }
}


export {BasicTest}

