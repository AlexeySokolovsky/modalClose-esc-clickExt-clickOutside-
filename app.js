const btn = document.getElementById('myBtn');
const modal = document.getElementById('myModal');
btn.addEventListener('click', openModal);
function openModal() {
	modal.classList.add('open');
	attachModalEvents();
}
function attachModalEvents() {
	modal.querySelector('.close').addEventListener('click', closeModal);
	document.addEventListener('keydown', handleEscape);
	modal.addEventListener('click', handleOutside);
}

function handleOutside(event) {
	if (event.target === modal) {
		closeModal();
	}
}
function handleEscape(event) {
	const clickOutside = !!event.target.closest('.modal-content');
	if (!clickOutside) {
		closeModal();
	}
}
function closeModal() {
	modal.classList.remove('open');
	detachModalEvents();
}
function detachModalEvents() {
	modal.querySelector('.close').removeEventListener('click', closeModal);
	document.removeEventListener('keydown', handleEscape);
	modal.removeEventListener('click', handleOutside);
}