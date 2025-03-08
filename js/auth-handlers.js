import { login, register } from './leancloud.js';
import { showError, hideError, resetForm } from './auth-ui.js';

// 设置认证相关的事件处理
export function setupAuthHandlers() {
    // 处理登录表单提交
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // 清除之前的错误信息
        hideError('loginForm', 'loginUsername');
        hideError('loginForm', 'loginPassword');

        // 表单验证
        if (!username) {
            showError('loginForm', 'loginUsername', '请输入用户名');
            return;
        }
        if (!password) {
            showError('loginForm', 'loginPassword', '请输入密码');
            return;
        }

        try {
            const result = await login(username, password);
            if (result.success) {
                // 登录成功，可以跳转到其他页面或显示欢迎信息
                alert('登录成功！');
                resetForm('loginForm');
            } else {
                showError('loginForm', 'loginPassword', result.error);
            }
        } catch (error) {
            showError('loginForm', 'loginPassword', '登录失败，请稍后重试');
        }
    });

    // 处理注册表单提交
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // 清除之前的错误信息
        hideError('registerForm', 'registerUsername');
        hideError('registerForm', 'registerPassword');
        hideError('registerForm', 'confirmPassword');

        // 表单验证
        if (!username) {
            showError('registerForm', 'registerUsername', '请输入用户名');
            return;
        }
        if (!password) {
            showError('registerForm', 'registerPassword', '请输入密码');
            return;
        }
        if (!confirmPassword) {
            showError('registerForm', 'confirmPassword', '请确认密码');
            return;
        }
        if (password !== confirmPassword) {
            showError('registerForm', 'confirmPassword', '两次输入的密码不一致');
            return;
        }

        try {
            const result = await register(username, password);
            if (result.success) {
                // 注册成功，可以自动登录或跳转到登录页
                alert('注册成功！');
                resetForm('registerForm');
                // 切换到登录表单
                document.querySelector('[data-form="login"]').click();
            } else {
                showError('registerForm', 'registerUsername', result.error);
            }
        } catch (error) {
            showError('registerForm', 'registerUsername', '注册失败，请稍后重试');
        }
    });
}