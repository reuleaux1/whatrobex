import * as React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useSession } from '../SessionContext';



export default function Layout() {
  const { session } = useSession();
  const location = useLocation();
  // let numberOfBooksRead = 123;
  // const hasRead = numberOfBooksRead ?? "No data";  
  // console.log('Number of books read by the user:', hasRead);
  // let hotdogseaten = 5;
  // const hasEatenhotdogs = hotdogseaten ?? "wala";

  // console.log('Number of hotdogs eaten by the logged in user', hasEatenhotdogs); 
// let shibalboya = 3;
// const halakabeh = shibalboya ?? "No data";
// console.log('Shibalboyar', halakabeh);


// para nullish coalescing
// const user = { address: { street: '123 3 St' } };
// const address = user?.address?.street;
// console.log('Street', address);


//para sa optional chaining

// const nestedArrays = [[1, 2], [3, 4, 5]];
// const flattenedArray = nestedArrays.flatMap(array => array);
// console.log('test', flattenedArray);

// di makakasama yung user pag di 18 above
// const users = [
//   { name: 'Akande', age: 30 },
//   { name: 'Toheeb', age: 25 },
//   { name: 'Olalekan', age: 17 }
// ];

// const adultUsers = users
// .filter(user => user.age >= 18)
// .map(user => ({ name: user.name, age: user.age }));
// console.log('users', adultUsers);

  if (!session) {
    const callbackUrl = location.pathname;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("callbackUrl", callbackUrl);
    const redirectTo = `/sign-in?${searchParams.toString()}`;
    return <Navigate to={redirectTo} replace />;
    
  }

  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}
