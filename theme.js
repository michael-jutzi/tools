(function () {
  function getCookie(name) {
    return document.cookie.split('; ').reduce((val, part) => {
      const [k, v] = part.split('=');
      return k === name ? decodeURIComponent(v) : val;
    }, null);
  }

  const theme = getCookie('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();
