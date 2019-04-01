/*
 * @Author: guangwei.bao
 * @Date: 2019-03-29 15:59:39
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2019-04-01 16:37:08
 * @Describe: Storage 组件
 */

import cookie from 'react-cookie';

export default {
	// 保存指定cookie
	saveCookie(key, value, opt) {
		cookie.save(key, value, opt);
	},
	// 删除指定cookie
	removeCookie(key, opt) {
		cookie.remove(key, opt);
	},
	// 获取指定cookie
	getCookie(key, doNotParse) {
		return cookie.load(key, doNotParse);
	},

	// 保存数据到 localStorage
	saveLocalStorage(key, value) {
		localStorage.setItem(key, value);
	},
	// 从 localStorage 获取指定数据
	getLocalStorage(key) {
		return localStorage.getItem(key);
	},
	// 从 localStorage 删除指定数据
	removeLocalStorage(key) {
		localStorage.removeItem(key);
	},
	// 从 localStorage 删除所有数据
	removeAllLocalStorage() {
		localStorage.clear();
	},
	// 获取 localStorage 的数量
	getLocalStorageNum() {
		return localStorage.length;
	},
	// 获取所有的 localStorage 数据
	getAllLocalStorage() {
		let localObj = {};
		let localArr = Object.keys(localStorage);
		localArr.forEach((key) => {
			localObj[key] = localStorage[key];
		});
		return localObj;
	},
	// 判断是否有该 localStorage
	haveLocalStorage(key) {
		return localStorage.getItem(key) !== null;
	},

	// 保存数据到 sessionStorage
	saveSession(key, value) {
		sessionStorage.setItem(key, value);
	},
	// 从 sessionStorage 获取指定数据
	getSession(key) {
		return sessionStorage.getItem(key);
	},
	// 从 sessionStorage 删除指定数据
	removeSession(key) {
		sessionStorage.removeItem(key);
	},
	// 从 sessionStorage 删除所有数据
	removeAllSession() {
		sessionStorage.clear();
	},
	// 获取 sessionStorage 的数量
	getSessionNum() {
		return sessionStorage.length;
	},
	// 获取所有的 sessionStorage 数据
	getAllSession() {
		let sessionObj = {};
		let sessionArr = Object.keys(sessionStorage);
		sessionArr.forEach((key) => {
			sessionObj[key] = sessionStorage[key];
		});
		return sessionObj;
	},
	// 判断是否有该 sessionStorage
	haveSession(key) {
		return sessionStorage.getItem(key) !== null;
	}
};
