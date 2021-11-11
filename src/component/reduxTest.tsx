import { createSlice } from "@reduxjs/toolkit"

  function ReduxTest(){

    const slice = createSlice({
        name: "home",
        initialState: {
          isShowModal: false
        },
        reducers: {
          showModal(state) {
            state.isShowModal = true;
          },
          hideModal(state) {
            state.isShowModal = false
          }
        }
      });

    console.log(slice,'counterSlice');
  }
  export default ReduxTest  