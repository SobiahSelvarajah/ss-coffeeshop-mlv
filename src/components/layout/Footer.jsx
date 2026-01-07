import FooterHeading from "./FooterHeading";
import FooterContact from "./FooterContact";
import FooterLocation from "./FooterLocation";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
    return (
        <footer className="footer__container">
            <FooterHeading />
            <FooterContact />
            <FooterLocation />
            <FooterLinks />
            <FooterCopyright />
        </footer>
    )
}