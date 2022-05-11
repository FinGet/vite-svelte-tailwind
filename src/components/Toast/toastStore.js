
import { writable } from 'svelte/store';

export const toasts = writable([]);

/**
 *
 * @param msg 提示信息，可以是任意html内容
 * @param type 信息类型
 * @param removeAfter 清除时间，单位：秒
 * @param handler 手动删除
 * @returns id of Toast
 */
export function addToast(msg, type = 'info', handler = false, removeAfter = 2000) {
	const id = new Date().valueOf() + msg;
	toasts.update((all) => [
		{
			id,
			msg,
			type,
			removeAfter
		},
		...all
	]);
  if(!handler) {
    setTimeout(() => {
      removeToast(id);
    }, removeAfter);
  }
	return id;
}

export function removeToast(id) {
	toasts.update((all) => all.filter((toast) => toast.id !== id));
}