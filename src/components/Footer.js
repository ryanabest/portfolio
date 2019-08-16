import React, { Component } from 'react';
import './Footer.css';
import twitter from './assets/social-icons/twitter.png';
import linkedin from './assets/social-icons/linkedin.png';
import tableau from './assets/social-icons/tableau.png';
import github from './assets/social-icons/github.png';

import twitterhighlight from './assets/social-icons/twitter-highlight.png';
import linkedinhighlight from './assets/social-icons/linkedin-highlight.png';
import tableauhighlight from './assets/social-icons/tableau-highlight.png';
import githubhighlight from './assets/social-icons/github-highlight.png';

class Footer extends Component {
  render() {
    return (
      <div className="social-thumbnails">
        <Icon id="twitter-icon" icon={twitter} highlight={twitterhighlight} alt="twitter" link="https://twitter.com/ryanabest"/>
        <Icon id="github-icon" icon={github} highlight={githubhighlight} alt="github" link="https://github.com/ryanabest"/>
        <Icon id="linkedin-icon" icon={linkedin} highlight={linkedinhighlight} alt="linkedin" link="https://www.linkedin.com/in/ryan-best-03722482/"/>
        <Icon id="tableau-icon" icon={tableau} highlight={tableauhighlight} alt="tableau" link="https://public.tableau.com/profile/ryan.best8326#!/"/>
      </div>
    );
  }
}

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {isHighlight: false};

    // This binding is necessary to make `this` work in the callback
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState(state => ({
      isHighlight: true
    }));
  }

  handleMouseOut() {
    this.setState(state => ({
      isHighlight: false
    }));
  }

  render() {
    return (
      <a target="_blank" href={this.props.link}>
        <img id={this.props.id} src={this.state.isHighlight ? this.props.highlight : this.props.icon} alt={this.props.alt} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}/>
      </a>
    )
  }
}

export default Footer;
