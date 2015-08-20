# react-topcoat
一个基于Topcoat样式的ReactUI库

[Topcoat官网](http://topcoat.io/topcoat/)

#Guide

**1.Button**

params:
 - *className*: default 'topcoat-button'
 - *disabled*: true or false, default false
 - *onClick*: function(){...}
 - *style*: button的行内样式
 - *type*: submit or button , default button

function:
 - text('click') : 设置button的text为'click'
 
example:
```js
     React.render(
        <Button disabled={true}
                style={{display:inline}}
                type='submit'
                onClick={function(){alert('px')}}
        ></Button>
        , document.getElementById('container'));
```

**2.ButtonBar**

params:
 - *buttons*: type Array, see example
 - *size*: '' or 'large', default ''
 - *type*: 0 or 1 or 2, default 0

关于type参数: 
type=0, 每个按钮点击后就弹起
type=1, 单选模式，只有一个按钮会被按下。
type=2, 多选模式，可以同时按下所有按钮。

```js
var buttons = [{
    text:'1',
    click: function(){alert(1)}
},{
    text:'2',
    click: function(){alert(2)}
},{
    text:'3',
    click: function(){alert(3)}
}]

React.render(
        <ButtonBar size='large'
                type=1
                buttons={buttons}
        ></ButtonBar>
        , document.getElementById('container'));

```
