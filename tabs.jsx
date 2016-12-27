import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
  }

  selectTab(num) {
    this.setState({selectedPane: num});
  }

  render () {
    return (
      <div className="all-tabs">
        <h1>Tabs</h1>
        <div className="tabs">
          <ul>
            { this.props.panes.map((pane, index) => (<li key={index} onClick={this.selectTab.bind(this, index)}><h3>{pane.title}</h3></li>)) }
          </ul>
        </div>
        <div className="tab-content">
          <p> { this.props.panes[this.state.selectedPane].content } </p>
        </div>
      </div>
    );
  }
}

export default Tabs;
