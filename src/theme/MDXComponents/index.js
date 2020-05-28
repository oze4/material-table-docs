/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import Heading from '@theme/Heading';

import MaterialTable from "material-table";

import { Chip } from '@material-ui/core';

import { 
  RemoveCircleOutlineOutlined as RemoveCircleIcon,
  AccountCircleOutlined as AccountCircleIcon
} from '@material-ui/icons';

import styles from './styles.module.css';

const SCOPE = {
  MaterialTable,
  Chip,
  RemoveCircleIcon,
  AccountCircleIcon,
}

export default {
  code: (props) => {
    const {children} = props;
    if (typeof children === 'string') {

      //-------------------------------------------------------/
      return <CodeBlock {...props} scope={SCOPE} style={{ fontSize: '1.2rem' }} />;
      /** 
       * REPLACED THE LINE BELOW WITH THE LINE ABOVE 
       */
      //// return <CodeBlock {...props} />;
      //-------------------------------------------------------/

    }
    return children;
  },
  a: (props) => {
    if (/\.[^./]+$/.test(props.href)) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} />;
    }
    return <Link {...props} />;
  },
  pre: (props) => <div className={styles.mdxCodeBlock} {...props} />,
  h1: Heading('h1'),
  h2: Heading('h2'),
  h3: Heading('h3'),
  h4: Heading('h4'),
  h5: Heading('h5'),
  h6: Heading('h6'),
};
