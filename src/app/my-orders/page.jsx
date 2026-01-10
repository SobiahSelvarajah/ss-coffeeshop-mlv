import MyOrdersHeading from "@/components/features/MyOrdersHeading";
import MyOrdersSubheading from "@/components/features/MyOrdersSubheading";

export const metadata = {
    title: "My Orders",
};

export default function MyOrdersPage() {
    return (
        <div className="myOrdersPage__container">
            <MyOrdersHeading />
            <MyOrdersSubheading />
        </div>
    )
}