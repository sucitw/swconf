import { BannerProps } from '@/components/Banner';
import Button from '@/components/Button';

type ShowBannerPageConfigType = {
  path: string;
  props: BannerProps;
};

const showBannerPageConfigs: ShowBannerPageConfigType[] = [
  {
    path: '/',
    props: {
      title: 'sciwork Conference',
      subTitle: 'early December 2023',
      children: (
        <Button to="/cfp" variant="danger">
          Call for Proposals
        </Button>
      ),
    },
  },
  {
    path: '/cfp',
    props: {
      title: 'Call for Proposals',
      children: (
        <Button to="https://pretalx.sciwork.dev/sw23/submit/" variant="danger">
          Submit a Proposal
        </Button>
      ),
    },
  },
];

export const isPageHasBanner = (path: string) => {
  return showBannerPageConfigs.some((config) => config.path === path);
};

export const getBannerProps = (path: string) => {
  const props = showBannerPageConfigs.find(
    (config) => config.path === path,
  )?.props;
  if (!props) {
    return {
      title: 'sciwork 2023',
      showIcon: true,
    };
  } else {
    return props;
  }
};
