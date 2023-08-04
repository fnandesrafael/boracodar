import React from 'react';
import { RejectionCard } from './index';
import { RejectionProps } from '../../context/FilesContext';

type RejectionCardProps = {
  props: {
    data: RejectionProps;
  };
};

export default function Composition({ props: { data } }: RejectionCardProps) {
  return (
    <RejectionCard.Root>
      <RejectionCard.Icon />
      <RejectionCard.Log
        props={{ error: data.errors[0], file: data.file.name }}
      />
    </RejectionCard.Root>
  );
}
