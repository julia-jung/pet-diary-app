import { useNavigate } from 'react-router-dom';

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  IconButton,
  ListItemSecondaryAction,
} from '@mui/material';
import { BorderColor as BorderColorIcon, CheckCircleOutlined as CheckCircleOutlinedIcon } from '@mui/icons-material';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { changePet } from '@/store';
import { Pet } from '@/types';
import { petTypeLabel } from '@/utils';
interface PetListItemProps {
  pet: Pet;
  onSelect: () => void;
}

export default function PetListItem({ pet, onSelect }: PetListItemProps) {
  const selectedId = useAppSelector((state) => state.pets.selectedId);
  const navigate = useNavigate();

  const isSelectedPet = selectedId === pet.id;

  const dispatch = useAppDispatch();

  const handleClickEdit = () => {
    navigate(`/pet-info/${pet.id}`);
    onSelect();
  };

  const handleClickSelect = () => {
    dispatch(changePet(pet.id));
    onSelect();
    navigate(`/`);
  };

  return (
    <ListItem sx={{ width: 320, pt: 2 }}>
      <ListItemAvatar sx={{ mr: 1 }}>
        <Avatar src={`/assets/images/${pet.image ?? pet.type + '.jpg'}`} alt="petTypeAvatar" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="subtitle2">
            {pet.name}
            <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
              &nbsp; {pet.breed ?? ''} {petTypeLabel(pet.type)}
            </Typography>
          </Typography>
        }
        // TODO: add last updated at in pet info page
        // secondary={
        //   <Typography
        //     variant="caption"
        //     sx={{
        //       mt: 0.5,
        //       display: 'flex',
        //       alignItems: 'center',
        //       color: 'text.disabled',
        //     }}
        //   >
        //     <AccessTimeIcon sx={{ fontSize: 13, mr: 0.5 }} />
        //     Last updated at: {dayjs(pet.updatedAt).format('YYYY-MM-DD')}
        //   </Typography>
        // }
      />
      <ListItemSecondaryAction>
        <IconButton size="small" aria-label="navigate to pet info page" onClick={handleClickEdit}>
          <BorderColorIcon />
        </IconButton>
        <IconButton
          size="small"
          color={isSelectedPet ? 'primary' : 'default'}
          aria-label="select the pet"
          onClick={handleClickSelect}
        >
          <CheckCircleOutlinedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
