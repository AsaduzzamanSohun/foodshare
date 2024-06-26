import { useContext, useEffect, useState } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import ManageFoodTable from "../Components/ManageFoodTable/ManageFoodTable";

const ManageMyFood = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'FoodSphere | Manage Food'
    }, []);

    const { user } = useContext(AuthContext);
    const loadedMyFoods = useLoaderData();
    const [manageFoods, setManageFoods] = useState(loadedMyFoods);

    console.log(user, loadedMyFoods);

    const managedFoods = manageFoods.filter(manageFood => manageFood.donar_email === user?.email)
    console.log(managedFoods);

    return (
        <div className="container mx-auto min-h-[calc(100vh-80px-181.09px)] flex flex-col items-center py-10">


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">

                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Donator Info
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Food Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Edit Food
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Delete Food
                                </th>
                            </tr>
                        </thead>
                        <tbody className="h-full">
                            {
                                managedFoods.map(managedFood => <ManageFoodTable
                                    key={managedFood._id}
                                    managedFood={managedFood}
                                    manageFoods={manageFoods}
                                    setManageFoods={setManageFoods}></ManageFoodTable>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>


        </div>
    );
};

export default ManageMyFood;