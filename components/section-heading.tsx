// @flow
import * as React from 'react';

type Props = {
  text: string
};
export const SectionHeading = ({text}: Props) => (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center text-skin-base">
      {text}
    </h2>
);