/**
 * Created by panxiao on 15/8/14.
 */
var Radio = React.createClass({
    propTypes: {
        labelSide: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        checked: React.PropTypes.bool,
        onChange: React.PropTypes.func
    },
    getInitialState:function(){
        return {
            labelSide: this.props.labelSide || 'left',
            text: this.props.text || 'radio',
            checked: this.props.checked
        }
    },
    handledChange:function(e){
        if(this.state.checked){
            this.setState({
                checked: false
            });
        }else{
            this.setState({
                checked: true
            });
        }
        if(this.props.onChange){
            this.props.onChange(!this.state.checked);
        }
    },
    render: function(){
        return (
            <label className="topcoat-radio-button">
                {this.state.labelSide == 'left' ? this.state.text : ''}
                <input type="radio"
                       className="topcoat"
                       disabled={this.props.disabled}
                       onChange={this.handledChange.bind(this)}
                       checked={this.state.checked}
                    />
                <div className="topcoat-radio-button__checkmark"></div>
                {this.state.labelSide == 'right' ? this.state.text : ''}
            </label>
        );
    }
});