import { useEffect } from 'react';

import { ButtonBase, ButtonGroup, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Delete as DeleteIcon, CloudUpload as CloudUploadIcon } from '@mui/icons-material';

import ConfirmDialog from './ConfirmDialog';

import { useAppSelector, useConfirmDialog, useMutate } from '@/hooks';
import { selectPetId } from '@/store/slices';

interface ImageButtonProps {
  url?: string;
  onChange: (image?: string) => void;
}

export default function ImageButton({ url, onChange }: ImageButtonProps) {
  const petId = useAppSelector(selectPetId);
  const { mutateData, data, error, isSaving } = useMutate(`/api/pets/${petId}/image`);
  const { open: openDialog, title, content, startConfirming, finishConfirming } = useConfirmDialog();

  const handleFileUpload = async (e: any) => {
    if (isSaving) return;
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      await mutateData('post', formData);
    }
  };

  const handleClickDelete = () => {
    if (isSaving) return;
    startConfirming('이미지를 삭제하시겠습니까?');
  };

  const handleConfirmDelete = async () => {
    finishConfirming();
    await mutateData('delete');
  };

  const handleCancelDelete = () => {
    finishConfirming();
  };

  useEffect(() => {
    if (data && !error) {
      console.log(data);
      onChange(typeof data === 'string' ? data : undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error]);

  return (
    <ImageButtonBase focusRipple key={url}>
      {url ? (
        <ImageBackground className="MuiImageBackground-root" style={{ backgroundImage: `url(${url})` }} />
      ) : (
        <ImageBackdrop className="MuiImageBackdrop-root" />
      )}
      <ButtonGroup variant="text" color="inherit">
        <Button
          component="label"
          startIcon={<CloudUploadIcon />}
          sx={{
            position: 'relative',
            p: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            color: 'common.white',
            mr: 1,
          }}
        >
          {url ? 'Change' : 'Upload'}
          <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
          <ButtonUnderMark className="MuiImageMarked-root" />
        </Button>
        {url && (
          <Button
            component="label"
            startIcon={<DeleteIcon />}
            onClick={handleClickDelete}
            sx={{
              position: 'relative',
              p: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              color: 'common.white',
            }}
          >
            Delete
            <ButtonUnderMark className="MuiImageMarked-root" />
          </Button>
        )}
      </ButtonGroup>
      <ConfirmDialog
        open={openDialog}
        title={title}
        content={content}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </ImageButtonBase>
  );
}

const ImageButtonBase = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    height: '250px !important', // Overrides inline-style
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackground-root': {
      opacity: 0.7,
    },
    '& .MuiImageBackdrop-root': {
      opacity: 0.4,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiButtonGroup-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageBackground = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  transition: theme.transitions.create('opacity'),
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.3,
  transition: theme.transitions.create('opacity'),
}));

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ButtonUnderMark = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
