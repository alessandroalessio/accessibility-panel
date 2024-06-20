class _AccessibiltyPanel {
	constructor() {
		console.log('Accessibility Panel Loaded');

		let _acs_body = document.querySelector('body');

		// Add stylesheet
		let _acs_style = document.createElement('link');
		_acs_style.setAttribute('rel', 'stylesheet');
		_acs_style.setAttribute('href', 'accesibility.css');
		_acs_body.appendChild(_acs_style);

		// Create the icon
		let _acs_icon = this._acs_toggler();
		_acs_body.appendChild(_acs_icon);

		// Create the panel
		let _acs_panel = this._acs_panel();
		_acs_body.appendChild(_acs_panel);
	}

	_acs_toggler() {
		let _acs_icon = document.createElement('div');
		_acs_icon.setAttribute('id', 'accesibility-icon');
		_acs_icon.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" width="38px" height="38px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m8 7h-5v12c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V9H4c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1"/></svg>';
		_acs_icon.addEventListener('click', this._acs_open);
		_acs_icon.classList.add('acs-toggler');

		return _acs_icon;
	}

	_acs_panel() {
		let _acs_panel = document.createElement('div');
		_acs_panel.setAttribute('id', 'accesibility-panel');
		_acs_panel.classList.add('acs-panel');

		// Add Left box
		let _acs_left = document.createElement('div');
		_acs_left.classList.add('acs-left');

		// Add close button
		let _acs_close = this._acs_close_button();
		_acs_left.appendChild(_acs_close);

		// Append left box to panel
		_acs_panel.appendChild(_acs_left);

		// Add Center box
		let _acs_center = document.createElement('div');
		_acs_center.classList.add('acs-center');

		// Add contrast button
		let _acs_contrast = this._acs_contrast_button();
		_acs_center.appendChild(_acs_contrast);

		// Add wrapper for font size buttons
		let _acs_font_size_wrapper = document.createElement('div');
		_acs_font_size_wrapper.classList.add('acs-font-size-wrapper');

		// Create Label for font size wrapper
		let _acs_font_size_label = document.createElement('label');
		_acs_font_size_label.innerHTML = 'Dimensione caratteri';
		_acs_font_size_label.classList.add('acs-label');
		_acs_font_size_wrapper.appendChild(_acs_font_size_label);

		// Add font size buttons
		let _acs_font_size = this._acs_font_size_buttons();
		_acs_font_size_wrapper.appendChild(_acs_font_size);

		_acs_center.appendChild(_acs_font_size_wrapper);

		// Add line height buttons
		let _acs_line_height = this._acs_line_height_buttons();
		_acs_center.appendChild(_acs_line_height);

		// Add stop transition button
		let _acs_stop_transition = this._acs_stop_transition_button();
		_acs_center.appendChild(_acs_stop_transition);

		// Add enlarge mouse cursor button
		let _acs_enlarge_cursor = this._acs_enlarge_cursor_button();
		_acs_center.appendChild(_acs_enlarge_cursor);

		// Add text to speech button
		let _acs_text_to_speech = this._acs_text_to_speech_button();
		_acs_center.appendChild(_acs_text_to_speech);

		// Append center box to panel
		_acs_panel.appendChild(_acs_center);

		// Add Right box
		let _acs_right = document.createElement('div');
		_acs_right.classList.add('acs-right');

		// Append right box to panel
		_acs_panel.appendChild(_acs_right);

		return _acs_panel;
	}

	_acs_font_size_buttons() {
		let _acs_font_size = document.createElement('div');
		_acs_font_size.classList.add('acs-button-font-size-wrapper');

		let _acs_font_size_decrease = document.createElement('button');
		_acs_font_size_decrease.innerHTML = 'A-';
		_acs_font_size_decrease.classList.add('acs-button');

		_acs_font_size_decrease.addEventListener(
			'click',
			this._acs_decrease_font_size
		);

		let _acs_font_size_increase = document.createElement('button');
		_acs_font_size_increase.innerHTML = 'A+';
		_acs_font_size_increase.classList.add('acs-button');

		_acs_font_size_increase.addEventListener(
			'click',
			this._acs_increase_font_size
		);

		_acs_font_size.appendChild(_acs_font_size_decrease);
		_acs_font_size.appendChild(_acs_font_size_increase);

		return _acs_font_size;
	}

	_acs_increase_font_size() {
		let _acs_body = document.querySelector('body');
		let _acs_current_font_size = window.getComputedStyle(_acs_body).fontSize;
		let _acs_current_font_size_number = parseFloat(_acs_current_font_size);
		let _acs_new_font_size = _acs_current_font_size_number + 1;
		_acs_body.style.fontSize = _acs_new_font_size + 'px';
	}

	_acs_decrease_font_size() {
		let _acs_body = document.querySelector('body');
		let _acs_current_font_size = window.getComputedStyle(_acs_body).fontSize;
		let _acs_current_font_size_number = parseFloat(_acs_current_font_size);
		let _acs_new_font_size = _acs_current_font_size_number - 1;
		_acs_body.style.fontSize = _acs_new_font_size + 'px';
	}

	_acs_line_height_buttons() {
		let _acs_line_height = document.createElement('button');
		_acs_line_height.setAttribute('id', 'line-height-button');
		_acs_line_height.innerHTML = 'Spazio caratteri On';
		_acs_line_height.classList.add('acs-button');

		_acs_line_height.addEventListener('click', this._acs_toggle_line_height);

		return _acs_line_height;
	}

	_acs_toggle_line_height() {
		let _acs_body = document.querySelector('body');
		_acs_body.classList.toggle('acs-line-height');

		let _acs_line_height = document.getElementById('line-height-button');
		if (_acs_line_height.innerHTML === 'Spazio caratteri On') {
			_acs_line_height.innerHTML = 'Spazio caratteri Off';
		} else {
			_acs_line_height.innerHTML = 'Spazio caratteri On';
		}
	}

	_acs_contrast_button() {
		let _acs_contrast = document.createElement('button');
		_acs_contrast.setAttribute('id', 'contrast-button');
		_acs_contrast.innerHTML = 'Contrasto On';
		_acs_contrast.classList.add('acs-button');
		_acs_contrast.addEventListener('click', this._acs_toggle_contrast);

		return _acs_contrast;
	}

	_acs_stop_transition_button() {
		let _acs_stop_transition = document.createElement('button');
		_acs_stop_transition.setAttribute('id', 'stop-transition-button');
		_acs_stop_transition.innerHTML = 'Stop Animazioni';
		_acs_stop_transition.classList.add('acs-button');

		_acs_stop_transition.addEventListener(
			'click',
			this._acs_toggle_stop_transition
		);

		return _acs_stop_transition;
	}

	_acs_toggle_stop_transition() {
		let _acs_body = document.querySelector('body');
		_acs_body.classList.toggle('acs-stop-animation');

		let _acs_stop_transition = document.getElementById(
			'stop-transition-button'
		);
		if (_acs_stop_transition.innerHTML === 'Stop Animazioni') {
			_acs_stop_transition.innerHTML = 'Riattiva Animazioni';
		} else {
			_acs_stop_transition.innerHTML = 'Stop Animazioni';
		}
	}

	_acs_enlarge_cursor_button() {
		let _acs_enlarge_cursor = document.createElement('button');
		_acs_enlarge_cursor.setAttribute('id', 'enlarge-cursor-button');
		_acs_enlarge_cursor.innerHTML = 'Cursore Ingrandito';
		_acs_enlarge_cursor.classList.add('acs-button');

		_acs_enlarge_cursor.addEventListener(
			'click',
			this._acs_toggle_enlarge_cursor
		);

		return _acs_enlarge_cursor;
	}

	_acs_toggle_enlarge_cursor() {
		let _acs_body = document.querySelector('body');
		_acs_body.classList.toggle('acs-enlarge-cursor');

		let _acs_enlarge_cursor = document.getElementById(
			'enlarge-cursor-button'
		);

		if (_acs_enlarge_cursor.innerHTML === 'Cursore Ingrandito') {
			_acs_enlarge_cursor.innerHTML = 'Cursore Normale';
		} else {
			_acs_enlarge_cursor.innerHTML = 'Cursore Ingrandito';
		}
	}

	_acs_close_button() {
		let _acs_close = document.createElement('button');
		_acs_close.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10M7 17L17 7"/></svg>';
		_acs_close.classList.add('acs-close');
		_acs_close.addEventListener('click', this._acs_close);

		return _acs_close;
	}

	_acs_text_to_speech_button() {
		let _acs_text_to_speech = document.createElement('button');
		_acs_text_to_speech.setAttribute('id', 'text-to-speech-button');
		_acs_text_to_speech.innerHTML = 'Leggi Pagina';
		_acs_text_to_speech.classList.add('acs-button');

		_acs_text_to_speech.addEventListener(
			'click',
			this._acs_toggle_text_to_speech
		);

		return _acs_text_to_speech;
	}

	_acs_open() {
		let _acs_panel = document.getElementById('accesibility-panel');
		_acs_panel.style.display = 'flex';
	}

	_acs_close() {
		let _acs_panel = document.getElementById('accesibility-panel');
		_acs_panel.style.display = 'none';
	}

	_acs_toggle_contrast() {
		let _acs_body = document.querySelector('body');
		_acs_body.classList.toggle('acs-contrast');

		let _acs_contrast = document.getElementById('contrast-button');
		_acs_contrast.classList.toggle('active');

		if (_acs_contrast.innerHTML === 'Contrasto On') {
			_acs_contrast.innerHTML = 'Contrasto Off';
		} else {
			_acs_contrast.innerHTML = 'Contrasto On';
		}
	}

	_acs_toggle_text_to_speech() {
		let _acs_text_nodes = document.createTreeWalker(
			document.body,
			NodeFilter.SHOW_TEXT,
			null,
			false
		);
		let _acs_text_array = [];
		while (_acs_text_nodes.nextNode()) {
			_acs_text_array.push(_acs_text_nodes.currentNode.nodeValue);
		}

		// create audio reading
		let _acs_audio = new SpeechSynthesisUtterance();
		_acs_audio.text = _acs_text_array.join(' ');

		let _acs_text_to_speech = document.getElementById(
			'text-to-speech-button'
		);
		if (_acs_text_to_speech.innerHTML === 'Leggi Pagina') {
			_acs_text_to_speech.innerHTML = 'Ferma Lettura';
			window.speechSynthesis.speak(_acs_audio);
		} else {
			_acs_text_to_speech.innerHTML = 'Leggi Pagina';
			window.speechSynthesis.cancel();
		}
	}
}

// Invoke the class
let _accessibility = new _AccessibiltyPanel();
