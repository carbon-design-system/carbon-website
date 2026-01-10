import React from 'react';
import classnames from 'classnames';
import {
  ContentSwitcher,
  Switch,
  OverflowMenu,
  OverflowMenuItem,
} from '@carbon/react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import StickyContainer from '../TypesetStyle/StickyContainer';
import colorTokens from '../../data/guidelines/color-tokens';
import H3 from 'gatsby-theme-carbon/src/components/markdown/H3';

export default class ColorTokenTable extends React.Component {
  state = {
    theme: 'white',
    sticky: false,
    mobile: false,
    type: 'core',
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      this.setState({
        mobile: true,
      });
    }
    this.setState({ type: this.props.type });
    this.addResizeListener();
    this.addScrollListener();
  }

  switchTheme = (theme) => {
    this.setState({
      theme: theme.name,
    });
  };

  hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  addScrollListener() {
    document.addEventListener('scroll', () => {
      const stickyPoint = this.state.mobile ? 400 : 368;
      if (window.scrollY >= stickyPoint) {
        this.setState({
          sticky: true,
        });
      } else if (window.scrollY < stickyPoint) {
        this.setState({
          sticky: false,
        });
      }
    });
  }

  addResizeListener() {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500) {
        this.setState({
          mobile: true,
        });
      } else if (window.innerWidth > 500) {
        this.setState({
          mobile: false,
        });
      }
    });
  }

  renderValue = (token, tokenInfo) => {
    const currentTheme = this.state.theme;
    const { value } = tokenInfo;
    let bgColor = value[currentTheme].hex;

    // Check for alpha values to use rgba instead
    if (bgColor.includes('@')) {
      const hex = bgColor.split('@')[0].trim();
      const alpha = bgColor.split('@')[1].trim();
      bgColor = `rgba(${this.hexToRgb(hex).r}, ${this.hexToRgb(hex).g}, ${
        this.hexToRgb(hex).b
      }, ${alpha})`;
    }
    return (
      <div className="color-token-value">
        <ul>
          <li>{value[currentTheme].name}</li>
          <li>—</li>
          <li>{value[currentTheme].hex}</li>
        </ul>
        <div>
          <div
            className="color-token-value__block"
            style={{
              backgroundColor: bgColor,
              border:
                value[currentTheme].hex === '#ffffff' && '1px solid #BEBEBE',
            }}
          />
          <OverflowMenu floatingMenu={false} flipped align="top-right">
            <CopyToClipboard text={value[currentTheme].hex}>
              <OverflowMenuItem primaryFocus itemText="Copy hex" />
            </CopyToClipboard>
            <CopyToClipboard text={token}>
              <OverflowMenuItem itemText="Copy token" />
            </CopyToClipboard>
          </OverflowMenu>
        </div>
      </div>
    );
  };

  renderToken = (token, tokenInfo, key) => {
    const roles = tokenInfo.role.map((role, i) => (
      <li key={i}>
        {role}
        {i !== tokenInfo.role.length - 1 && ';'}
      </li>
    ));
    return (
      <tr key={key}>
        <td>
          <code>{token}</code>
        </td>
        <td>
          <ul>{roles}</ul>
        </td>
        <td>{this.renderValue(token, tokenInfo)}</td>
      </tr>
    );
  };

  render() {
    const themeSwitcherClasses = classnames(
      'color-token-table__theme-switcher',
      {
        'color-token-table__theme-switcher--stuck': this.state.sticky,
      }
    );

    return (
      <div className="cds--row color-token-table">
        <StickyContainer navBar banner secondary={false}>
          <ContentSwitcher
            className={themeSwitcherClasses}
            onChange={this.switchTheme}>
            <Switch name="white" text={this.state.mobile ? 'Wte' : 'White'} />
            <Switch name="g10" text={this.state.mobile ? 'G10' : 'Gray 10'} />
            <Switch name="g90" text={this.state.mobile ? 'G90' : 'Gray 90'} />
            <Switch
              name="g100"
              text={this.state.mobile ? 'G100' : 'Gray 100'}
            />
          </ContentSwitcher>
        </StickyContainer>
        <section>
          {this.state.type === 'core' && (
            <>
              <div className="cds--col-lg-7">
                <H3 className="page-H3" id="background">
                  Background
                </H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['background-tokens']).map(
                      (token, i) =>
                        this.renderToken(
                          token,
                          colorTokens['background-tokens'][token],
                          i
                        )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Layer</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['layer-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['layer-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Layer accent</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['layer-accent-tokens']).map(
                      (token, i) =>
                        this.renderToken(
                          token,
                          colorTokens['layer-accent-tokens'][token],
                          i
                        )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Field</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['field-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['field-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Border</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['border-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['border-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Text</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['text-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['text-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Link</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['link-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['link-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Syntax</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['syntax-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['syntax-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Icon</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['icon-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['icon-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Support</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['support-tokens']).map(
                      (token, i) =>
                        this.renderToken(
                          token,
                          colorTokens['support-tokens'][token],
                          i
                        )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Focus</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['focus-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['focus-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Miscellaneous</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['miscellaneous']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['miscellaneous'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {this.state.type === 'component' && (
            <>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Button</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['button-tokens']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['button-tokens'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Content Switcher</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['content-switcher-tokens']).map(
                      (token, i) =>
                        this.renderToken(
                          token,
                          colorTokens['content-switcher-tokens'][token],
                          i
                        )
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Tag</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['tag']).map((token, i) =>
                      this.renderToken(token, colorTokens['tag'][token], i)
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-H3">Notification</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['notification']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['notification'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
          {this.state.type === 'ai' && (
            <>
              <div className="cds--col-lg-7">
                <H3 className="page-h3">General AI</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['ai']).map((token, i) =>
                      this.renderToken(token, colorTokens['ai'][token], i)
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-h3">Chat</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['chat']).map((token, i) =>
                      this.renderToken(token, colorTokens['chat'][token], i)
                    )}
                  </tbody>
                </table>
              </div>
              <div className="cds--col-lg-7">
                <H3 className="page-h3">Chat button</H3>
              </div>
              <div className="cds--col-lg-12 cds--no-gutter">
                <table className="page-table">
                  <thead>
                    <tr>
                      <th>Token</th>
                      <th>Role</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(colorTokens['chat-button']).map((token, i) =>
                      this.renderToken(
                        token,
                        colorTokens['chat-button'][token],
                        i
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </section>
      </div>
    );
  }
}
