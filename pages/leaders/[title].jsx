import ApiRequest from '@/utils/api/getStories';
import MetaTag from '@/components/metaTag/metaTag';
import Grid from '@/components/storyLayout/grid';
import { LEADERLIST } from '@/data/leaders';

const LeaderStories = ({ leaders }) => {
  return (
    <>
      <Grid story={LEADERLIST} refPage={`leaders/${leaders}`} />
    </>
  );
};

export const getServerSideProps = (context) => {
  const leaders = context.params.title;

  return {
    props: {
      leaders: leaders,
    },
  };
};

export default LeaderStories;
