import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";



export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                "https://sample-project-507ff-default-rtdb.firebaseio.com/cart.json"
            );
            if (!response.ok) {
                throw new Error ('could not fetch cart data')
            }
            const data = await response.json()
            return data;
        }

        try {
            const cartData = await fetchData()
            dispatch(cartActions.replaceCart(cartData))
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "error",
                  message: "fetching cart data failed!",
                })
              );
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          "https://sample-project-507ff-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        // const responseData = await response.json();
  
        if (!response.ok) {
          throw new Error("sendig cart data failed");
        }
      };
  
      try {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "success",
            message: "sending cart data successfully",
          })
        );
  
        await sendRequest();
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "error",
            message: "sending cart data failed!",
          })
        );
      }
    };
  };