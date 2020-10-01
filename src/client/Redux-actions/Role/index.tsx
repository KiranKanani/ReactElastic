import axios from 'axios'

export const getRoleData = () => {
    return async (dispatch) => {
        const query = {
            from:0,
            size:20,
            query: {
              bool:{
                filter:[{
                  match: {
                    "entityState.itemID":5
                  }
                }],
                // must_not:[{
                //   match: {
                //     name: "ano_role-name 42969"
                //   }
                // }]
              }
            }
          };
          
          axios.post('http://localhost:3000/searchRoles',query)
            .then((res) => {
                dispatch({type:"data",payload:res.data.hits.hits})
              console.log(res.data);
            });
    }
}