import TermsHeading from "@/components/features/TermsHeading";
import Disclaimer from "@/components/features/Disclaimer";

export const metadata = {
    title: "Terms and Conditions",
};

export default function TermsPage() {
    return (
        <div className="termsPage__container">
            <TermsHeading />
            <Disclaimer />
        </div>
    )
}