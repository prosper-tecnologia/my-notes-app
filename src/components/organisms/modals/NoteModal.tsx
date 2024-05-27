import { ModalContext } from "@/contexts/ModalContext";
import { Note } from "@/types";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useContext } from "react";

export function NoteModal({ open, note }: { open: boolean; note: Note }) {
    const context = useContext(ModalContext);

    return (
        <Modal
            open={open}
            onClose={context.hide}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {note.title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {note.body}
                </Typography>
                <Box display="flex" justifyContent="flex-end" marginTop="20px">
                    <Button onClick={(context.hide)}>Fechar</Button>
                </Box>
            </Box>
        </Modal>
    );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxWidth: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
