import React from 'react';

import './ScrollToTopButton.css'; // Import the CSS file for the component

class ScrollToTopButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isVisible } = this.state;
    const shouldShowButton = window.pageYOffset > 100;

    if (shouldShowButton && !isVisible) {
      this.setState({ isVisible: true });
    } else if (!shouldShowButton && isVisible) {
      this.setState({ isVisible: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={this.scrollToTop}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 5.293L18.293 11.586 17.586 12.293 12 6.707 6.414 12.293 5.707 11.586z" />
        </svg>
      </button>
    );
  }
}

export default ScrollToTopButton;
