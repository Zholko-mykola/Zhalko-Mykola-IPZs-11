(() => {
    const refs = {
        menu:document.querySelector('[open-menu]'),
        opened: document.querySelector('[menu]')
    };
    function openMenu(){
      refs.opened.classList.toggle("menu_android_active")
      refs.menu.classList.toggle("burger_opened")
      document.body.classList.toggle("lock")
    }
    refs.menu.addEventListener("click", openMenu);
  })();