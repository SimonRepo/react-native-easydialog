import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {
    Modal,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Text
} from 'react-native'

const {width,height} = Dimensions.get('window');

export default class EasyTipDialog extends Component{

    constructor(props) {
        super(props)
        console.log("离线包请删除此log","2222222222222222");
    }

    static propTypes = {
        dialogVisible: PropTypes.bool,

        title: PropTypes.string ,
        titleColor: PropTypes.string,
        titleSize: PropTypes.number,

        content: PropTypes.string ,
        contentColor: PropTypes.string,
        contentSize: PropTypes.number,

        cancelText: PropTypes.string,
        cancelColor: PropTypes.string,
        cancelSize: PropTypes.string,

        cancelBtnAction: PropTypes.func.isRequired,
        confirmBtnAction: PropTypes.func.isRequired,

    }

    static defaultProps = {
        dialogVisible: false,

        title: null,
        titleColor: '#000000',
        titleSize: 18,

        content: null,
        contentColor: '#757575',
        contentSize: 16,

        cancelText: 'CANCEL',
        cancelColor: '#FF914B',
        cancelSize: 16,

        confirmText: 'OK',
        confirmColor: '#FF914B',
        confirmSize: 16,
    }

    render() {
        console.log("离线包请删除此log","333333333333333333");
        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.props.dialogVisible}
                onRequestClose={()=>{}}>
                <View style={styles.modalContainer}>
                    <TouchableHighlight
                        activeOpacity={1}
                        style={styles.mask}
                        underlayColor='rgba(0,0,0,0.5)'
                        onPress={()=>this._cancelOutSide()}>
                        <Text></Text>
                    </TouchableHighlight>
                    <View style={styles.rootView} >
                        {this._getTitleView()}
                        {this._getContentView()}
                        {this._getBottomView()}
                    </View>
                </View>
            </Modal>
        )
    }

    _cancelOutSide = ()=> {
        this.setState({
            visible: false
        })
    }

    _getTitleView() {
        return this.props.title ?
            <View style={{flexDirection: 'row' }} >
                <Text style={[styles.titleStyle,{flex: 1,color:this.props.titleColor,fontSize: this.props.titleSize}]}>{this.props.title}</Text>
            </View>
            : null;
    }

    _getContentView() {
        return this.props.content ?
            <View style={{flexDirection: 'row' }} >
                <Text style={[styles.contentStyle,{color: this.props.contentColor,fontSize: this.props.contentSize}]}>{this.props.content}</Text>
            </View>
            : null;
    }

    _getBottomView() {

        return(
            <View style={{flexDirection: 'row',justifyContent:'space-between'}} >
                <View style={{flex: 1}}/>
                <TouchableOpacity style={{padding: 15}} onPress={()=>{}}>
                    <Text style={{fontSize: this.props.cancelSize,color: this.props.cancelColor}}>{this.props.cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 15,marginRight: 15}} onPress={()=>{}}>
                    <Text style={{fontSize: this.props.confirmSize,color: this.props.confirmColor}}>{this.props.confirmText}</Text>
                </TouchableOpacity>
            </View>
        )
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
    },
})