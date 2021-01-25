const refs = {
    checkbox: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body'),
  };
  
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  checkTheme();
  
  refs.checkbox.addEventListener('change', toggleClass);
  
  function checkTheme() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === Theme.DARK) {
      refs.checkbox.checked = true;
      refs.body.classList.add(`${Theme.DARK}`);
      return;
    }
    refs.body.classList.add(`${Theme.LIGHT}`);
  }
  
  function toggleClass(e) {
    const checkbox = e.currentTarget;
    refs.body.classList.toggle(`${Theme.DARK}`);
    refs.body.classList.toggle(`${Theme.LIGHT}`);
    if (checkbox.checked) {
      localStorage.setItem('theme', Theme.DARK);
      return;
    }
    localStorage.setItem('theme', Theme.LIGHT);
  }