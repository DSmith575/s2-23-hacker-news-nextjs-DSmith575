/**
 * @description slug page for leader list
 * @file [title].jsx
 *
 * @author Deacon Smith
 *
 * @param {String} leaders - leader title value from URL
 * @return {JSX.Element} - Component containing Grid list of leaders
 *
 * @created 04-09-2023
 * @updated 08-09-2023
 */

import MetaTag from '@/components/metaTag/metaTag.jsx';
import Grid from '@/components/storyLayout/grid.jsx';
import { LEADERLIST } from '@/data/leaders.js';

const LeaderStories = ({ leaders }) => {
  return (
    <>
      <MetaTag pageTitle={leaders} />
      <Grid story={LEADERLIST} refPage={leaders} subPage={'user'} />
    </>
  );
};

export const getServerSideProps = (context) => {
  console.log(context);
  const leaders = context.params.leaders;

  return {
    props: {
      leaders: leaders,
    },
  };
};

export default LeaderStories;
