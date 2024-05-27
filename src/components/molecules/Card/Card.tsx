import { Button, CardActions, CardContent, Card as MUICard, Typography } from '@mui/material';

import type { Note } from '@/types';

export function Card({ note, onRemove, onShow }: { note: Note; onRemove: (id: number) => void; onShow: (note: Note) => void }) {
    return (
        <MUICard key={note.id} sx={{ display: 'flex', flexDirection: 'column', maxWidth: 345, margin: 2, height: 400 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" noWrap>
                    {note.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" height={280} overflow="scroll">
                    {note.body}
                </Typography>
            </CardContent>
            <div style={{ flex: 1 }} />
            <CardActions>
                <Button size="small" onClick={() => onShow(note)}>Ver</Button>
                <Button size="small" onClick={() => onRemove(note.id)}>Apagar</Button>
            </CardActions>
        </MUICard>
    );
}