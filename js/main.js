import { initLeanCloud } from './leancloud.js';
import { setupAuthUI } from './auth-ui.js';
import { setupAuthHandlers } from './auth-handlers.js';

// 初始化LeanCloud
initLeanCloud();

// 设置UI事件监听
setupAuthUI();

// 设置认证相关的事件处理
setupAuthHandlers();