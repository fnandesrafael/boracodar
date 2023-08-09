import React from 'react';
import Avatar from '../../../assets/images/pope_francis.png';

import * as S from '../styles';

export default function ContactAvatar() {
  return <S.AvatarElement src={Avatar} alt="Contact Profile Picture" />;
}
