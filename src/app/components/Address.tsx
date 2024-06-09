import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

export const Address = ({
  telephoneNumberLines = ["+48 502 512 418", "+48 600 006 550"],
  email = "lawenda.krynicka@gmail.com",
  addressLines = ["Krynica Zdrój", "ul. Cicha 14/ 8B1"],
}) => {
  return (
    <section className="text-primary font-light p-4 shadow-lg w-fit flex flex-col gap-6 rounded-lg">
      <h3 className="mb-2 font-medium">Kontakt</h3>
      <div className="flex gap-2 items-start">
        <div className="w-6">
          <FontAwesomeIcon icon={faPhone} width={20} />
        </div>
        <ul>
          {telephoneNumberLines.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 items-start">
        <div className="w-6">
          <FontAwesomeIcon icon={faEnvelope} width={20} />
        </div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="flex gap-2 items-start">
        <div className="w-6">
          <FontAwesomeIcon icon={faLocationDot} width={16} />
        </div>
        <div>
          {addressLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
