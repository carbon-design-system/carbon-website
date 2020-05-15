import defaultComponents from 'gatsby-theme-carbon/src/components/MDXProvider/defaultComponents';

import MdxIcon from '../../../components/MdxIcon';
import ComponentDemo from '../../../components/ComponentDemo';
import ComponentVariant from '../../../components/ComponentDemo/ComponentVariant';

const { code: Code, ...rest } = defaultComponents;

export default {
  ...rest,
  code: 'code',
  'pre.code': Code,
  ComponentDemo,
  ComponentVariant,
  MdxIcon,
};
