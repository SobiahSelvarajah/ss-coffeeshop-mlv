import OnlineOrderHeading from "@/components/features/OnlineOrderHeading";
import OnlineOrderSubheading from "@/components/features/OnlineOrderSubheading";

export const metadata = {
    title: "Online Ordering",
};

export default function OnlineOrder() {
    return (
        <div className="onlineOrder__container">
            <OnlineOrderHeading />
            <OnlineOrderSubheading />
        </div>
    )
}