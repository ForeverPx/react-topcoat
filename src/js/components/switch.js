/**
 * Created by panxiao on 15/8/14.
 */
var Switch = React.createClass({
    propTypes:{
        onClick: React.PropTypes.func,
        disabled: React.PropTypes.bool,
        initState: React.PropTypes.bool
    },
    getInitialState:function(){
        return {
            initState: this.props.initState
        }
    },
    handleClick:function(event){
        var value = event.target.checked;
        this.setState({
            initState: value
        });
        this.props.onChange(value);
    },
    render: function(){
        return (
            <label className="topcoat-switch">
                <input type="checkbox"
                       className="topcoat-switch__input"
                       disabled={this.props.disabled}
                       checked={this.state.initState}
                       onChange={this.handleClick.bind(this)}
                    />
                <div className="topcoat-switch__toggle"></div>
            </label>
        );
    }
});