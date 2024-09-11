//单次指令
import { DirectiveBinding } from 'vue';
/**
 * IntersectionObserver 
 * el: HTMLElement, binding: DirectiveBinding
 * 元素进入视界就执行回调，整个生命周期只执行一次
 */
const vVisibleOnce = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const callback = binding.value;

        // 创建 IntersectionObserver 实例
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 元素进入视界，执行回调
                    if (callback && typeof callback === 'function') {
                        callback();
                    }
                    // 停止观察，确保只调用一次
                    observerInstance.unobserve(el);
                }
            });
        });

        // 开始观察元素
        observer.observe(el);

        // 存储 observer 供卸载时使用
        el.__vueObserver__ = observer;
    },
    unmounted(el: HTMLElement) {
        // 元素卸载时，停止观察
        el.__vueObserver__?.disconnect();
    },
};
// 定义自定义指令
const scrollIntoViewDirective = {
    // 指令挂载时调用
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // 创建 Intersection Observer 的回调函数
        const callback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 元素进入视口，添加 class
                    el.classList.add(binding.value);
                } else {
                    // 元素离开视口，移除 class
                    el.classList.remove(binding.value);
                }
            });
        };

        // 创建 Intersection Observer 实例，设置可见比例为 10%
        const observer = new IntersectionObserver(callback, {
            threshold: 0.1
        });

        // 开始观察目标元素
        observer.observe(el);
    }
};


export { vVisibleOnce, scrollIntoViewDirective };
