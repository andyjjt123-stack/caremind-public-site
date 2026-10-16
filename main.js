const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const mobileMenu = document.querySelector('.mobile-nav');
mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});

const publicUrl = 'https://caremind-pro.s.gy/';
const copyButton = document.querySelector('#copy-site-link');
const copyStatus = document.querySelector('#copy-site-status');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(publicUrl);
    copyStatus.textContent = '已複製，歡迎分享給合作夥伴。';
  } catch {
    copyStatus.textContent = '無法自動複製，請選取上方網址。';
  }
});
