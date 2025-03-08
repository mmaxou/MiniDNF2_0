// LeanCloud 应用配置
const APP_ID = 'MJfpsORj5jI7XLwhlCwiZov1-gzGzoHsz';
const APP_KEY = 'wwsD6wzDWhQ05UaBcRgRqf2K';
const SERVER_URL = 'https://mjfpsorj.lc-cn-n1-shared.com';

// 初始化 LeanCloud
export function initLeanCloud() {
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY,
        serverURL: SERVER_URL
    });
}

// 用户注册
export async function register(username, password) {
    const user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    try {
        const newUser = await user.signUp();
        return { success: true, user: newUser };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// 用户登录
export async function login(username, password) {
    try {
        const user = await AV.User.logIn(username, password);
        return { success: true, user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

// 获取当前用户
export function getCurrentUser() {
    return AV.User.current();
}

// 退出登录
export async function logout() {
    try {
        await AV.User.logOut();
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
