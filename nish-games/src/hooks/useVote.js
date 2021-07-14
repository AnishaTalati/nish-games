import { useEffect, useState } from "react";

const useVote = () => {
  const [votes, setVotes] = useState(0);

  const incVotes = () => {
    setVotes((currVote) => currVote + 1);
  };

  return { votes, incVotes };
};

export default useVote;
