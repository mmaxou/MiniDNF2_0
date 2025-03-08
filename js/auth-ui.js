// 处理表单切换
export function setupAuthUI() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.form');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            forms.forEach(form => form.classList.remove('active'));

            // 添加当前活动状态
            button.classList.add('active');
            const formType = button.dataset.form;
            document.getElementById(`${formType}Form`).classList.add('active');
        });
    });

    // 添加错误消息显示功能
    const formElements = document.querySelectorAll('form');
    formElements.forEach(form => {
        const formGroups = form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            const input = group.querySelector('input');
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            group.appendChild(errorMessage);
        });
    });
}

// 显示错误消息
export function showError(formId, inputId, message) {
    const form = document.getElementById(formId);
    const input = form.querySelector(`#${inputId}`);
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

// 隐藏错误消息
export function hideError(formId, inputId) {
    const form = document.getElementById(formId);
    const input = form.querySelector(`#${inputId}`);
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.classList.remove('show');
}

// 清空表单
export function resetForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.classList.remove('show'));
}