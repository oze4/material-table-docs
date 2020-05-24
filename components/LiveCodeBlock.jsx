/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import classnames from 'classnames';
import usePrismTheme from './usePrismTheme.js';

import * as styles from './styles.module.css';

function LiveCodeBlock({children, /* theme, */ transformCode, ...props}) {
  const theme = usePrismTheme();

  return (
      <LiveProvider
        code={children.replace(/\n$/, '')}
        transformCode={transformCode || ((code) => `${code};`)}
        theme={theme}
        {...props}>
        <div
          className={classnames(
            styles.playgroundHeader,
            styles.playgroundEditorHeader,
          )}>
          Live Editor
        </div>
        <LiveEditor />
        <div
          className={classnames(
            styles.playgroundHeader,
            styles.playgroundPreviewHeader,
          )}>
          Result
        </div>
        <div className={styles.playgroundPreview}>
          <LivePreview />
          <LiveError />
        </div>
      </LiveProvider>
  );
}

export default LiveCodeBlock;
