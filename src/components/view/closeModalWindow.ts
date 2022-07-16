
import { modalWindow, searchField } from '../../index'

export default function closeModal() {
    modalWindow.style.display = 'none';
    document.body.style.overflow = 'auto';
    searchField.value = '';
}