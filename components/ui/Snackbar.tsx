import React from 'react';

interface IProps {
  title: string;
  message: string;
  duration?: number;
}

export const Notify = ({ title, message, duration = 5000 }: IProps) => {
  let snackbarContainer = document.getElementById('snackbar-container');
  let snackbarContent = document.createElement('div');
  let snackbarContentTitle = document.createElement('div');
  let snackbarContentTitleH1 = document.createElement('h1');
  let snackbarContentTitleCloseButton = document.createElement('div');
  let snackbarContentMessage = document.createElement('p');

  snackbarContent.classList.add('snackbar-content');
  snackbarContentTitle.classList.add('title');
  snackbarContentTitleH1.innerHTML = title;
  snackbarContentTitle.appendChild(snackbarContentTitleH1);
  snackbarContentTitleCloseButton.classList.add('close-button');
  snackbarContentTitleCloseButton.innerHTML = '&times;';

  snackbarContentTitleCloseButton.addEventListener('click', () => {
    snackbarContent.remove();
  });

  snackbarContentTitle.appendChild(snackbarContentTitleCloseButton);
  snackbarContent.appendChild(snackbarContentTitle);
  snackbarContentMessage.classList.add('message');
  snackbarContentMessage.innerHTML = message;
  snackbarContent.appendChild(snackbarContentMessage);
  snackbarContainer?.appendChild(snackbarContent);

  setTimeout(() => {
    snackbarContainer?.firstChild?.remove();
  }, duration);
};

const Snackbar: React.FC<any> = () => {
  return (
    <>
      <div id='snackbar-container' className='snackbar'></div>
    </>
  );
};

export default Snackbar;
