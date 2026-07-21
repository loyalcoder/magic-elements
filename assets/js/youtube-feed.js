/**
 * Magic YouTube Feed – lightbox and inline playback.
 */
(function () {
	'use strict';

	function buildEmbedSrc(videoId) {
		return 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(videoId) + '?autoplay=1&rel=0';
	}

	function openLightbox(videoId) {
		var overlay = document.createElement('div');
		overlay.className = 'myf-lightbox';
		overlay.setAttribute('role', 'dialog');
		overlay.setAttribute('aria-modal', 'true');

		var inner = document.createElement('div');
		inner.className = 'myf-lightbox__inner';

		var close = document.createElement('button');
		close.className = 'myf-lightbox__close';
		close.setAttribute('aria-label', 'Close');
		close.innerHTML = '&times;';

		var iframe = document.createElement('iframe');
		iframe.src = buildEmbedSrc(videoId);
		iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
		iframe.allowFullscreen = true;

		inner.appendChild(close);
		inner.appendChild(iframe);
		overlay.appendChild(inner);
		document.body.appendChild(overlay);
		document.body.style.overflow = 'hidden';

		function destroy() {
			overlay.remove();
			document.body.style.overflow = '';
			document.removeEventListener('keydown', onKeydown);
		}

		function onKeydown(e) {
			if (e.key === 'Escape') {
				destroy();
			}
		}

		close.addEventListener('click', destroy);
		overlay.addEventListener('click', function (e) {
			if (e.target === overlay) {
				destroy();
			}
		});
		document.addEventListener('keydown', onKeydown);
	}

	function playInline(thumb, videoId) {
		var iframe = document.createElement('iframe');
		iframe.src = buildEmbedSrc(videoId);
		iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
		iframe.allowFullscreen = true;

		thumb.innerHTML = '';
		thumb.appendChild(iframe);
		thumb.classList.add('myf-card__thumb--playing');
	}

	document.addEventListener('click', function (e) {
		var thumb = e.target.closest('[data-myf-video-id]');

		if (!thumb) {
			return;
		}

		var action = thumb.getAttribute('data-myf-action');

		if (action !== 'lightbox' && action !== 'inline') {
			return;
		}

		e.preventDefault();

		var videoId = thumb.getAttribute('data-myf-video-id');

		if (action === 'lightbox') {
			openLightbox(videoId);
		} else if (!thumb.classList.contains('myf-card__thumb--playing')) {
			playInline(thumb, videoId);
		}
	});
})();
