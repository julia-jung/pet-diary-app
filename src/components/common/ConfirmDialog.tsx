import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  content?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
}

export default function ConfirmDialog({ open, title, content, onConfirm, onCancel }: ConfirmDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      {content && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button color="error" onClick={onCancel}>
          취소
        </Button>
        <Button onClick={onConfirm} autoFocus>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}
