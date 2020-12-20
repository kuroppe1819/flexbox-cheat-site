import { Language } from './../../components/providers/CustomIntlProvider';
import { useIntl } from 'react-intl';

export const useCustomIntl = () => {
    const { locale, ...others } = useIntl();
    const language = locale as Language;

    return { language, ...others };
};
