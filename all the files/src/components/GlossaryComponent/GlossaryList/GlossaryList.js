/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-it';

const md = new Markdown({
  html: true,
});

class Glossary extends Component {
  renderGlossaryEntry = (glossary, glossaryEntry) => {
    const entry = glossary[glossaryEntry];
    let counter = 0;
    return (
      <div id={glossaryEntry} key={glossaryEntry} className="glossary-entry">
        <h2 className="glossary-entry__main-heading bx--type-display-02">
          {glossaryEntry}
          <span>{glossaryEntry}</span>
        </h2>
        {Object.keys(entry).map((list, i) => {
          const listItems = Object.keys(entry[list]).map((word) => {
            counter += 1;
            const currentWord = entry[list][word];
            let wordId = word.toLowerCase().replace(' ', '-');
            const desc = currentWord.desc
              ? md.renderInline(currentWord.desc)
              : '';
            const subtext = currentWord.subtext
              ? md.renderInline(currentWord.subtext)
              : '';
            if (wordId === 'docs') {
              wordId = `${wordId}${counter}`;
            }
            return (
              <div id={wordId} key={word} className="glossary-entry__word">
                <h4 className="page-h4 glossary-entry__word-heading">{word}</h4>
                <p
                  className="glossary-entry__desc page-p"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
                <p
                  className="glossary-entry__subtext page-p"
                  dangerouslySetInnerHTML={{ __html: subtext }}
                />
              </div>
            );
          });
          return (
            <div key={i} className="glossary-entry__list">
              {listItems}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { glossary } = this.props;

    const navItems = Object.keys(glossary).map((glossaryEntry) => {
      if (!(glossaryEntry === '__content')) {
        return this.renderGlossaryEntry(glossary, glossaryEntry);
      }
      return '';
    });

    return <div className="glossary">{navItems}</div>;
  }
}

Glossary.propTypes = {
  glossary: PropTypes.object,
};

export default Glossary;
