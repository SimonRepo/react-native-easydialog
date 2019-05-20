import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {
    Modal,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Text
} from 'react-native'

const {width,height} = Dimensions.get('window');

export default class EasyTipDialog extends Component{

    constructor(props) {
        super(props)
        this.state = {
            visible : this.props.visible
        }
    }

    static propTypes = {
        visible: PropTypes.bool,

        title: PropTypes.string ,
        titleColor: PropTypes.string,
        titleSize: PropTypes.number,

        content: PropTypes.string ,
        contentColor: PropTypes.string,
        contentSize: PropTypes.number

    }

    static defaultProps = {
        visible: true,
        title: null,
        titleColor: '#000000',
        titleSize: 18,
        content: null
    }

    render() {
        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={()=>{}}>
                <View style={styles.modalContainer}>
                    <TouchableHighlight
                        activeOpacity={1}
                        style={styles.mask}
                        underlayColor='rgba(0,0,0,0.5)'
                        onPress={()=>this._cancleOutSide()}>
                        <Text></Text>
                    </TouchableHighlight>
                    <View style={styles.rootView} >
                        {this._getTitleView()}
                        {this._getContentView()}
                    </View>
                </View>
            </Modal>
        )
    }

    _cancleOutSide = ()=> {
        this.setState({
            visible: false
        })
    }

    _getTitleView() {
        return this.props.title ?
            <Text style={[styles.titleStyle,{color:this.props.titleColor,fontSize: this.props.titleSize}]}>{this.props.title}</Text>
            : null;
    }

    _getContentView() {
        return this.props.content ?
            <Text >{this.props.content}</Text>
            : null;
    }
}

const styles = StyleSheet.create({
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
        width: width * 0.7,
        height: height * 0.3,
        backgroundColor: '#ffffff',
        borderRadius: 5
    },
    titleStyle: {
        padding: 12,
    }
})