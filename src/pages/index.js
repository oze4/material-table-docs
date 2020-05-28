import React, { useState } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import usePrismTheme from '@theme/hooks/usePrismTheme';

import ReactMarkdown from 'react-markdown';

import MaterialTable from 'material-table';

import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

import { Grid, makeStyles } from '@material-ui/core';

import styles from './styles.module.css';


const useStyles = makeStyles(theme => ({
  codeContainer: {
    textAlign: 'left',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '30%'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20%'
    },    
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '30%'
    },
  }
}));

function Highlighter({ code, language, ...rest }) {
  return (
    <Highlight {...defaultProps} code={code} language={language} {...rest}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

const code_ = `// Prerequisites
yarn add @material-ui/core @material-ui/icons
npm install @material-ui/core @material-ui/icons
                
// Main Package
yarn add material-table
npm install material-table`

function Home() {
  const [featuresContainerHeight, setFeaturesContainerHeight] = useState(
    '400px'
  );
  const context = useDocusaurusContext();
  const classes = useStyles();
  const { siteConfig = {} } = context;

  // Hack to get certain background color only on home page
  React.useEffect(() => {
    let html = document.querySelector('html.homepage-background-styles');
    if (!html) {
      html = document.querySelector('html');
      html.classList.add('homepage-background-styles');
    }

    return () => html.classList.remove('homepage-background-styles');
  });

  let _input = `
# This is a header\n\nAnd this is a paragraph
\r\n`;

  _input += "```\r\n";
  _input += 'function A(){\r\n';
  _input += '  console.log("Hi");\r\n';
  _input += '}\r\n';
  _input += '```';

  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="React datatable based on Material-UI"
    >
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              style={{ margin: 5 }}
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/getting-started/about')}
            >
              Docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        <Grid
          container
          direction="row"
          className={classnames(styles.featuresContainer)}
          style={{ height: featuresContainerHeight }}
        >
          <Grid item xs={12} md={6}>
            <Grid container direction="row" className={classes.codeContainer}>
              <Grid item xs={12}>
                <Highlighter code={code_} language="shell" theme={dracula} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <ReactMarkdown source={_input} />
          </Grid>
        </Grid>
      </main>
    </Layout>
  );
}

export default Home;
