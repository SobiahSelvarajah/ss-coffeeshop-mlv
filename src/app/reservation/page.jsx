import ReservationHeading from "@/components/features/ReservationHeading";
import ReservationSubheading from "@/components/features/ReservationSubheading";

export const metadata = {
    title: "Reservation",
};

export default function ReservationPage() {
    return (
        <div className="reservationPage__container">
            <ReservationHeading />
            <ReservationSubheading />
        </div>
    )
}