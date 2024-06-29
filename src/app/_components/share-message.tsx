import { Modal } from "antd";
import React from "react";
import {
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

function ShareMessage({
  open,
  setOpen,
  messageToShare,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  messageToShare: string;
}) {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      title="Share Message"
      centered
      footer={null}
    >
      <div className="flex gap-5">
        <WhatsappShareButton url={messageToShare}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <LinkedinShareButton url={messageToShare}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <TwitterShareButton url={messageToShare}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <FacebookShareButton url={messageToShare}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </Modal>
  );
}

export default ShareMessage;
