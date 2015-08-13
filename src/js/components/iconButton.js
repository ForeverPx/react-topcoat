/**
 * Created by panxiao on 15/8/13.
 */
var IconButton = React.createClass({
    propTypes:{
        children: React.PropTypes.any,
        onClick: React.PropTypes.func,
        disabled: React.PropTypes.bool,
        iconClassName: React.PropTypes.string
    },
    handleClick: function(){
        this.props.onClick();
    },
    render: function(){
        return (
            <button onClick={this.handleClick.bind(this)} className="topcoat-icon-button" disabled={this.props.disabled}>
                <span className={this.props.iconClassName || 'topcoat-icon'} style={{backgroundColor:'#A5A7A7'}}></span>
            </button>
        );
    }
});