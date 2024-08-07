function createCounter() {
  let count = 0; // `count` is a private variable
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
console.log(counter.count);

//Currying

function multiply(a, b) {
  return a * b;
}

function multiplyCurry(x) {
  return function (y) {
    return multiply(x * y);
  };
}

const double = multiplyCurry(2);
console.log(double(2)); //4
console.log(double(5)); //10

//_______________________________________________________________________________
import { useEffect, useState } from "react";
import "./App.css";
import { lastNameAPI } from "./userDetailsAPI";

const userNames = ["gbhavalkar", "ijaveri", "ndhangar"];

export default function App() {
  const [userDetails, setUserDetails] = useState([]);

  const getUserDetails = () => {
    const promises = userNames.map((name) => {
      return lastNameAPI(name);
    });

    Promise.all(promises).then((values) => {
      console.log(values);

      setUserDetails(values);
    });
  };

  console.log(userDetails);

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="app">
      <div className="app_section"></div>
      <div className="app_section">
        <input
          className="app_section--input"
          placeholder="Filter based on user name"
        />
      </div>
      <div className="app_section">
        <table>
          <thead>
            <tr>
              <td> Full name </td>
              <td> Location </td>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((obj) => {
              return (
                <>
                  <tr>
                    <td>{obj.first_name}</td>
                    <td>{obj.location}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/*
  ~~~~~~~~~~~~~~~~~~~~~~~~~~Problem Statement~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Based on the `userNames` provided,
  we need to fetch the user details for all the users from the `lastNameAPI`,
  exported from the `userDetailsAPI.ts` file.
  Note: The userDetailsAPI returns the user details only for one user at a time,
  however it does not return the user name back.
  
  Display the following user details in a table having following columns:
  Full Name -> Camel Case representation of First Name concat with Last Name
  Email
  Phone
  Location -> Should be in Camel Case format

  We should display a loading message until all the users have been loaded.

  Additional Task: 
  We have a input element which should filter users list in the table,
  partially matching the text entered by user with the `user_name` of the user.
*/
