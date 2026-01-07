import FooterHeading from "./FooterHeading";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

export default function Footer() {
    return (
        <footer className="footer__container">
            <FooterHeading/>
            <FooterContact/>
            <FooterLinks/>
        </footer>
    )
}