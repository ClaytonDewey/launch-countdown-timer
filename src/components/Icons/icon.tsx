import React from 'react';
import IconFacebook from './facebook';
import IconInstagram from './instagram';
import IconPinterest from './pinterest';

type iconProps = {
  name: string;
};

const icon: React.FC<iconProps> = ({ name }) => {
  switch (name) {
    case 'facebook':
      return <IconFacebook />;
    case 'instagram':
      return <IconInstagram />;
    case 'pinterest':
      return <IconPinterest />;
    default:
      return <IconFacebook />;
  }
};
export default icon;
