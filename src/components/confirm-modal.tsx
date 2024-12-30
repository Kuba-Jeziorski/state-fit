import {
  MODAL_ACCEPT_CAPTION,
  MODAL_DECLINE_CAPTION,
} from "../constants/constants";
import { Button } from "./the-button";

type ConfirmModal = {
  confirmMessage: string;
  confirmAcceptFunction: () => void;
  confirmDeclineFunction: () => void;
};

export const ConfirmModal = ({
  confirmMessage,
  confirmAcceptFunction,
  confirmDeclineFunction,
}: ConfirmModal) => {
  const handleBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="confirmModalOverlay" onClick={confirmDeclineFunction}>
      <div className="confirmModalBox" onClick={handleBoxClick}>
        <div className="confirmModalContent">
          <p className="confirmModalDescription">{confirmMessage}</p>
          <div className="confirmModalButtons">
            <Button
              caption={MODAL_DECLINE_CAPTION}
              handleFunction={confirmDeclineFunction}
              classes="button secondary"
            />
            <Button
              caption={MODAL_ACCEPT_CAPTION}
              handleFunction={confirmAcceptFunction}
              classes="button primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
