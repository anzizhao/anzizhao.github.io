import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import TextField from 'material-ui/lib/text-field';

import ActionGrade from 'material-ui/lib/svg-icons/action/grade';

import Colors from 'material-ui/lib/styles/colors';

<<<<<<< HEAD



import TakeRate from './takeRate';
import SelectTags from './selectTags';
import TodoItemList from './todoItemList';

=======
import Tags from './tags';

import 'react-select2-wrapper/css/select2.min.css';
import Select2 from 'react-select2-wrapper';
>>>>>>> origin/master

export default class Todo extends Component {
    // 本地的变量  因为要需要取消掉的 其实可以考虑undo
   static rateType = {
        importance: 1,
        urgency: 2,
        difficulty: 3,
   };    
    state = {
        toEditItem : false,
        initRate: false,
        tags: [],
        urgency: 0, //紧急程度
        importance: 0,  //重要程度
        difficulty: 0,   //困难程度
        itemText: ''
    };

    componentWillReceiveProps (nextProps) {
        const props = nextProps
        this.setState({
            importance: props.importance,
            urgency : props.urgency ,
            difficulty: props.difficulty,
            itemText: props.text,
            tags: props.tags,
        });
    }

    componentDidMount () {
        const props = this.props 
        if( ! this.props.collapse )  {
            const ele = ReactDOM.findDOMNode(this._input)
            ele.getElementsByTagName('textarea')[1].focus()
        }
    }

    componentDidUpdate() {
        const props = this.props 
        if( ! this.props.collapse )  {
            const ele = ReactDOM.findDOMNode(this._input)
            ele.getElementsByTagName('textarea')[1].focus()
        }
    }


    handleChangeItem(e) {
        this.setState({
            itemText: e.target.value,
        });
    }
    handleRate (e, type, count){ 
        const r = Todo.rateType
        let state = {
            initRate: false, 
        }
        switch(type) {
            case r.importance:
                state.importance = count
                break;
            case r.urgency:
                state.urgency = count
                break;
            case r.difficulty:
                state.difficulty = count
                break;
            defalut: 
                return 
        }
        //更新相关的对象
        this.setState(state);
    } 


    _leaveEditMode(id){
        this.props.actions.uneditTodo(id)
        this.setState({
            initRate: true, 
        })
    }

    handleSaveTodo(){
        let id = this.props.id
        let item = {
            text: this.state.itemText, 
            importance: this.state.importance,
            difficulty: this.state.difficulty,
            urgency: this.state.urgency, 
            tags: this.state.tags 
        }
        this.props.actions.saveTodo(id, item)
        this._leaveEditMode(id)
    }
    handleUnsaveTodo(){
        let id = this.props.id
        this._leaveEditMode(id)
    }


    handleTagChange(e) {
        // target options array,  the last ele id is empty '', that means add new value
        var opts = e.target.selectedOptions
        if( ! opts ){
            return 
        } 
        var ele = opts[opts.length-1]
        if ( ele.id === '' ) {
            //new value, set  
            this.props.actions.addTags(ele.id, ele.text)
        }
        // 这个不需要render的
        var tags = []
        for(let i=0; i<opts.length; i++) {
            let item = opts[i]
            tags.push(
                {id: item.id, text:item.text }
            ) 
        }
        this.state.tags = tags 
    }
<<<<<<< HEAD

    getStyle (){
        const style =  this.constructor.style
        const dStyle = {
            listItemDiv: {
                display:  this.props.collapse ? 'block' : 'none'
            },

            listItem: {
                //textDecoration: this.props.completed ? 'line-through' : 'none',
                //cursor: this.props.completed ? 'default' : 'pointer',
                //display:  this.props.collapse ? 'block' : 'none'
            },
            editTodo: {
                display: ! this.props.collapse ? 'block' : 'none',
            },
            listTextSpan: {
                textDecoration: this.props.completed ? 'line-through' : 'none',
            },
        }
        return Object.assign({}, style, dStyle) 
    } 

    getTakeRateParam(){
        return  {
            values: {
                importance: this.state.importance  ,
                urgency: this.state.urgency, 
                difficulty: this.state.difficulty ,
            } ,
            handles: {
                importance: (e, count)=>{ this.handleRate(e, Todo.rateType.importance, count)}  ,
                urgency:   (e, count)=>{ this.handleRate(e, Todo.rateType.urgency, count)}, 
                difficulty:  (e, count)=>{ this.handleRate(e, Todo.rateType.difficulty, count)}  
            } ,
            initRate: this.state.initRate
        }
    }



    render() {
        const { id, conclusion, allTags, actions } = this.props
        const style = this.getStyle() 
        const takeRateParam = this.getTakeRateParam() 

        return (
            <div className="todo-item">
                <div style={style.listItemDiv }>
                    <TodoItemList 
                        importance={this.state.importance} 
                        urgency={this.state.urgency} 
                        difficulty={this.state.difficulty}

                        {...this.props}
                    />
                </div>
                <div style={style.editTodo } >
                    <label>{ this.props.index + 1 } </label>
                    <TextField
                        className='item-input'
                        fullWidth
                        multiLine={true}
                        value={this.state.itemText}
                        onChange={(e)=>this.handleChangeItem(e)}
                        onEnterKeyDown ={(e) => this.handleSaveTodo()}
                        ref={(c) => this._input = c}
                    />
                    <TakeRate 
                        {...takeRateParam} />

                    <SelectTags  
                        onChange={ this.handleTagChange.bind(this)} 
                        allTags = { allTags } 
                        select={ this.props.tags }
                    />

                    <div style={style.opButGroup }>
                        <FlatButton label="完成" onClick={(e) => this.handleSaveTodo() }  style={ style.flatButton }  />
                        <FlatButton label="取消" onClick={(e) => this.handleUnsaveTodo() }  style={ style.flatButton }  />
                    </div>
=======
    
  render() {
      const { id, conclusion, allTags } = this.props
      const style = {
          listItem: {
              //textDecoration: this.props.completed ? 'line-through' : 'none',
              //cursor: this.props.completed ? 'default' : 'pointer',
              display:  this.props.collapse ? 'block' : 'none'
          },
          editTodo: {
              display: ! this.props.collapse ? 'block' : 'none',
          },
          opButGroup: {
              float: 'right',
          },
          listTextSpan: {
              float: 'left',
              textDecoration: this.props.completed ? 'line-through' : 'none',
          },
          badge: {
              fontSize: 15, 
              marginTop: '10px',
              width: '18px',
              height: '18px'
          },
          secondtext: {
                marginTop: '25px',
                marginLeft: '30px',
                marginRight: '30px',
          },
          badgeRoot: {
            padding: "20px 18px 12px 0", 
          },
          selectTag:{
            width: "100%" 
          } 

      }

      const listText = ( 
                        <span > 
                            <span  style={style.listTextSpan}>
                            { `${ String(this.props.index + 1) }.  ${this.props.text}        ` } 
                            </span>
                            <Tags tags={this.state.tags } /> 
                            <span className="item-show-right">
                                <Badge
                                    badgeContent={this.state.importanceStar }
                                    className='item-show-right-star'
                                    style={ style.badgeRoot }
                                    badgeStyle={{...style.badge, 'backgroundColor':'rgba(243, 255, 66, 0.56)'}} 
                                >
                                    重要
                                </Badge>
                                <Badge
                                    badgeContent={this.state.signStar }
                                    className='item-show-right-star'
                                    style={ style.badgeRoot }
                                    badgeStyle={{...style.badge, 'backgroundColor':'rgba(244, 67, 54, 0.56)'}} 
                                >
                                    紧急
                                </Badge>
                                <Badge
                                    badgeContent={ this.state.difficultyStar }
                                    className='item-show-right-star'
                                    style={ style.badgeRoot }
                                    badgeStyle={{...style.badge, 'backgroundColor':'rgba(3, 169, 244, 0.56)'}} 
                                >
                                    困难
                                </Badge>
                            </span>
                        </span>
                       )

       const iconButtonElement = (
           <IconButton
               touch={true}
           >
               <MoreVertIcon color={Colors.grey400} />
           </IconButton>
       ) 
      const rightIconMenu = (
        <IconMenu iconButtonElement={iconButtonElement}>
          <MenuItem 
              onClick={ () =>  this.handleEditItem(id)  }
              primaryText="编辑"
          />
          <MenuItem
              onClick={(e) => this.handleDelItem(e, id) } 
              primaryText="删除"
          />
          <MenuItem
              onClick={(e) => this.handleComplete(e, id) }
              primaryText="完成"
          />
          <MenuItem
              onClick={(e) => this.handleUNComplete(e,   id) } 
              primaryText="未完成"
          />
        </IconMenu>
      )
      let secondaryText = '' 
      let secondaryTextLines   = 1
      let subItems = []
      let index = 1
      //结论
      if ( conclusion ) {
          subItems.push(<TodoSubItem
                        todoId = { this.props.id }
                        key="conclusion" 
                        index={index} 
                        parentIndex={this.props.index+1}
                        { ...conclusion } 
                        actions={this.props.actions} /> )

          index += 1
          secondaryText = (
                <span  style={style.secondtext} > 
                   结论:  { conclusion.text }
                </span> 
          ) 
          // 可以根据字数  设置多少行
          secondaryTextLines = 2

      }

      //过程描述
      if ( this.props.process.length != 0 ) {
          for( let item of this.props.process ) {
              subItems.push(<TodoSubItem
                            todoId = { this.props.id }
                            key={item.id} 
                            index={index} 
                            parentIndex={this.props.index+1 }
                            {...item} 
                            actions={this.props.actions} /> )

                            index += 1
          }
      }
      subItems.push(<TodoSubBut 
                        todoId = { this.props.id }
                        key="addBut"
                        actions={this.props.actions } /> )

    console.log("before return")
    return (
        <div className="todo-item">
            <ListItem 
                primaryText={ listText } 
                secondaryText = { secondaryText }
                secondaryTextLines =  { secondaryTextLines }
                style={style.listItem}
                rightIconButton={ rightIconMenu }
                primaryTogglesNestedList={true}
                nestedItems={subItems}
                key={ this.props.key }
            />
            <div style={style.editTodo } >
                 <label>{ this.props.index + 1 } </label>
                 <TextField
                    className='item-input'
                     fullWidth
                     value={this.state.itemText}
                     onChange={(e)=>this.handleChangeItem(e)}
                     onEnterKeyDown ={(e) => this.handleSaveTodo()}
                 />
                 <div className="item-score">
                    <span  className='item-score-title'>重要程度 
                        <StarRate star={this.state.importanceStar  }
                         clickStar={(e, count)=>{ this.handleImportanceStar(e, id, count)}  } 
                         initHasSignStar={ this.state.initImportanceStarFlag}
                         />  
                     </span>
                     <br/>
                    <span  className='item-score-title'>紧急程度 
                        <StarRate star={this.state.signStar }
                         clickStar={(e, count)=>{ this.handleSignStar(e, id, count)}  } 
                         initHasSignStar={ this.state.initHasSignStar }
                         />  
                     </span>
                     <br/>
                    <span  className='item-score-title'>难易程度 
                        <StarRate star={this.state.difficultyStar }
                         clickStar={(e, count)=>{ this.handleDifficultyStar(e, id, count)}  } 
                         initHasSignStar={ this.state.initDifficultyFlag }
                         />  
                     </span>
                 </div>

                 <div className="select-tag">
                     <Select2
                         style={style.selectTag}
                         multiple
                         data={allTags}
                         onChange={ this.handleTagChange.bind(this) }
                         options={{
                                 placeholder: '添加或选择标签',
                                 tags: true,
                             }
                         }
                     />
                 </div>
                <div style={style.opButGroup }>
                    <FlatButton label="完成" onClick={(e) => this.handleSaveTodo() }  style={ style.flatButton }  />
                    <FlatButton label="取消" onClick={(e) => this.handleUnsaveTodo() }  style={ style.flatButton }  />
>>>>>>> origin/master
                </div>


            </div>
        )
    }

}




Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    allTags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired
}

//static style 
Todo.style = {
    opButGroup: {
        float: 'right',
    },
    listTextSpan: {
        float: 'left',
    },
    secondtext: {
        marginTop: '25px',
        marginLeft: '30px',
        marginRight: '30px',
    },
    selectTag:{
        width: "100%" 
    } 

}
