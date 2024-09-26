import { changeResource, getResourceList } from "./getResourceList";
import { Queue } from "./queue";

const pageSize = 100;
export const getAllCarResource = async (user) => {
    const map = new Map();
    // const taskQueue = new Queue(10);
    const resource = await getResourceList(user);
    // 总的资源数量
    const totalCount = resource.totalCount;
    const pageNums = Math.ceil(totalCount / pageSize);
    console.log(totalCount);
    for (let i = 1; i <= pageNums; i++) {
        const { resources } = await getResourceList(user, i, pageSize);
        console.log(i, resources.length);
        for (let j = 0; j < resources.length; j++) {
            if (resources[j].active !== "有效") {
                continue
            }
            if (map.has(resources[j].resourceName)) {
                const list = map.get(resources[j].resourceName)
                list.push(resources[j])
                map.set(resources[j].resourceName, list)
            } else {
                map.set(resources[j].resourceName, [resources[j]])
            }
        }
    }

    const res = []
    for (const [key, value] of map) {
        // 对value进行sort
        const exist = []
        const list = value.sort((a, b) => a.resourceDesc - b.resourceDesc).filter(it=>{
            if (exist.includes(it.resourceDesc)) {
                return false
            } else {
                exist.push(it.resourceDesc)
                return true
            }
        });
        
        if (list.length > 1) {
            list.forEach(async (item, idx) => {
                res[idx] = {
                    ...res[idx],
                    [item.resourceName + " price"]: item.resourceDesc,
                    [item.resourceName + " name"]: item.resourceId,
                }
            })
        }
    }
    return res
}