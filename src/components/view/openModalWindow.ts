import { modalWindow, buttonModalClose } from '../../index';

// ------------------ Модальное окно ------------------ //

 export default function openModal() {
    modalWindow.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    (modalWindow.childNodes[1].childNodes[1] as HTMLElement).innerText = 'Извините, все слоты заполнены';
    buttonModalClose.focus();
}
