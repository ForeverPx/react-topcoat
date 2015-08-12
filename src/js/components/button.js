/**
 * Created by panxiao on 15/8/12.
 * Button elemnt
 */
var Button = React.createClass({
    propTypes:{
        children: React.PropTypes.any,
        className: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        style: React.PropTypes.object,
        type: React.PropTypes.oneOf(['submit', 'button'])
    },
    getInitialState:function(){
        return {
            disabled:this.props.disabled,
            className:'topcoat-button',
            type: this.props.type ? this.props.type : 'button',
            text: null
        }
    },
    componentWillReceiveProps:function(newProps){
        if (newProps.disabled !== this.props.disabled) {
            this.setState({ disabled: newProps.disabled })
        }
    },
    text:function(text){
        this.setState({
            text:text
        });
    },
    handleClick:function() {
        if (this.props.onClick) {
            this.props.onClick()
        }
    },
    render:function(){
        return (
            <button className={this.state.className}
                    disabled={this.state.disabled}
                    type={this.state.type}
                    style={this.props.style}
                    onClick={this.handleClick.bind(this)}>
                {this.state.text || this.props.children}
            </button>
        );
    }
});