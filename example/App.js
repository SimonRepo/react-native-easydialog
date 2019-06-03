/**
 * Sample React Native EasyDialog App
 * https://github.com/SimonRepo/react-native-easydialog
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';
import EasyTipDialog from './js_source/EasyTipDialog'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
          <EasyTipDialog
             ref={'tipDialog'}
             title={'我是提示'}
             content={'我是内容》...'}
             cancelOutSide={true}
             onCancel={()=>{
             }}
             onConfirm={()=>{
             }}
          />

          <EasyTipDialog
              ref={'tipDialog2'}
              title={'我是提示'}
              isTitleCenter={true}
              isContentCenter={true}
              content={'我是内容》...'}
              cancelOutSide={true}
              onCancel={()=>{
              }}
              onConfirm={()=>{
              }}
          />

          <View style={{marginTop:20}}>
              <Button title={"TipDialog"} color={'#FF914B'} onPress={()=>{
                  this.refs.tipDialog.show()
              }}/>
          </View>
          <View style={{marginTop:20}}>
              <Button title={"TipDialog with param"} color={'#FF914B'} onPress={()=>{
                  this.refs.tipDialog.show("提示","提示内容...",null,()=>{
                  })
              }}/>
          </View>
          <View style={{marginTop:20}}>
              <Button title={"set TipDialog title&content center"} color={'#FF914B'} onPress={()=>{
                  this.refs.tipDialog2.show("提示","提示内容...",null,()=>{
                  })
              }}/>
          </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
