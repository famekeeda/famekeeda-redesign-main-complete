// Create the main modal container
const knowMoreModal = document.createElement('div');
knowMoreModal.id = 'knowMoreModal';
knowMoreModal.className = 'modal';

// Create the modal content container
const modalContent = document.createElement('div');
modalContent.id = 'modal-content';
modalContent.className = 'modal-content';

// Create the modal title section
const modalTitle = document.createElement('div');
modalTitle.className = 'modal-title';

const titleHeading = document.createElement('h2');
titleHeading.textContent = 'Meme Marketing';

const closeBtn = document.createElement('span');
closeBtn.className = 'close-btn';

const closeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
closeSvg.setAttribute('width', '16');
closeSvg.setAttribute('height', '16');
closeSvg.setAttribute('viewBox', '0 0 16 16');
closeSvg.setAttribute('fill', 'none');

const closePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
closePath.setAttribute('d', 'M1 1L15 15M1.00003 15L8.00003 8L15 1');
closePath.setAttribute('stroke', 'currentColor');
closePath.setAttribute('stroke-width', '1.5');
closePath.setAttribute('stroke-linecap', 'round');

closeSvg.appendChild(closePath);
closeBtn.appendChild(closeSvg);
modalTitle.appendChild(titleHeading);
modalTitle.appendChild(closeBtn);

// Create the video section
const videoSection = document.createElement('div');
videoSection.className = 'video-section';

const modalVideo = document.createElement('video');
modalVideo.id = 'modalVideo';
modalVideo.className = 'custom-video';

const videoSource = document.createElement('source');
videoSource.setAttribute('src', '');
videoSource.setAttribute('type', 'video/mp4');

const videoFallback = document.createTextNode('Your browser does not support the video tag.');

modalVideo.appendChild(videoSource);
modalVideo.appendChild(videoFallback);

const videoThumbnail = document.createElement('img');
videoThumbnail.id = 'videoThumbnail';
videoThumbnail.src = '';
videoThumbnail.alt = 'Video Thumbnail';
videoThumbnail.className = 'video-thumbnail';

const videoControls = document.createElement('div');
videoControls.className = 'video-controls';

const createButton = (className, text, svgContent) => {
    const button = document.createElement('button');
    button.className = className;

    const buttonText = document.createElement('span');
    buttonText.className = 'button-text';
    buttonText.textContent = text;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 19 20');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', 'currentColor');
    path.setAttribute('fill-rule', 'evenodd');
    path.setAttribute('d', svgContent);
    path.setAttribute('clip-rule', 'evenodd');

    svg.appendChild(path);
    button.appendChild(svg);
    button.appendChild(buttonText);
    return button;
};

const playButton = createButton('play-button', 'Play', 'M12.073 3.207c-1.732-.988-3.077-1.755-4.17-2.253C6.806.454 5.854.173 4.93.27a5.236 5.236 0 0 0-3.68 2.097C.7 3.116.47 4.077.36 5.265.25 6.45.25 7.985.25 9.96v.082c0 1.974 0 3.51.11 4.694.11 1.189.34 2.15.89 2.898a5.236 5.236 0 0 0 3.68 2.096c.925.096 1.877-.186 2.974-.685 1.093-.498 2.438-1.265 4.17-2.253l.07-.04c1.732-.987 3.078-1.754 4.06-2.44.986-.688 1.713-1.363 2.094-2.208a5.118 5.118 0 0 0 0-4.21c-.381-.845-1.108-1.52-2.093-2.208-.983-.686-2.329-1.453-4.06-2.44l-.07-.04ZM5.083 1.76c.52-.054 1.172.09 2.198.558 1.024.466 2.31 1.199 4.084 2.21 1.775 1.012 3.06 1.746 3.98 2.388.924.645 1.374 1.128 1.585 1.594.427.948.427 2.03 0 2.978-.21.466-.66.95-1.585 1.594-.92.642-2.205 1.376-3.98 2.387-1.774 1.012-3.06 1.745-4.084 2.21-1.026.468-1.678.613-2.198.56a3.735 3.735 0 0 1-2.624-1.496c-.304-.413-.502-1.038-.605-2.148C1.75 13.489 1.75 12.024 1.75 10s0-3.49.104-4.596c.103-1.11.3-1.735.605-2.148a3.736 3.736 0 0 1 2.624-1.495Z');

const muteButton = createButton('mute-button', 'Mute', 'M18.75 13a.75.75 0 0 0-1.5 0h1.5Zm-4.35 6.623.49-.568-.01-.009-.01-.009-.47.586Zm-.93-1.708a.75.75 0 0 0-.94 1.17l.94-1.17ZM8.5 8.22v-.75.75Zm6.193 11.655.49-.567-.49.567ZM10.056 8.22v-.75.75Zm1.798.08 3.329-2.875-.98-1.135-3.33 2.876.98 1.135ZM8.5 8.97h1.556v-1.5H8.5v1.5Zm-1.75 5.043V10.72h-1.5v3.293h1.5Zm4.05 1.75H8.5v1.5h2.3v-1.5Zm6.45-1.263v3.862h1.5V14.5h-1.5Zm0-8.13V9h1.5V6.37h-1.5Zm0 6.63v1.5h1.5V13h-1.5Zm-2.067 6.308-.293-.253-.98 1.135.292.253.98-1.135Zm-.314-.27-1.4-1.123-.938 1.17 1.4 1.123.938-1.17ZM5.25 14.012a3.25 3.25 0 0 0 3.25 3.25v-1.5a1.75 1.75 0 0 1-1.75-1.75h-1.5ZM8.5 7.47a3.25 3.25 0 0 0-3.25 3.25h1.5c0-.967.783-1.75 1.75-1.75v-1.5Zm6.683-2.045c.81-.7 2.067-.125 2.067.946h1.5c0-2.355-2.766-3.62-4.548-2.081l.98 1.135Zm2.067 12.937c0 1.07-1.257 1.645-2.067.946l-.98 1.135c1.781 1.539 4.547.273 4.547-2.081h-1.5ZM10.873 7.166a1.25 1.25 0 0 1-.817.304v1.5a2.75 2.75 0 0 0 1.798-.67l-.981-1.134Z');

const restartButton = createButton('restart-button', 'Restart', 'M19.308 8.746A8 8 0 0 0 6.357 6.33m-3.125-.815.73 3.16a1 1 0 0 0 1.199.75l3.16-.73m-3.629 6.559A8 8 0 0 0 17.5 17.81m3.268.675-.73-3.16a1 1 0 0 0-1.199-.75l-3.16.73');

videoControls.appendChild(playButton);
videoControls.appendChild(muteButton);
videoControls.appendChild(restartButton);

videoSection.appendChild(modalVideo);
videoSection.appendChild(videoThumbnail);
videoSection.appendChild(videoControls);

// Create the signup form section
const signupForm = document.createElement('div');
signupForm.className = 'signup-form';

const crmWebToEntityForm = document.createElement('div');
crmWebToEntityForm.id = 'crmWebToEntityForm';
crmWebToEntityForm.className = 'zcwf_lblTopBottom crmWebToEntityForm';

const form = document.createElement('form');
form.id = 'webform648542000000408003';
form.action = 'https://crm.zoho.in/crm/WebToLeadForm';
form.name = 'WebToLeads648542000000408003';
form.method = 'POST';
form.setAttribute('onSubmit', 'javascript:document.charset="UTF-8"; return checkMandatory648542000000408003()');
form.setAttribute('accept-charset', 'UTF-8');

const createInput = (type, name, value, style) => {
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.value = value;
    if (style) input.style.cssText = style;
    return input;
};

form.appendChild(createInput('text', 'xnQsjsdp', '1df210812c8f60f0120728a6d1548c4b32ac2fd143e389fcb68b89a6f55cedf8', 'display:none;'));
form.appendChild(createInput('hidden', 'zc_gad', '', ''));
form.appendChild(createInput('text', 'xmIwtLD', 'e5b53af6a3c2db81f45ff0a57e4bdd9698c9c921816d59a0dc3bff9d27b8a729f4937a852b5241ba98a89dab6e20ee22', 'display:none;'));
form.appendChild(createInput('text', 'actionType', 'TGVhZHM=', 'display:none;'));
form.appendChild(createInput('text', 'returnURL', 'https://famekeeda.com', 'display:none;'));
form.appendChild(createInput('text', 'ldeskuid', '', 'display:none;'));
form.appendChild(createInput('text', 'LDTuvid', '', 'display:none;'));

const createFormGroup = (labelText, inputType, inputName, placeholder, required = false) => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const zcwfRow = document.createElement('div');
    zcwfRow.className = 'zcwf_row';

    const zcwfColLab = document.createElement('div');
    zcwfColLab.className = 'zcwf_col_lab';

    const label = document.createElement('label');
    label.htmlFor = inputName;
    label.textContent = labelText;
    if (required) label.innerHTML += '<span class="required">*</span>';

    zcwfColLab.appendChild(label);

    const zcwfColFld = document.createElement('div');
    zcwfColFld.className = 'zcwf_col_fld';

    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputName;
    input.name = inputName;
    input.maxLength = inputName === 'First Name' || inputName === 'Last Name' ? '40' : inputName === 'Company' ? '200' : inputName === 'Designation' ? '100' : inputName === 'Email' ? '100' : inputName === 'Phone' ? '30' : inputName === 'Website' ? '255' : '';
    input.placeholder = placeholder;

    zcwfColFld.appendChild(input);

    const zcwfColHelp = document.createElement('div');
    zcwfColHelp.className = 'zcwf_col_help';

    zcwfColFld.appendChild(zcwfColHelp);
    zcwfRow.appendChild(zcwfColLab);
    zcwfRow.appendChild(zcwfColFld);
    formGroup.appendChild(zcwfRow);

    return formGroup;
};

form.appendChild(createFormGroup('First Name', 'text', 'First Name', 'Enter your first name', true));
form.appendChild(createFormGroup('Last Name', 'text', 'Last Name', 'Enter your last name', true));
form.appendChild(createFormGroup('Company', 'text', 'Company', 'Enter company name', true));
form.appendChild(createFormGroup('Job Title', 'text', 'Designation', 'Enter job title/designation', true));
form.appendChild(createFormGroup('Email', 'text', 'Email', 'Enter your email address', true));
form.appendChild(createFormGroup('Phone', 'text', 'Phone', 'Enter your phone number', true));
form.appendChild(createFormGroup('Website', 'text', 'Website', 'Enter website url', true));

const createSelect = (labelText, selectName, options) => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';

    const zcwfRow = document.createElement('div');
    zcwfRow.className = 'zcwf_row wfrm_fld_dpNn';

    const zcwfColLab = document.createElement('div');
    zcwfColLab.className = 'zcwf_col_lab';

    const label = document.createElement('label');
    label.htmlFor = selectName;
    label.textContent = labelText;

    zcwfColLab.appendChild(label);

    const zcwfColFld = document.createElement('div');
    zcwfColFld.className = 'zcwf_col_fld';

    const select = document.createElement('select');
    select.className = 'zcwf_col_fld_slt';
    select.id = selectName;
    select.name = selectName;

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        if (option.selected) opt.selected = true;
        select.appendChild(opt);
    });

    zcwfColFld.appendChild(select);

    const zcwfColHelp = document.createElement('div');
    zcwfColHelp.className = 'zcwf_col_help';

    zcwfColFld.appendChild(zcwfColHelp);
    zcwfRow.appendChild(zcwfColLab);
    zcwfRow.appendChild(zcwfColFld);
    formGroup.appendChild(zcwfRow);

    return formGroup;
};

const leadSourceOptions = [
    { value: '-None-', text: '-None-' },
    { value: 'Apollo.io', text: 'Apollo.io' },
    { value: 'Cold Call', text: 'Cold Call' },
    { value: 'Employee Referral', text: 'Employee Referral' },
    { value: 'External Referral', text: 'External Referral' },
    { value: 'Facebook', text: 'Facebook' },
    { value: 'Google', text: 'Google' },
    { value: 'Instagram', text: 'Instagram' },
    { value: 'Instantly.ai', text: 'Instantly.ai' },
    { value: 'Twitter', text: 'Twitter' },
    { value: 'Website Chat', text: 'Website Chat' },
    { value: 'Website Contact Form', text: 'Website Contact Form', selected: true },
    { value: 'WhatsApp', text: 'WhatsApp' }
];

const leadStatusOptions = [
    { value: '-None-', text: '-None-' },
    { value: 'Attempted to Contact', text: 'Attempted to Contact' },
    { value: 'Contact in Future', text: 'Contact in Future' },
    { value: 'Contacted', text: 'Contacted' },
    { value: 'Junk Lead', text: 'Junk Lead' },
    { value: 'Lost Lead', text: 'Lost Lead' },
    { value: 'Not Contacted', text: 'Not Contacted' },
    { value: 'Pre-Qualified', text: 'Pre-Qualified' },
    { value: 'Not Qualified', text: 'Not Qualified' },
    { value: 'Account Created', text: 'Account Created' },
    { value: 'New Lead', text: 'New Lead', selected: true },
    { value: 'Lead Qualification', text: 'Lead Qualification' },
    { value: 'Initial Outreach', text: 'Initial Outreach' },
    { value: 'Needs Analysis', text: 'Needs Analysis' },
    { value: 'Proposal Preparation', text: 'Proposal Preparation' },
    { value: 'Negotiation Phase', text: 'Negotiation Phase' }
];

form.appendChild(createSelect('Lead Source', 'Lead Source', leadSourceOptions));
form.appendChild(createSelect('Lead Status', 'Lead Status', leadStatusOptions));

const descriptionFormGroup = document.createElement('div');
descriptionFormGroup.className = 'form-group';

const descriptionZcwfRow = document.createElement('div');
descriptionZcwfRow.className = 'zcwf_row';

const descriptionZcwfColLab = document.createElement('div');
descriptionZcwfColLab.className = 'zcwf_col_lab';

const descriptionLabel = document.createElement('label');
descriptionLabel.htmlFor = 'Description';
descriptionLabel.textContent = 'Tell us about your business & your business needs.';

descriptionZcwfColLab.appendChild(descriptionLabel);

const descriptionZcwfColFld = document.createElement('div');
descriptionZcwfColFld.className = 'zcwf_col_fld';

const descriptionTextarea = document.createElement('textarea');
descriptionTextarea.id = 'Description';
descriptionTextarea.name = 'Description';
descriptionTextarea.placeholder = 'Describe your business and your business needs in short...';

descriptionZcwfColFld.appendChild(descriptionTextarea);

const descriptionZcwfColHelp = document.createElement('div');
descriptionZcwfColHelp.className = 'zcwf_col_help';

descriptionZcwfColFld.appendChild(descriptionZcwfColHelp);
descriptionZcwfRow.appendChild(descriptionZcwfColLab);
descriptionZcwfRow.appendChild(descriptionZcwfColFld);
descriptionFormGroup.appendChild(descriptionZcwfRow);

form.appendChild(descriptionFormGroup);

const formActions = document.createElement('div');
formActions.className = 'form-actions';

const actionsZcwfRow = document.createElement('div');
actionsZcwfRow.className = 'zcwf_row';

const actionsZcwfColLab = document.createElement('div');
actionsZcwfColLab.className = 'zcwf_col_lab';

const actionsZcwfColFld = document.createElement('div');
actionsZcwfColFld.className = 'zcwf_col_fld';

const recaptchaDiv = document.createElement('div');
recaptchaDiv.className = 'g-recaptcha';
recaptchaDiv.setAttribute('data-sitekey', '6Le7SgMqAAAAAFgrvRhgeDv69S0vL2aqe5vRFvvd');
recaptchaDiv.setAttribute('data-theme', 'light');
recaptchaDiv.setAttribute('data-callback', 'rccallback648542000000408003');
recaptchaDiv.setAttribute('captcha-verified', 'false');
recaptchaDiv.id = 'recap648542000000408003';

const recaptchaError = document.createElement('div');
recaptchaError.id = 'recapErr648542000000408003';
recaptchaError.style.cssText = 'font-size:12px;color:red;visibility:hidden;';
recaptchaError.textContent = 'Captcha validation failed. If you are not a robot then please try again.';

actionsZcwfColFld.appendChild(recaptchaDiv);
actionsZcwfColFld.appendChild(recaptchaError);

const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.id = 'formsubmit';
submitButton.className = 'formsubmit zcwf_button';
submitButton.value = 'Submit';
submitButton.title = 'Submit';

const resetButton = document.createElement('input');
resetButton.type = 'reset';
resetButton.className = 'resetbutton zcwf_button';
resetButton.name = 'reset';
resetButton.value = 'Clear';
resetButton.title = 'Clear';

actionsZcwfColFld.appendChild(submitButton);
actionsZcwfColFld.appendChild(resetButton);

actionsZcwfRow.appendChild(actionsZcwfColLab);
actionsZcwfRow.appendChild(actionsZcwfColFld);
formActions.appendChild(actionsZcwfRow);

form.appendChild(formActions);

const visitorTrackingScript = document.createElement('script');
visitorTrackingScript.type = 'text/javascript';
visitorTrackingScript.id = 'VisitorTracking';
visitorTrackingScript.textContent = `var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { widgetcode: 'siqc20844b4531c080ad1adc2d816e3d65b3dbe794ff92bd9b2f627070c4d72e0f9', values: {}, ready: function () { } }; var d = document; s = d.createElement('script'); s.type = 'text/javascript'; s.id = 'zsiqscript'; s.defer = true; s.src = 'https://salesiq.zoho.in/widget'; t = d.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t); function trackVisitor648542000000408003() { try { if ($zoho) { var LDTuvidObj = document.forms['WebToLeads648542000000408003']['LDTuvid']; if (LDTuvidObj) { LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid(); } var firstnameObj = document.forms['WebToLeads648542000000408003']['First Name']; if (firstnameObj) { name = firstnameObj.value + ' ' + name; } $zoho.salesiq.visitor.name(name); var emailObj = document.forms['WebToLeads648542000000408003']['Email']; if (emailObj) { email = emailObj.value; $zoho.salesiq.visitor.email(email); } } } catch (e) { } }`;

const analyticsTrackingScript = document.createElement('script');
analyticsTrackingScript.id = 'wf_anal';
analyticsTrackingScript.src = 'https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=6938d92a1c3a99b600a6fbd0b32d1c237b2a94de07a52411066a5b5a347f29d3da8aaf40bcb2213743c76110cb61b131gidf8ebec796bec085bc05f15c82ecd52cb347b89035bb869b45f424f06ca0a1622gid11b3dc378f6e34de9b1dc9114678f86da4319625dd30120d6a940b69faefb872gidd42752da09910e52ba2f26cbbc33752d49a6355a47cd88dffbc1b22388bbabee&tw=7e8cd2a1fbf639b30062109fb86b9febd79cd4e68b8851b732be0b3b66d95342';

const recaptchaScript = document.createElement('script');
recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
recaptchaScript.async = true;
recaptchaScript.defer = true;

form.appendChild(visitorTrackingScript);
form.appendChild(analyticsTrackingScript);
form.appendChild(recaptchaScript);

crmWebToEntityForm.appendChild(form);
signupForm.appendChild(crmWebToEntityForm);

// Append all sections to the modal content
modalContent.appendChild(modalTitle);
modalContent.appendChild(videoSection);
modalContent.appendChild(signupForm);

// Append modal content to the main modal container
knowMoreModal.appendChild(modalContent);

// Append the modal to the body of the document
document.body.appendChild(knowMoreModal);