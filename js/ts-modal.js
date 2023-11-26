(() => {
    const refs = {
      openModalBtn: document.querySelector('[ts-data-modal-open]'),
      closeModalBtn: document.querySelector('[ts-data-modal-close]'),
      modal: document.querySelector('[ts-data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  