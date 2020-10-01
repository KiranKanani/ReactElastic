import axios from 'axios'

export const getRoleData = () => {
    return async (dispatch) => {
        const query = {
            from:0,
            size:50,
            query: {
                match_all: {}
            }
          };
          
          axios.get('http://localhost:3000/searchRoles', query)
            .then((res) => {
                dispatch({type:"data",payload:res.data.hits.hits})
              console.log(res.data);
            });
    }
}