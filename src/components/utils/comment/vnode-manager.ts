/* eslint-disable no-underscore-dangle */
export const VNodeTargets = Symbol.for('VNodeTargets')
export interface HTMLElementWithVue extends HTMLElement {
  _vnode?: any
  __vue_app__?: any
  parentElement: HTMLElementWithVue | null
  [VNodeTargets]?: HTMLElementWithVue[]
}
export interface Vue3Vnode {
  type: string | symbol
  el?: HTMLElementWithVue
  props?: Record<string, any>
  component?: {
    subTree?: Vue3Vnode
  }
  children?: Vue3Vnode[]
}

export class VNodeManager {
  public isEnd: (vnode: Vue3Vnode) => boolean = () => true
  public isVNodeReceiver: (vnode: Vue3Vnode) => boolean = () => false

  constructor(public rootElement: HTMLElementWithVue) {}

  traverseToRoot(element: HTMLElementWithVue) {
    if (element._vnode) {
      return
    }
    let currentElement = element
    while (currentElement.parentElement !== null && currentElement !== this.rootElement) {
      if (currentElement.parentElement[VNodeTargets]) {
        if (!currentElement.parentElement[VNodeTargets].includes(currentElement)) {
          currentElement.parentElement[VNodeTargets].push(currentElement)
        }
        // 其他 element 已经标记过此处, 可以直接 break 掉完成循环
        break
      } else {
        currentElement.parentElement[VNodeTargets] = [currentElement]
      }
      currentElement = currentElement.parentElement
    }
  }

  /** 解开组件实例的包装 */
  private unwrapSubtree(vnode: Vue3Vnode): Vue3Vnode {
    if (vnode.component?.subTree) {
      return this.unwrapSubtree(vnode.component?.subTree)
    }
    return vnode
  }

  /**
   * 将评论区 VNode 进行暴露
   * @see https://github.com/the1812/Bilibili-Evolved/issues/4690#issuecomment-2059485344
   */
  exposeVNode(vnode: Vue3Vnode = this.rootElement._vnode) {
    if (this.isVNodeReceiver(vnode) && vnode.el && !vnode.el._vnode) {
      vnode.el._vnode = vnode
    }
    if (this.isEnd(vnode)) {
      return
    }

    const unwrapped = this.unwrapSubtree(vnode)
    if (!Array.isArray(unwrapped.children)) {
      return
    }
    const nextChildren = unwrapped.children.filter(child => {
      // fragment 需要将 VNodeTargets 直接向下传递一层
      if (child.type === Symbol.for('v-fgt')) {
        child.el[VNodeTargets] = unwrapped.el?.[VNodeTargets]
        return true
      }
      // 模板树需要 flatMap 并向下传递一层
      if (!child.el) {
        child[VNodeTargets] = unwrapped.el?.[VNodeTargets]?.flatMap(
          element => element?.[VNodeTargets],
        )
        return true
      }

      // 没有 el 时属于来自模板树的传递
      if (!unwrapped.el) {
        return unwrapped[VNodeTargets]?.includes(child.el)
      }
      return unwrapped.el?.[VNodeTargets]?.includes(child.el)
    })

    nextChildren.forEach(child => {
      this.exposeVNode(child)
    })
  }
}
