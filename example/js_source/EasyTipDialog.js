import React,{Component} from 'react'
import PropTypes from 'prop-types';
import {
    Modal,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './EasyTipDialogStyle'

export default class EasyTipDialog extends Component{

    constructor(props) {
        super(props)
        this.state = {
            dialogVisible: false,
            title: this.props.title,
            content: this.props.content,
            cancelText: this.props.cancelText,
            confirmText: this.props.confirmText
        }
        this.onConfirm = this.props.onConfirm
        this.onCancel = this.props.onCancel
        this.onCancelCallback = undefined
        this.onConfirmCallback = undefined
    }

    static propTypes = {
        title: PropTypes.string ,
        titleColor: PropTypes.string,
        titleSize: PropTypes.number,

        content: PropTypes.string ,
        contentColor: PropTypes.string,
        contentSize: PropTypes.number,

        cancelText: PropTypes.string,
        cancelColor: PropTypes.string,
        cancelSize: PropTypes.number,

        confirmText: PropTypes.string,
        confirmColor: PropTypes.string,
        confirmSize: PropTypes.number,

        isTitleCenter: PropTypes.bool,
        isContentCenter: PropTypes.bool,

        cancelOutSide: PropTypes.bool

    }

    static defaultProps = {
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

        isTitleCenter: false,
        isContentCenter: false,

        onCancel: undefined,
        onConfirm: undefined,

        cancelOutSide: false
    }

    show = (title,content,onCancelCallback,onConfirmCallback) => {
        this.onCancelCallback = onCancelCallback;
        this.onConfirmCallback = onConfirmCallback;
        this.setState({
            dialogVisible: true,
            title: title ? title : this.props.title,
            content: content ? content : this.props.content
        })
    }

    _cancelOutSide = ()=> this.props.cancelOutSide ? this.setState({dialogVisible: false}) : null;

    _onCancel = ()=> {
        this.setState({
            dialogVisible: false,
        })
        this.onCancel ? this.onCancel() : null;
        this.onCancelCallback ? this.onCancelCallback() : null
    }

    _onConfirm= ()=> {
        this.setState({
            dialogVisible: false,
        })
        this.onConfirm ? this.onConfirm() : null;
        this.onConfirmCallback ? this.onConfirmCallback() : null
    }

    _getTitleView() {
        let flexValue = this.props.isTitleCenter ? 0 : 1;
        return this.state.title ?
            <View style={{flexDirection: 'row' }} >
                <Text style={[styles.titleStyle,{flex: flexValue,color:this.props.titleColor,fontSize: this.props.titleSize}]}>{this.state.title}</Text>
            </View>
         : null;
    }

    _getContentView() {
        let flexValue = this.props.isContentCenter ? 0 : 1;
        return this.state.content ?
           <View style={{flexDirection: 'row' }} >
               <Text style={[styles.contentStyle,{flex: flexValue,color: this.props.contentColor,fontSize: this.props.contentSize}]}>{this.state.content}</Text>
           </View>
           : null;
    }

    _getBottomView() {
        return(
            <View style={{flexDirection: 'row'}} >
                <View style={{flex: 1}}/>
                <TouchableOpacity style={{padding: 15}} onPress={()=>this._onCancel()}>
                    <Text style={{fontSize: this.props.cancelSize,color: this.props.cancelColor}}>{this.props.cancelText}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 15,marginRight: 15}} onPress={()=>this._onConfirm()}>
                    <Text style={{fontSize: this.props.confirmSize,color: this.props.confirmColor}}>{this.props.confirmText}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.dialogVisible}
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
}

