import React from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

interface Props {
  onClick: () => void;
  disabled?: boolean;
}

export const EditButton: React.FC<Props> = ({ onClick, disabled }) => (
  <IconButton onClick={onClick} disabled={disabled}>
    <Edit />
  </IconButton>
);