# react-topcoat
一个基于Topcoat样式的ReactUI库

[Topcoat官网](http://topcoat.io/topcoat/)

组件和文档在持续更新中…………

#Guide

**1.Button**

params:
 - *className*: default 'topcoat-button'
 - *disabled*: true or false, default false
 - *onClick*: function(){...}
 - *style*: button的行内样式
 - *type*: submit or button , default button

function:
text('click') : 设置button的text为'click'
 
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


----------

**2.ButtonBar**

params:
 - *buttons*: type Array, see example
 - *size*: '' or 'large', default ''
 - *type*: 0 or 1 or 2, default 0

关于type参数: 
type=0, 每个按钮点击后就弹起
type=1, 单选模式，只有一个按钮会被按下。
type=2, 多选模式，可以同时按下所有按钮。

example:
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

----------

**3.CheckBox**

params:
 - *disabled*: true or false , default false
 - *text*: checkbox's text , default ''
 - *id*: checkbox's uid
 - *checked*: true of false , default false
 - *value*: checkbox's value , dafault ''
 - *onChange*: function (state){ alert(state); }  //state 为当前checkbox的状态

example:
```js
React.render(
    <Button disabled={true}
            text='age'
            id='checkbox-1'
            value='19'
            checked={false}
            onChange={function (state){ alert(state); }}
    ></Button>
    , document.getElementById('container'));
```

----------

**4.IconButton**

params:
 - *disabled*: true or false , default false
 - *iconClassName*:  you can use font-awesome here, default 'topcoat-icon'
 - *onClick*: function (){...}
 - *id*: uid of element

examples:
```js
React.render(
    <IconButton iconClassName='icon-eat'
            id='icon-1'
            onClick={function (){...}}
    ></IconButton>
    , document.getElementById('container'));
```

----------

**5.Radio**

params:
 - *labelSide*: 'left' or 'right', default 'left'
 - *disabled*: true or false , default false
 - *checked*: true of false , default false
 - *onChange*: function (state){ alert(state); }  //state 为当前radio的状态

examples:
```js
React.render(
    <Radio labelSide='right'
            disabled={true}
            checked={true}
            onChange={function (state){...}}
    ></Radio>
    , document.getElementById('container'));
```

----------

**6.SearchInput**

params:
 - *size*: '' or 'large', default 'large'
 - *onInput*: function (inputValue){...}
 - *delay*: time to delay search, default 300ms
 - *disabled*: true or false , default false

examples:
```js
React.render(
    <SearchInput size='large'
            disabled={true}
            delay=500
            onInput={function (inputValue){...}}
    ></SearchInput>
    , document.getElementById('container'));
```

----------

**7.Switch**

params:
 - *onChange*: function (state //true or false){...}
 - *disabled*: true or false , default false
 - *initState*: true of false , default false
 
examples:
```js
React.render(
    <Switch initState={true}
            disabled={true}
            onChange={function (state){...}}
    ></Switch>
    , document.getElementById('container'));
```
