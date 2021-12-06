import React,{ useState, useEffect } from 'react'
import { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value); //获取redux里面的值
    const dispatch = useDispatch() //使用dispatch去修改值

    function twoSum(nums: number[], target: number){ //两数之和

        let map = {};

        for(let key in nums){

            let difference = target - nums[key]

            if(map[difference] !== undefined){

                return [map[difference],Number(key)]

            }

            map[nums[key]] = Number(key);

        }
    
    };

    function longestCommonPrefix (strs:string[]) {

        if(!strs || !strs.length){
            return '';
        }
        let first = 0;
        function loopstr(strs){
          let index = 0;
          for(let i = 0; i<strs.length; i++){
              if(strs[i].indexOf(strs[0][first]) === first){
                index = index + 1;
              }
          }
          if(index === strs.length){
            first = first + 1;
            return loopstr(strs);
          }else{
            return strs[0].substr(0,first)
          }
        }
        return loopstr(strs)
    };

    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function(str) {
      // s = "abcabcbb" //3 
      // s = "bbbbb" // 1
      // s = "pwwkew" // 
      let longstr = '';

      return longstr.length;
        console.log(str,'string')
    };
    useEffect(() =>{

        let arr = twoSum([6,5,3,1,7,4,3,9,8],10);

        // console.log(arr,'arr');

        let langstr = longestCommonPrefix(["aa","aa"])

        console.log(langstr,'langstr');
    },[])

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}