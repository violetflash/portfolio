import { useActiveSectionContext } from '@/hooks/use-active-section-context';
import { SectionName } from '@/types';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

type UseSectionInViewProps = {
  threshold?: number;
  sectionName: SectionName;
};

export const useSectionInView = ({ threshold = 0.75, sectionName }: UseSectionInViewProps) => {

  const { ref, inView } = useInView({
    threshold
  });

  const {setActiveSection, lastClickTime} = useActiveSectionContext();

  useEffect(() => {
    // только для скролла страницы. Сработает, если после последнего клика по пункту меню прошло больше секунды.
    if (inView && (Date.now() - lastClickTime > 1000)) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClickTime]);

  return {
    ref,
    inView
  }
}