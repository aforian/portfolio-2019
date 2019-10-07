import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.sass"

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      intervalId: 0,
      scrollY: 0,
      winHeight: 0,
    }
  }
  componentDidMount() {

    this.setState({
      winHeight: window.innerHeight,
    })
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const bodyOffset = document.body.getBoundingClientRect();

    this.setState({
      scrollY: -bodyOffset.top
    });
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    const { scrollY, winHeight } = this.state;

    return (
      <div
        id="back-to-top"
        className={[scrollY > winHeight/2 ? `show` : '']}>
        <button
          onClick={() => this.scrollToTop() }
        >
          <span className="fa-layers fa-fw fa-lg">
            <FontAwesomeIcon icon={['fas','chevron-up']} />
          </span>
        </button>
      </div>
    )
  }
}

ScrollToTop.propTypes = {
  scrollStepInPx: PropTypes.number,
  delayInMs: PropTypes.number,
}

ScrollToTop.defaultProps = {
  scrollStepInPx: 50,
  delayInMs: 16.66,
}

export default ScrollToTop