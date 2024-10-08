import React from 'react'
import PropTypes from 'prop-types'

import './index.scss'
import Label, { LabelColors, LabelTypography } from '../Label'

export default function AdminMessage({ className, message }) {
  if (
    !(message.isAdminMessage || message.messageType) ||
    !message.isAdminMessage() ||
    message.messageType !== 'admin'
  ) {
    return null
  }
  if (
    !message.message.includes('Thank you') &&
    !message.message.includes('Congratulations')
  ) {
    return null
  }
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        'sendbird-admin-message pf-admin',
      ].join(' ')}
    >
      <Label
        className='sendbird-admin-message__text pf-admin'
        type={LabelTypography.CAPTION_2}
        color={LabelColors.ONBACKGROUND_2}
      >
        {message.message}
      </Label>
    </div>
  )
}

AdminMessage.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    messageType: PropTypes.string,
    isAdminMessage: PropTypes.func,
  }),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
}

AdminMessage.defaultProps = {
  message: {},
  className: '',
}
