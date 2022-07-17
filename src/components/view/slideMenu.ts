import { brandBlock, displayBlock, ramBlock, storageBlock, colorBlock } from '../../index';


// ------------------ Слайд-меню ------------------ //


function openBrand() {
    (brandBlock as HTMLElement).classList.toggle('brand-block-open');
}
function openDisplay() {
    (displayBlock as HTMLElement).classList.toggle('display-block-open');
}
function openRam() {
    (ramBlock as HTMLElement).classList.toggle('ram-block-open');
}
function openStorage() {
    (storageBlock as HTMLElement).classList.toggle('storage-block-open');
}
function openColor() {
    (colorBlock as HTMLElement).classList.toggle('color-block-open');
}

export { openBrand, openDisplay, openRam, openStorage, openColor };