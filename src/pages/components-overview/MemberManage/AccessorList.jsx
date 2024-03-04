import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import MemberPopup from './MemberPopup';

const AccessorList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h2>AccessorList</h2>
      </div>
    </>
  );
};

export default AccessorList;
