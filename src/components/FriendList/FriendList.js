import {FriendListItem} from './FriendListItem.js'
import friend from '../../data/friends.json'
export const FriendList=()=>{
    return(
        <div>
            <FriendListItem
            items={friend}/>
            
        </div>
    )
}
// console.log(friend[0].isOnline)