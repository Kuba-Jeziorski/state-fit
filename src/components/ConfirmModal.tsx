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
  const handleAcceptFunction = () => {
    confirmAcceptFunction();
  };
  const handleDeclineFunction = () => {
    confirmDeclineFunction();
  };

  return (
    <div className="confirmModalOverlay">
      <div className="confirmModalBox">
        <div className="confirmModalContent">
          <p className="confirmModalDescription">{confirmMessage}</p>
          <div className="confirmModalButtons">
            
            <button
              className="confirmModalButton declined"
              onClick={handleDeclineFunction}
            >
              Decline
            </button>
            <button
              className="confirmModalButton accepted"
              onClick={handleAcceptFunction}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
