import { Button } from "./Button";

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
  return (
    <div className="confirmModalOverlay">
      <div className="confirmModalBox">
        <div className="confirmModalContent">
          <p className="confirmModalDescription">{confirmMessage}</p>
          <div className="confirmModalButtons">
            <Button
              caption="Decline"
              handleFunction={confirmDeclineFunction}
              classes="button secondary"
            />
            <Button
              caption="Accept"
              handleFunction={confirmAcceptFunction}
              classes="button primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
