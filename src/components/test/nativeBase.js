/**
 * Created by pj on 17-6-5.
 */

import {
  Item,
  Text,
  Input,
  Icon,
  Container,
  Content,
  Button
} from 'native-base'

import React, {Component} from 'react'

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 123,
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Item>
            <Icon name="home"/>
            <Input
              onChangeText={
                (text) => {
                  console.log(text);
                }
              }
              value={this.state.text}
              placeholder="手机号"/>
          </Item>
          <Button
            onPress={() => {
              console.log('clicked!')
            }}>
            <Text>clicked</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

