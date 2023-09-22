// @flow
import * as React from 'react';

type Props = {

};
export const Footer = (props: Props) => {
  return (
    <footer className="text-center px-4 py-4 text-gray-500 border-t border-black/10">
      <small className="text-xs">&copy; {new Date().getFullYear()}</small>
    </footer>
  );
};