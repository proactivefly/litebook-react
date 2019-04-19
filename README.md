注意事项：

1、操作数组尽量用 [...a]

2、jsx中变量用{}，onClick,bind(this,params)

3、Fragment 可以作为组件中根标签，不会显示成元素。

4、jsx中注释 {/* 此处为注释 */}

5、结构赋值
    var a={content:'内容',index:'索引'}
    const {content,index}=a

    等价于 var content=a.content
          var index=a.index

6、es6 return  简写
    （)=>( xxx )   等价于  （)=>{return xxx }

7、 propTypes  限制类型

    ComponentName.propTypes={
        content:propTypes.string.isRequired, // 必传 && string
        index:propTypes.number
    }
    //  默认值
    ComponentName.defaultProps={
        content:'默认值',
        index:'默认值'
    }

8、key  尽量用 item自己做key值，不要用户index，对比时索引会变

9、ref(不推荐使用)
    <input ref={(input)={this.domName=input}}/>
    使用时 this.domName 等价于dom本身

10、setState 是个异步函数
    setState({},function()=>{   })

    setState(()=(),()=>{})

11、生命周期
    定义：某一时刻，函数会自动执行的函数叫生命周期函数

    class componentName extends React.Component={
        constructor(props){ 创建时 ，es6的生命周期函数
            super(props)
        },
        componentWillMount(){ //组件即将挂载
        },
        componentDidMount(){ //组件挂载完成
        },
        shouldComponentUpdate(){// 更新之前 提问 你的组件需要被组件被更新吗
            //必须返回 boolean
            true时才更新，
            false 时不会更新
        },
        componentWillUpdate(){ //组件即将更新
        },
        componentDidUpdate(){ //组件更新之后
        },
        componentWillUnmount(){//
        }
        render(){ //state改变时，render 函数会被执行
        },

    }

    ![Image text](https://github.com/proactivefly/staticFolder/blob/master/img/react%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png)

12、使用Charles接口模拟

13、react-transition-group

    <CSSTransition
        in={this.state.show} //动画条件
        timeout={1000}
        className='fade'
        unmountOnExit //执行完成后是否移除dom
        onEntered={(el)=>{el.style.color='blue'}}
        appear={true} //第一次展示时也执行动画效果  添加 .fade-appear,.fade-appear-active
    >

    </CssTransition>

14、Redux(reducer+flux)

