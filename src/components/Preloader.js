import React from 'react';
import { ReactComponent as LogoPink } from '../assets/pink-loader.svg';
import { ReactComponent as LogoBlue } from '../assets/blue-loader.svg';

export const Preloader = ({ isBoy }) => {
  return (
    <div>
      {isBoy ? (
        <LogoBlue
          style={{
            backgroundColor: '#272727',
            height: '30px',
            width: '30px',
            color: '#fff',
          }}
        />
      ) : (
        <LogoPink
          style={{
            backgroundColor: '#272727',
            height: '30px',
            width: '30px',
            color: '#fff',
          }}
        />
      )}
    </div>
  );
};
