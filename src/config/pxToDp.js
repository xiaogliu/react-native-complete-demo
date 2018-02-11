/**
 * 自定转化单位，自适应布局
 * @param uiElementPx: ui给的原始尺寸
 */
import { Dimensions, Platform } from 'react-native';

// app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 750
const uiWidthPx = 750;

function pxToDp(uiElementPx) {
  const transferNumb = uiElementPx * deviceWidthDp / uiWidthPx;

  // 华为p9获取到的屏幕宽度居然是360，比iphone6的375都小！避免像border宽度小于0.5无法显示
  if (transferNumb >= 1) {
    // 避免出现循环小数
    return Math.ceil(transferNumb);
  } else if (Platform.OS === 'android') {
    // 如果是安卓，最小为1，避免边框出现锯齿
    return 1;
  }
  return 0.5;
}

export default pxToDp;
