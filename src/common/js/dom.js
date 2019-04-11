
// dom操作的通用代码

// 增加类名
export function addCalssName(el, className){
    // 第一个参数为dom节点，第二个参数为类名

    // 判断是否有这个类名
    if(hasClassName(el, className)){
        return
    }

    let newClass = el.className.split(' ');
    newClass.push(className);
    el.className = newClass.join(' ');
}

// 判断是否有这个类名
export function hasClassName(el, className){
    // 正则表达式，可以 以空格开头或者空格结尾
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(el.className)
}

// 添加自定义属性或者获取属性值
export function getData(el, name, val) {
    const prefix = 'data-'
    if (val) {
      return el.setAttribute(prefix + name, val)
    }
    return el.getAttribute(prefix + name)
  }
  
  let elementStyle = document.createElement('div').style
  
  let vendor = (() => {
    let transformNames = {
      webkit: 'webkitTransform',
      Moz: 'MozTransform',
      O: 'OTransform',
      ms: 'msTransform',
      standard: 'transform'
    }
  
    for (let key in transformNames) {
      if (elementStyle[transformNames[key]] !== undefined) {
        return key
      }
    }
  
    return false
  })()
  
  export function prefixStyle(style) {
    if (vendor === false) {
      return false
    }
  
    if (vendor === 'standard') {
      return style
    }
  
    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
  }