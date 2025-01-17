import NextLink from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconProp;
  to: string;
};

const SocialLink = ({ icon, to }: Props) => {
  return (
    <NextLink
      className="fa-layers fa-fw fa-2x tw-text-white hover:tw-text-red-600"
      href={to}
      target="_blank"
    >
      <FontAwesomeIcon icon={faCircle} />
      <FontAwesomeIcon
        className="tw-text-slate-800"
        icon={icon}
        transform="shrink-8"
      />
    </NextLink>
  );
};

export default SocialLink;
