import React from 'react'
import {StyleSheet,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')

export default EasyTipDialogStyle = StyleSheet.create({
    modalContainer: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:width,
        height:height,
        backgroundColor:'transparent',
    },
    mask: {
        position:'absolute',
        top:0,
        left:0,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
        width:width,
        height:height,
    },
    rootView: {
        flexDirection: 'column',
        alignItems: 'center',
        width: width * 0.8,
        backgroundColor: '#ffffff',
        borderRadius: 3
    },
    titleStyle: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12
    },
    contentStyle: {
        paddingTop: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 40
    }
})