import { NoteModal } from '@/components/organisms/modals';
import { Note } from '@/types';
import { createContext, useState } from 'react';

import type { ReactNode } from 'react';

export const ModalContext = createContext({ show: (args: any) => {}, hide: () => {} });

export function ModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [note, setNote] = useState<Note>({} as Note);

  return (
    <ModalContext.Provider value={{
      show: (data: Note) => {
        setVisible(true);
        setNote(data);
      },
      hide: () => setVisible(false),
    }}>
      <NoteModal open={visible} note={note} />
      {children}
    </ModalContext.Provider>
  );
}
