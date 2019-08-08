import React, {Component}from 'react';


class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color
    };
  }
  
  render(){
    return(
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <p>Color: red - FontSize: 15px </p>
        <div id="contest" style={ this.setStyle() }>
          Noi dung setting
        </div>
      </div>
    );
  }
}

export default Result;
