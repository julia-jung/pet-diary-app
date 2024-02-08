import { useCallback, useState } from 'react';

export function useConfirmDialog() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const startConfirming = useCallback((title?: string, content?: string) => {
    if (title) setTitle(title);
    if (content) setContent(content);
    setOpen(true);
  }, []);

  const finishConfirming = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, title, content, startConfirming, finishConfirming };
}
