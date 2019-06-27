// 规则： 1.当节点类型相同时，需要看一下属性是否相同，产生一个属性的补丁包{type: 'attrs', attrs: { class: 'list-group'}}
// 2. 新的dom 节点不存在 {type: 'remove', index: XXX}
// 3. 节点类型不相同，直接采用替换模式 {type: 'replace', newNode: newnode}
// 4. 文本的变化{type: 'TEXT', text: 1}
let Index = 0; // 全局维护的index
function diff (oldTree, newTree) {
    let patches = {};
    let index = 0;
    // 递归树，比较后的结果放到补丁包中
    walk(oldTree, newTree, index, patches);
    return patches;
}
function walk(oldNode, newNode, index, patches) {
    let currentPatch = []; // 每个元素都有一个补丁对象
    if (!newNode) {
        // 如果新节点直接被删除了
        currentPatch.push({type: 'remove', index})
    } else if (isString(oldNode) && isString(newNode)) {
        if (oldNode !== newNode) {
            currentPatch.push({type : 'text', text: newNode})
        }
    } else if (oldNode.type === newNode.type) {
        // 比较属性是否有更改
        let attrs = diffAttr(oldNode.props, newNode.props);
        if (Object.keys(attrs).length > 0) {
            currentPatch.push({ type: 'attrs', attrs})
        }
        // 如果有儿子节点，应该遍历儿子
        diffChildren(oldNode.children, newNode.children, patches)
    } else {
        // 说明节点被替换了
        currentPatch.push({type: 'replace', newNode})
    }
    if (currentPatch.length > 0) { // 补丁包里面当前元素确实有补丁
        // 将元素和补丁对应起来，放到大补丁包中
        patches[index] = currentPatch;
    }
}
function diffAttr(oldAttrs, newAttrs) {
    let patch = {};
    for (let key in oldAttrs) {
        if (oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key];
        }
    }
    for (let key in newAttrs) {
        // 老节点没有的新属性
        if (!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key]
        }
    }
    return path;
}
function diffChildren(oldChildren, newChildren, patches) {
    // 比较老的第一个和新的第一个
    oldChildren.forEach((child, idx) => {
        // 索引不应该是index
        walk(child, newChildren[idx], ++Index ,patches)
    })
}

function isString(node) {
    return Object.prototype.toString.call(node) == '[object String]'
}

let patches = diff(domNode1, domNode2)
let index = 0; // 默认哪个需要打补丁
// 给元素打补丁，重新更新视图
patch(el, patches)
let allPathes;
function pathc(node ,patches) {
    // 给某个元素打补丁
    allPathes = patches;
    // 给某个元素打补丁
    walk()
}
// 打补丁的过程是个后序的
function walk(node) {
    let currentPatch = allPathes[index++];
    let childNodes = node.childNodes;
    childNodes.forEach(child => walk(child))
    if (currentPatch) {
        doPatch()
    }
}
function doPatch(node, patches) {
    patches.forEach(patch => {
        switch(path.type){
            case 'attrs' :
            for(let key in patch.attrs) {
                let value = patch.attrs[key];
                if (value) {
                    setAttr(node ,key, value);
                } else {
                    node.removeAttribute(key);
                }
            }
            break;
            case 'text' :
            node.textContent = patch.text;
            break;
            case 'replace' :
            let newNode = (patch.newNode instanceof Element) ? render(patch.newNode) : document.createTextNode(patch.newNode);
            node.parentNode.replaceChild(newNode, node)
            break;
            case 'remove' :
            node.parentNode.replaceChild(newNode, node)
            break;
        }
    })
}
// 按照上面的实现，会有下面两个问题
// 如果评级元素有互换，会导致重新渲染
// 新增节点也不会被更新
// 需要使用index 来实现这些功能