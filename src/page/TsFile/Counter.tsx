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
        let l = target - nums[key];
        if(map[l] !== undefined){
            return [map[l],Number(key)];
        }
        map[nums[key]] = Number(key);
    }
    // 4 {} '1'
    // 5 {6: 0} '2'
    // 7 {5: 1, 6: 0} '3'
    // 9 {3: 2, 5: 1, 6: 0} '4'
    // 3 {1: 3, 3: 2, 5: 1, 6: 0} '5'
  };

  useEffect(() =>{
    let arr = twoSum([6,5,3,1,7,4,3,9,8],10);
    console.log(arr,'arr');
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