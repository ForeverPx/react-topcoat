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
