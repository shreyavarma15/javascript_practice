console.log("PROMISES");

const cart = ["Phone", "Laptop", "Tablet"];
//click on place order-> - POST api call, which will send this cart items
//to the server.  then in return we will get success response with orderId.

//createOrder(cart) -> orderId - POST api call, which takes this id, making payment to that id.
//makePayment(orderId) / success: 200 response - paymentId
//getOrderDetails(paymentId) / which us the UI result of our orders

//onCLick of 'Place order' button onCLick={handleOrderClick}

function createOrder(arr) {
  //does something with api call -axios.post('api url', header, requestBody-arr)
  return orderId;
}

function createOrder(arr) {
  //does something with api call -axios.post('api url', header, requestBody-arr)
  return orderId;
}

function makePayment(id) {
  //does something with api call -axios.post('api url', header, requestBody-id)
  return paymentId;
}

function getOrderDetails(refId) {
  //does something with api call -axios.post('api url', header, requestBody-id)
  return orderDetails;
}

//CALLBACK HELL- PYRAMID OF DOOM, INVERSION OF CONTROL
handleOrderClick = () => {
  createOrder(cart, () => {
    makePayment(orderId, () => {
      getOrderDetails(paymentId, () => {
        someFn(x, () => {
          soneOtherFn();
        });
      });
    });
  });
};

const promise = createOrder(cart);

promise
  .then((response) => {
    return makePayment(response.orderId);
  })
  .then((resposne) => {
    return getOrderDetails(resposne.paymentId);
  })
  .then((response) => {
    return setDetail(response.details);
  });
