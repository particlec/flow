// 先导入库
import { Topology, Options, registerNode } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';

// 注册图形库
const  canvasRegister=()=> {
    registerFlow();// 流程图
    registerActivity();//活动图
    registerClass();//类图
    registerSequence();//时序图
    registerChart();
    // ... 其他图形库
}
export default  canvasRegister;
