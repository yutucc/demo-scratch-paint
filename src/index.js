/*
 * @Author: wuqinfa
 * @Date: 2022-09-29 16:14:36
 * @LastEditors: wuqinfa
 * @Description:
 */
import PaintEditor from './containers/paint-editor.jsx';
import ScratchPaintReducer from './reducers/scratch-paint-reducer';
import { setSvgArtBoardWidthHeight } from './helper/view';

export {
    PaintEditor as default,
    ScratchPaintReducer,
    setSvgArtBoardWidthHeight,
};
