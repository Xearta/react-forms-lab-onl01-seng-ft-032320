import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleMessageChange} value={this.state.message} /><br/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
