import React,{Component} from 'react'

class Image extends Component{
  constructor() {
    super();
    this.state = {
      showExpand: false
    };
  }
  handleClick(e){
    if(this.props.arrange.isCenter){
      this.props.reverse()
    }else{
      this.props.center()
    }

    e.preventDefault()
  }

  render(){
    let styleObj = {}
    if(this.props.arrange.pos){
      styleObj = this.props.arrange.pos
    }
    if(this.props.arrange.rotate){
      styleObj['transform'] = `rotate(${this.props.arrange.rotate}deg)`;
    }
    if(this.props.arrange.isCenter){
      styleObj.zIndex = 11;
    }
    let figureClassName = 'img-figure';
    figureClassName += this.props.arrange.isReverse ? ' is-reverse' : '';
    let allTitles = [];
    for (let i = 0; i < this.props.data.tags.length; i++) {
      let classname = 'img-title';
      if (this.props.selectedTags.indexOf(this.props.data.tags[i]) >= 0) {
        classname += ' selected-tag';
      }
      let t = <h3 key={i} className={classname} onClick={() => this.props.settag(this.props.data.tags[i])}>{this.props.data.tags[i]}</h3>;
      allTitles.push(t);
    }
    return(
      <figure className={figureClassName} id={this.props.id}
      style={styleObj}>

        <div className="front">
          <img className="pic" src={this.props.data.url} alt={this.props.data.tags} onClick={this.handleClick.bind(this)}/>
          <img className='expand' src='http://icons.iconarchive.com/icons/icons8/ios7/16/Editing-Expand-icon.png' onClick={() => this.props.expand(this.props.figid)}/>
          {allTitles}
        </div>
        <div className="back" onClick={this.handleClick.bind(this)}>
          {this.props.data.season ? (<div className="desc">Season {this.props.data.season}</div>):''}
          {this.props.data.episode ? (<div className="desc">Episode {this.props.data.episode}</div>):''}
        </div>

      </figure>
    )
  }
}
export default Image