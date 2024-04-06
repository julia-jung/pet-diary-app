import { useState } from 'react';

import { Button, Menu } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

import PetList from './PetList';

export default function PetsMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePetListAction = (id: number) => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="pets-menu"
        aria-haspopup="true"
        color="inherit"
        startIcon={<SettingsIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        My Pets
      </Button>

      <Menu
        id="pets-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ width: 320 }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <PetList onSelect={handlePetListAction} />
      </Menu>
    </>
  );
}
