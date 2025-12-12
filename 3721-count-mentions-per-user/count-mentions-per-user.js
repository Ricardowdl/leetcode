
var countMentions = function(numberOfUsers, events) {
    events.sort((a, b) => {
        // 条件1：按第二个元素（索引1）的数字值排序
        const numA = parseInt(a[1], 10);
        const numB = parseInt(b[1], 10);
        
        if (numA !== numB) {
            return numA - numB; // 从小到大
        }
        
        // 条件2：第二个元素相同的情况下，按事件类型排序
        // "OFFLINE" 要在 "MESSAGE" 前面
        const typeOrder = { "OFFLINE": 0, "MESSAGE": 1 };
        return typeOrder[a[0]] - typeOrder[b[0]];
    });

    // UserStatusArr 所有用户的状态，1-online\2-offline 初始情况下全为1
    const UserStatusArr = new Array(numberOfUsers).fill(true)

    //mentions 用户被提及的次数
    const mentions = new Array(numberOfUsers).fill(0)

    const onlineTime = new Array(numberOfUsers).fill(0)

    for(let i = 0; i < events.length; i++){
        const [eventType, timestamp, mentions_string] = events[i]
        // 处理上线 检查timestamp\onlineTime
        onlineTime.forEach((time, index)=>{
            if(time !== 0 && time <= timestamp){
                UserStatusArr[index] = true;
                onlineTime[index] = 0;
            }
        })


        if(eventType === 'MESSAGE'){
            // 提及
            if(mentions_string === 'HERE'){
                // 所有在线用户
                UserStatusArr.forEach((userStatus, index)=>{
                    if(userStatus !== false){
                        mentions[index] = mentions[index] + 1
                    }
                })
            }else if(mentions_string === 'ALL'){
                for(let j = 0; j < mentions.length; j++){
                    mentions[j] = mentions[j] + 1
                }
            }else {
                const messageUserList = mentions_string.split(' ').map((x)=> Number(x.replace('id', ''))) // [1,2,3]
                messageUserList.forEach((userId)=>{
                    mentions[userId] = mentions[userId] + 1; 
                })
            }
        } else if(eventType === 'OFFLINE'){
            // 下线
            UserStatusArr[Number(mentions_string)] = false;
            onlineTime[Number(mentions_string)] = Number(timestamp) + 60
        }

    }
    return mentions;
};