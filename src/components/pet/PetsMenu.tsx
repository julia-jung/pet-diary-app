import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, MenuItem, Menu } from '@mui/material';
import { Settings as SettingsIcon } from '@mui/icons-material';

import PetList from './PetList';

import { useAppDispatch, useFetch } from '@/hooks';

export default function PetsMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const { data: pets, error, isFetching } = useFetch('/api/pets');

  // TODO: save pets in pet slice

  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    setAnchorEl(null);
    navigate(`/pet-info/${id}`);
  };

  // const menuContent = () => {
  //   if (isFetching) {
  //     return <MenuItem disabled>펫 정보 불러오는 중...</MenuItem>;
  //   } else {
  //     if (error) {
  //       return <MenuItem disabled>펫 정보를 불러오지 못했습니다..!</MenuItem>;
  //     } else if (!pets?.length) {
  //       return <MenuItem disabled>등록된 펫이 없습니다.</MenuItem>;
  //     } else {
  //       return <PetList onSelect={handleSelect} />;
  //     }
  //   }
  // };

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
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {/* {menuContent()} */}
        <PetList onSelect={handleSelect} />
      </Menu>
    </>
  );
}
