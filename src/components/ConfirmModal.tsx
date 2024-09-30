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
            <button
              className="button secondary"
              onClick={confirmDeclineFunction}
            >
              Decline
            </button>
            <button className="button primary" onClick={confirmAcceptFunction}>
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
