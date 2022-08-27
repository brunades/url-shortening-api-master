const copyToClipboard = (btn) => {
  navigator.clipboard.writeText(btn.previousElementSibling.innerHTML);
}

const setCopied = (btn) => {
  const copiedBtn = document.querySelector('.btn--violet');
  if (copiedBtn) {
    copiedBtn.className = 'btn';
    copiedBtn.innerHTML = 'Copy';
  }
  btn.classList.add('btn--violet');
  btn.innerHTML = 'Copied!';
}

export const handleLinkCopy = () => {
  const copyBtns =  document.querySelectorAll('.single-link .btn');
  for (const btn of copyBtns) { btn.addEventListener('click', function(){
    copyToClipboard(btn);
    setCopied(btn);
  })};
}