import Switcher from '@/components/Gallery/Switcher';
import SwitcherItem from '@/components/Gallery/SwitcherItem';
import IconFullFrame from '@/icons/IconFullFrame';
import IconGrid from '@/icons/IconGrid';

export type SwitcherSelection = 'full-frame' | 'grid' | 'admin';

export default function ViewSwitcher({ gallery }: { gallery: any }) {
  return (
    <Switcher>
      <SwitcherItem
        icon={<IconFullFrame />}
        href={{pathname:"/full-frame", query: { gallery: JSON.stringify(gallery) }}}
        noPadding
      />
      <SwitcherItem
        icon={<IconGrid />}
        href={{ pathname: "/grid", query: { gallery: JSON.stringify(gallery) } }}
        noPadding
      />
    </Switcher>
  );
}
