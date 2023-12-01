import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import NavLink from "@/Components/NavLink";

export default function VehicleIndex(props) {
    console.log(props.vehicles);

    const AllVehicles = props.vehicles.map((obj, i) => {
        return (
            <div key={i}>
                <h1 className="p-2">AllVehicles</h1>
                <p className="">
                    <br />
                    {obj.title}
                    <br />
                    {obj.year}
                    <br />
                    {obj.description}
                    <br />$ {obj.price}
                </p>

                <PrimaryButton>
                    <NavLink
                        href={route("Vehicles.index")}
                        active={route().current("dashboard")}
                    >
                        Edit
                    </NavLink>
                </PrimaryButton>
                <SecondaryButton>
                    <NavLink
                        href={route("Vehicles.index")}
                        active={route().current("dashboard")}
                    >
                        Show
                    </NavLink>
                </SecondaryButton>
                <DangerButton>
                    <NavLink
                        href={route("Vehicles.index")}
                        active={route().current("dashboard")}
                    >
                        Delete
                    </NavLink>
                </DangerButton>
            </div>
        );
    });
    return <div>{AllVehicles}</div>;
}
