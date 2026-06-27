import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { TrackedContactLink } from "@/app/components/TrackedContactLink";

export const Address = ({
  telephoneNumberLines = ["+48 502 512 418", "+48 600 006 550"],
  email = "lawenda.krynicka@gmail.com",
  addressLines = ["Krynica Zdrój", "ul. Cicha 14/ 8B1"],
}) => {
  return (
    <section className="text-primary font-light p-4 shadow-lg w-full md:w-fit flex flex-col gap-6 rounded-lg my-4 md:my-0">
      <h3 className="mb-2 font-medium">Kontakt</h3>
      <div className="flex gap-2 items-start">
        <div className="w-6">
          <FontAwesomeIcon icon={faPhone} width={20} />
        </div>
        <ul>
          {telephoneNumberLines.map((line, i) => (
            <li key={i}>
              <TrackedContactLink
                eventLabel={line}
                eventType="phone"
                href={`tel:${line.replace(/\s/g, "")}`}
              >
                {line}
              </TrackedContactLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 items-start">
        <div className="w-6">
          <FontAwesomeIcon icon={faEnvelope} width={20} />
        </div>
        <TrackedContactLink
          eventLabel={email}
          eventType="email"
          href={`mailto:${email}`}
        >
          {email}
        </TrackedContactLink>
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
