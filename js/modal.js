(() => {
  const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    //   menu:document.querySelector('[open-menu]'),
    //   opened: document.querySelector('[menu]')
  };

  // Function to disable scrolling with !important to ensure it takes precedence
  function disableScroll() {
      document.body.style.setProperty('overflow', 'hidden', 'important');
  }

  // Function to enable scrolling
  function enableScroll() {
      document.body.style.removeProperty('overflow');
  }

  // Function to handle opening the modal
  function openModal() {
      refs.modal.classList.remove("is-hidden");
      disableScroll();
  }
//   function openMenu(){
//     refs.opened.classList.toggle("menu_android_active")
//     refs.menu.classList.toggle("burger_opened")
//     document.body.classList.toggle("lock")
//   }

  // Function to handle closing the modal
  function closeModal() {
      refs.modal.classList.add("is-hidden");
      enableScroll();
  }

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
//   refs.menu.addEventListener("click", openMenu);
})();