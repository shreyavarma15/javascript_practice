//Create a fetchWithAutoRetry(fetcher, maxRetryCount), which automatically fetches
//again when error occurs, until the count is reached

async function fetchWithAutoRetry(fetcher, maxRetryCount) {
  if (maxRetryCount >= 1) {
    try {
      const result = await fetcher();
      return result;
    } catch (e) {
      console.log("In catch block", e);
      const result = await fetchWithAutoRetry(fetcher, maxRetryCount - 1);
      return result;
    }
  }
  throw new Error("Max retry count reached");
}

const p1 = () => {
  let p1 = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    console.log("randomNum", randomNum);
    if (randomNum > 0.5) {
      resolve("Resolved p1");
    } else {
      reject("Rejected p1");
    }
  });

  return p1;
};

(async function a() {
  try {
    const result = await fetchWithAutoRetry(p1, 5);
    console.log("result==>", result);
  } catch (e) {
    console.log("Error from fetch retry ==", e);
  }
})();
