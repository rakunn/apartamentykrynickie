import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterAddress = ({
  telephoneNumberLines = ["+48 502 512 418", "+48 600 006 550"],
  email = "lawenda.krynicka@gmail.com",
}) => {
  return (
    <div className="font-light p-4 w-fit flex flex-col gap-3 rounded-lg mx-auto items-center">
      <h3 className="font-medium text-center">Kontakt</h3>
      <div className="flex gap-2 items-center">
        <div className="w-6">
          <FontAwesomeIcon icon={faPhone} width={20} />
        </div>
        <div className="flex flex-col">
          {telephoneNumberLines.map((line, i) => (
            <a href={`tel:${line}`} key={i}>
              {line}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-6">
          <FontAwesomeIcon icon={faEnvelope} width={20} />
        </div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};
