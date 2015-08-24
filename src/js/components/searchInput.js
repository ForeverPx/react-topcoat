/**
 * Created by panxiao on 15/8/13.
 */
var SearchInput = React.createClass({
    inputTimeout:null,
    propTypes:{
        size: React.PropTypes.string,
        onInput: React.PropTypes.func,
        delay: React.PropTypes.number,
        disabled: React.PropTypes.bool
    },
    getInitialState:function(){
        return {
            size: this.props.size ? this.props.size : '',
            delay: this.props.delay ? this.props.delay : 300
        }
    },
    handleInput: function(event){
        var value = event.target.value;
        if(this.inputTimeout){
            window.clearTimeout(this.inputTimeout);
        }
        var that = this;
        this.inputTimeout = setTimeout(function(){
            that.props.onInput(value);
        },this.state.delay);
    },
    render: function(){
        var sizeClasss = this.state.size ? "topcoat-search-input--"+this.state.size :
            "topcoat-search-input";
        return (
            <input type="search"
                   placeholder='search'
                   onInput={this.handleInput.bind(this)}
                   className={sizeClasss}
                   disabled={this.props.disabled}
                />
        );
    }
});