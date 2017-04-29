/*
 * @file component InputItem
 */

import './style.scss';

import React, { PropTypes } from 'react';

const propTypes = {
  onFocus: PropTypes.func.isRequired,
};

function InputItem({ onFocus }) {
  return (
    <a href="#" onFocus={onFocus} className="list-group-item create-bar-component">
      + 创建新的文章
    </a>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
