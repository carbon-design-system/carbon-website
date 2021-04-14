import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';

const useColumnCount = ({ assetType }) => {
  const isTablet = useMedia({
    minWidth: breakpoints.md.width,
    maxWidth: breakpoints.lg.width,
  });
  const isDesktop = useMedia({
    minWidth: breakpoints.lg.width,
  });

  let colCount = 2;

  if (assetType === 'pictograms' && isDesktop) {
    colCount = 4;
  }

  if (assetType === 'icons') {
    if (isTablet) {
      colCount = 4;
    } else if (isDesktop) {
      colCount = 6;
    }
  }

  return colCount;
};

export default useColumnCount;
