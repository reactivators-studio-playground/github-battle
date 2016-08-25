import React, { PropTypes } from 'react';

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px',
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  },
};

export default class Loading extends React.Component {
  static defaultProps = {
    text: 'Loading',
    speed: 300,
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
  }
  state = {
    text: this.props.text,
  }

  componentWillMount() {
    window.clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.text === `${this.props.text}...`) {
        this.setState({ text: this.props.text });
      }
      this.setState({ text: `${this.state.text}.` });
    }, this.props.speed);
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.content}>
          {this.state.text}
        </p>
      </div>
    );
  }
}
