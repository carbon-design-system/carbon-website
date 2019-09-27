import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';
import classnames from 'classnames';
import ReactGA from 'react-ga';
import { highlightAll } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import { Copy20, ChevronDown16 } from '@carbon/icons-react';

import './prism.css';

class CodeExample extends Component {
  static propTypes = {
    htmlFile: PropTypes.string,
    codeClassName: PropTypes.string,
  };

  static defaultProps = {
    codeClassName: 'language-html',
  };

  state = {
    copied: false,
    showBtn: false,
    expandedCode: false,
  };

  componentDidMount = () => {
    if (this.codeBlock.offsetHeight > 190) {
      this.setState({ showBtn: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  };

  componentDidUpdate = () => {
    highlightAll();
  };

  handleCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2500);
  };

  expandCode = () => {
    this.setState({ expandedCode: !this.state.expandedCode });
  };

  handleClick = () => {
    ReactGA.event({
      category: 'Copy Code',
      action: 'click',
    });
  };

  render() {
    const { htmlFile, codeClassName } = this.props;
    const copyBtnClass = classnames({
      'bx--btn--copy__feedback': true,
      'bx--btn--copy__feedback--displayed': this.state.copied,
    });

    const codeExampleClass = classnames({
      'code-example__raw-html': true,
      'code-example__raw-html--expanded': this.state.expandedCode,
    });

    const expandBtnIconClass = classnames({
      'code-example__expand--icon': true,
      'code-example__expand--icon--rotated': this.state.expandedCode,
    });

    const expandBtnClass = classnames({
      'code-example__expand': this.state.showBtn,
      'code-example__expand--hidden': !this.state.showBtn,
    });

    const expandCodeBtnText = this.state.expandedCode
      ? 'Show less'
      : 'Show more';
    return (
      <div className="code-example">
        <div
          className={codeExampleClass}
          ref={ref => {
            this.codeBlock = ref;
          }}>
          <span className="code-title">Code:</span>
          <pre className="line-numbers">
            <code className={codeClassName}>{htmlFile}</code>
          </pre>
        </div>
        <CopyToClipboard text={htmlFile} onCopy={this.handleCopy}>
          <button
            data-copy-btn
            className="bx--snippet-button code-example__copy-btn"
            onClick={() => this.handleClick()}>
            Copy
            <Copy20 className="code-example__copy-btn--icon bx--snippet__icon" />
            <div className={copyBtnClass} data-feedback="Copied!" />
          </button>
        </CopyToClipboard>
        <div className="code-example__expand-container">
          <button className={expandBtnClass} onClick={this.expandCode}>
            <span>{expandCodeBtnText}</span>
            <ChevronDown16
              alt="expand code"
              className={expandBtnIconClass}
              description="Expand code icon"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default CodeExample;
