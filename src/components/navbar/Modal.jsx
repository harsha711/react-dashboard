import React from "react";
import "./Modal.css";

export default function Modal({ open, onClose, featuredAvatar }) {
  if (!open) return null;

  return (
    <div className="ModalOverlay" onClick={onClose}>
      <img src={featuredAvatar} className="ModalImage" alt="Avatar" />
    </div>
  );
}
