import TermsHeading from "@/components/features/TermsHeading";
import Disclaimer from "@/components/features/Disclaimer";
import TermsBasics from "@/components/features/TermsBasics";

export const metadata = {
    title: "Terms and Conditions",
};

export default function TermsPage() {
    return (
        <div className="termsPage__container">
            <TermsHeading />
            <Disclaimer />
            <TermsBasics />
        </div>
    )
};