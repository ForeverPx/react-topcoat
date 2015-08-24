/**
 * Created by panxiao on 15/8/20.
 */
var Input = React.createClass({
    propTypes:{
        disabled: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        type: React.PropTypes.oneOf(['email','url','number','text']),
        value: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        size: React.PropTypes.string,
        pattern: React.PropTypes.string,
        onInput: React.PropTypes.func
    },
    handleInput: function(event){
        var value = event.target.value;
        if(this.props.onInput){
            this.props.onInput(value);
        }
    },
    render:function(){
        var sizeClasss = this.props.size ? "topcoat-text-input--"+this.props.size :
            "topcoat-text-input";
        return (
            <input type={this.props.type || 'text'}
                   className={sizeClasss}
                   placeholder={this.props.placeholder || this.props.type}
                   pattern={this.props.pattern}
                   onInput={this.handleInput.bind(this)}
                   value={this.props.value} />
        );
    }
});