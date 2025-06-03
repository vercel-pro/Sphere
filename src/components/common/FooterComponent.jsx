import Container from "./Container";
import Logo from "../../assets/images/Logo";
import { Link } from "react-router-dom";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import EmailIcon from "../../assets/icons/EmailIcon";

const FooterComponent = () => {
  return (
    <>
      <div className={`font-["montserrat"] pt-[73px] pb-5`}>
        <Container>
          <div className="flex items-end gap-x-[147px]">
            <div className="w-[381px]">
              <Logo logoWidth={`207`} logoHeight={`47.99`} />
              <p
                className={`font-normal text-lg leading-[27.9px] text-black mt-[57px] pb-[11px]`}
              >
                Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi
                tellus vitae leo nunc.
              </p>
            </div>
            <div className="w-[716px] flex gap-x-[70px]">
              <div>
                <h3
                  className={`font-extrabold text-[22px] leading-[35.2px] mb-[13px] capitalize`}
                >
                  Company
                </h3>
                <ul
                  className={`w-[170px] flex flex-col gap-y-[13px] font-normal text-lg leading-[28.8px] mb-[13px] capitalize`}
                >
                  <li>
                    <Link to={"/"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Products Digital</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Customer Reviews</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className={`font-extrabold text-[22px] leading-[35.2px] mb-[13px] capitalize`}
                >
                  Information
                </h3>
                <ul
                  className={`w-[169px] flex flex-col gap-y-[13px] font-normal text-lg leading-[28.8px] mb-[13px] capitalize`}
                >
                  <li>
                    <Link to={"/"}>Help Center</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Payment Methods</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Return & Refund</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className={`font-extrabold text-[22px] leading-[35.2px] mb-[13px] capitalize`}
                >
                  Contact
                </h3>
                <ul
                  className={`w-[238px] flex flex-col gap-y-[13px] font-normal text-lg leading-[28.8px] mb-[13px]`}
                >
                  <li>
                    <Link
                      to={"tel:(+1) 123-456-7890"}
                      className={`flex justify-start items-center gap-x-[11.64px] mb-3`}
                    >
                      <PhoneIcon />
                      (+1) 123-456-7890
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"mailto:ramen@devsramen.com"}
                      className={`flex justify-start items-center gap-x-[11.64px]`}
                    >
                      <EmailIcon />
                      email@youremail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FooterComponent;
