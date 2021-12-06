import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export default function AntdSelect({options}){
    console.log(options,'options')
    return <Select defaultValue={1}>
        {
            options?.map((v,i) =>{
                return <Option key={i} value={v.value} >{v.name}</Option>
            })
        }
        
    </Select>
}