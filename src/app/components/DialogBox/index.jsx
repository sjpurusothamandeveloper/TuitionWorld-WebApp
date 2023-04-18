import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";

const DialogBox = ({isModalOpen, closeModal, title, bodyDesc, onAction, actionText, cancelText, children}) => {
    const IconWrapper = styled(`span`)(() => ({
        position: 'absolute',
        top: 20,
        right: 20
      }));
  return (
    <Dialog  fullWidth maxWidth="sm" open={isModalOpen} onClose={closeModal}>
        <DialogTitle>
            {title}
            <IconWrapper onClick={closeModal}>
              <CloseIcon />
            </IconWrapper>
        </DialogTitle>
        <DialogContent>
        {bodyDesc && <DialogContentText>
            {bodyDesc}
        </DialogContentText>}
            {children && children}
        </DialogContent>
        <DialogActions>
          {actionText && <Button onClick={onAction}>{actionText}</Button>}
          {cancelText && <Button onClick={closeModal}>{cancelText}</Button>}
        </DialogActions>
      </Dialog>
  )
}

export default DialogBox