import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import NavLink from "@/Components/NavLink";
import '../../../css/vehicleIndex.pcss';

export default function VehicleIndex(props) {
    const csrfToken = document.head.querySelector(
        'meta[name="csrf-token"]'
        ).content;

     function destroy(e) {
         if (confirm("Are you sure you want to delete this user?")) {
             router.delete(route("Vehicles.destroy", e.currentTarget.id));
         }
     }   
        console.log(props,csrfToken);
        // stampo tutti i veicoli
    const AllVehicles = props.vehicles.map((obj, i) => {
        return (
            <div key={i} className="max-w-2xl p-4">
                <div className="w-80">
                    <img src={obj.img_path} alt={obj.title} />
                </div>
                <p className="post-class">
                    <br />
                    {obj.title}
                    <br />
                    {obj.year}
                    <br />
                    {obj.description}
                    <br />$ {obj.price}
                    <span className="classe2">hello</span>
                </p>

                <div className="flex gap-5 my-5">
                    <PrimaryButton>
                        <NavLink
                            href={route("Vehicles.index")}
                            active={route().current("dashboard")}
                        >
                            Edit
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                />
                            </svg>
                        </NavLink>
                    </PrimaryButton>
                    <SecondaryButton>
                        <NavLink
                            href={route("Vehicles.show", [obj.id])}
                            active={route().current("dashboard")}
                        >
                            Show
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </NavLink>
                    </SecondaryButton>
                    <button
                        onClick={destroy}
                        id={obj.id}
                        tabIndex="-1"
                        type="button"
                        className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                    >
                        Delete test
                    </button>
                    
                </div>
            </div>
        );
    });
    return (
        <>
            <AuthenticatedLayout 
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All Vehicles</h2>}>
                <div className="max-w-7xl mx-auto">
                    {AllVehicles}
                </div>
            </AuthenticatedLayout>
        </>
    );
}
