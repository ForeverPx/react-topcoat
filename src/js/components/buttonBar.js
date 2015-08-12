/**
 * Created by panxiao on 15/8/12.
 */
var ButtonBar = React.createClass({
    propTypes:{
        buttons: React.PropTypes.array,
        size: React.PropTypes.string,
        type: React.PropTypes.string
    },
    getInitialState:function(){
        return {
            buttons: this.props.buttons,
            size: this.props.size ? this.props.size : '',
            activeCss:[],
            type: this.props.type || 0
        }
    },
    handleClick:function(event){
        var data = event.target.getAttribute('data-id');
        var button = this.state.buttons[data - 1];
        button.click();
        if(this.state.type == 0){ //默认，点击即弹起
            return;
        }else if(this.state.type == 1){ //单选模式
            var activeCss = [];
            activeCss[data-1] = 'topcoat-button-bar__button_active';
            this.setState({
                activeCss:activeCss
            })
        }else if(this.state.type == 2){ //多选模式
            var activeCss = this.state.activeCss;
            if(activeCss[data-1]){
                activeCss[data-1] = '';
            }else{
                activeCss[data-1] = 'topcoat-button-bar__button_active';
            }
            this.setState({
                activeCss:activeCss
            })
        }
    },
    render:function(){
        var that = this;
        var cx = React.addons.classSet;
        var index = 0;
        var btnsJsx = this.state.buttons.map(function(button){
            var sizeClass = that.state.size ? 'topcoat-button-bar__button--'+that.state.size : 'topcoat-button-bar__button';
            index++;
            var classes = cx(sizeClass,that.state.activeCss[index-1]);
            return (
                <div className="topcoat-button-bar__item">
                    <button data-id={index}
                            onClick={that.handleClick.bind(that)}
                            className={classes}>{button.text}
                    </button>
                </div>
            );
        });
        return (
            <div className='topcoat-button-bar'>
                {btnsJsx}
            </div>
        );
    }
});