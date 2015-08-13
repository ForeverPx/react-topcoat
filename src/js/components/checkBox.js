/**
 * Created by panxiao on 15/8/13.
 */
var CheckBox = React.createClass({
    propTypes:{
        disabled: React.PropTypes.bool,
        text: React.PropTypes.string,
        id: React.PropTypes.string,
        checked: React.PropTypes.bool,
        value: React.PropTypes.string,
        onChange: React.PropTypes.func
    },
    getInitialState:function(){
        return {
            checked: this.props.checked
        }
    },
    handleClick: function(){
        this.props.onChange(!this.state.checked);
        if(this.state.checked){
            this.setState({
                checked: false
            });
        }else{
            this.setState({
                checked: true
            });
        }
    },
    render: function(){
        return (
            <label className="topcoat-checkbox">
                <input onChange={this.handleClick.bind(this)}
                       id={this.props.id}
                       type="checkbox"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       value={this.props.value}
                    />
                <div className="topcoat-checkbox__checkmark"></div>
                {this.props.children}
            </label>
        );
    }
});