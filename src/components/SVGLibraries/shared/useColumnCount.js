import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';

const useColumnCount = ({ assetType }) => {
  const isTwoCol = useMedia({ maxWidth: breakpoints.md.width });
  const isFourCol = useMedia({
    minWidth: breakpoints.md.width,
    maxWidth: breakpoints.lg.width,
  });

  if (isTwoCol) {
    return 2;
  }

  return isFourCol || assetType === 'pictograms' ? 4 : 6;
};

export default useColumnCount;
