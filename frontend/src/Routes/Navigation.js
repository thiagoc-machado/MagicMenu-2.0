// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { map } from "lodash";
// import routes from "./routes";

// export function Navigation() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 {map(routes, (route, index) => (
//                     <Route
//                         key={index}
//                         path={route.path}
//                         element={
//                         <route.layout>
//                             <route.component/>
//                         </route.layout>
//                         }
//                     />
//                 ))}
//             </Routes>
//         </BrowserRouter>
//     );
//     }

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { map } from "lodash";
import routes from "./routes";

console.log(routes);

export function Navigation() {
    return (
        <Router>
            <Routes>
                {map(routes, (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                            <route.layout>
                                <route.component />
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </Router>
    );
}
